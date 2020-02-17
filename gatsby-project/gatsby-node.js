const { slugify } = require("./src/utils/utilityFunctions")
const path = require(`path`)
const _ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slugFromTitle = "blog/" + slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const templates = {
    singlePost: path.resolve(`./src/templates/single-post.js`),
    tagsPage: path.resolve(`./src/templates/tags-page.js`),
    tagPosts: path.resolve(`./src/templates/tag-posts.js`),
    postList: path.resolve(`./src/templates/post-list.js`),
  }
  return graphql(`
    {
      allContentfulBlogPosts(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            slug
            category
            author
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return console.error(result.errors)

    const posts = res.data.allContentfulBlogPosts.edges

    posts.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}/`,
        component: templates.singlePost,
        context: {
          slug: node.slug,
        },
      })
    })
    //Prikupi sve tagove
    let categories = []

    _.each(posts, edge => {
      if (_.get(edge, "node.category")) {
        categories = categories.concat(edge.node.category)
      }
    })

    let categoryPostCounts = {}
    categories.forEach(category => {
      categoryPostCounts[category] = (categoryPostCounts[category] || 0) + 1
    })

    categories = _.uniq(categories) //rjesavanje duplih tags

    //kreiranje tag stranice
    createPage({
      path: `/categories`,
      component: templates.tagsPage,
      context: {
        categories,
        categoryPostCounts,
      },
    })

    categories.forEach(category => {
      createPage({
        path: `/category/${slugify(category)}`,
        component: templates.tagPosts,
        context: {
          category,
        },
      })
    })

    ///Broj postova po stranici
    const postsPerPage = 3
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return

      createPage({
        path: `/blog/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numberOfPages,
        },
      })
    })
  })
}
