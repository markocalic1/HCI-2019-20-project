const {slugify} = require('./src/utils/utilityFunctions');
const path = require(`path`)
const _ = require('lodash')

exports.onCreateNode = ({ node , actions}) => {
  const { createNodeField } = actions
  if ( node.internal.type === 'Mdx'  ){
    const slugFromTitle = 'blog/' + slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
  }
}

exports.createPages = async ({actions , graphql}) => {

  const {createPage} = actions;
  const templates  = {
    singlePost: path.resolve(`./src/templates/single-post.js`),
    tagsPage: path.resolve(`./src/templates/tags-page.js`),
    tagPosts :  path.resolve(`./src/templates/tag-posts.js`),
    postList: path.resolve(`./src/templates/post-list.js`)


  }
  return graphql(`
    {
    allMdx(filter: {fileAbsolutePath: {regex: "//content/posts//"}}) {
       edges {
          node {
          id
          frontmatter {
            author            
            tags  
          }
          fields{
            slug
          }
          
        }
      }
    }
  }
  `).then( res => {
    if(res.errors) return     console.error(result.errors)

    const posts = res.data.allMdx.edges

    posts.forEach(({node}) => {
      createPage({
        path: `/${node.fields.slug}/`,
        component: templates.singlePost,
        context: {
          slug: node.fields.slug,
        }
      })
    })
//Prikupi sve tagove
    let tags =[]

    _.each(posts ,edge => {
        if(_.get(edge , 'node.frontmatter.tags')){
          tags= tags.concat(edge.node.frontmatter.tags)
        }
    })

    let tagPostCounts ={}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
    })

    tags = _.uniq(tags) //rjesavanje duplih tags
  

//kreiranje tag stranice
    createPage({
      path: `/tags`,
      component: templates.tagsPage,
      context:{
        tags,
        tagPostCounts
      },
    })


    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,

        }
      })
    })

    ///Broj postova po stranici
    const postsPerPage=3
    const numberOfPages= Math.ceil(posts.length/postsPerPage)

    Array.from({ length: numberOfPages}).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if(isFirstPage) return

      createPage({
        path:`/blog/${currentPage}`,
        component: templates.postList,
        context:{
          limit: postsPerPage,
          skip: index*postsPerPage,
          currentPage,
          numberOfPages
        },
      })
    })
  })
}
 
// const path = require(`path`)
// const slash = require(`slash`)

// // Implement the Gatsby API “createPages”. This is
// // called after the Gatsby bootstrap is finished so you have
// // access to any information necessary to programmatically
// // create pages.
// // Will create pages for WordPress pages (route : /{slug})
// // Will create pages for WordPress posts (route : /post/{slug})
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   // The “graphql” function allows us to run arbitrary
//   // queries against the local Gatsby GraphQL schema. Think of
//   // it like the site has a built-in database constructed
//   // from the fetched data that you can run queries against.

//   const result = await graphql(`
//     {
//       allWordpressPage {
//         edges {
//           node {
//             id
//             slug
//             status
//             template
//           }
//         }
//       }
//       allWordpressPost {
//         edges {
//           node {
//             id
//             slug
//             status
//             template
//             format
//           }
//         }
//       }
//     }
//   `)

//   // Check for any errors
//   if (result.errors) {
//     console.error(result.errors)
//   }

//   // Access query results via object destructuring
//   const { allWordpressPage, allWordpressPost } = result.data

//   const pageTemplate = path.resolve(`./src/components/page.js`)
//   // We want to create a detailed page for each
//   // page node. We'll just use the WordPress Slug for the slug.
//   // The Page ID is prefixed with 'PAGE_'
//   allWordpressPage.edges.forEach(edge => {
//     // Gatsby uses Redux to manage its internal state.
//     // Plugins and sites can use functions like "createPage"
//     // to interact with Gatsby.
//     createPage({
//       // Each page is required to have a `path` as well
//       // as a template component. The `context` is
//       // optional but is often necessary so the template
//       // can query data specific to each page.
//       path: `/${edge.node.slug}/`,
//       component: slash(pageTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })

//   const postTemplate = path.resolve(`./src/components/post.js`)
//   // We want to create a detailed page for each
//   // post node. We'll just use the WordPress Slug for the slug.
//   // The Post ID is prefixed with 'POST_'
//   allWordpressPost.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.slug}/`,
//       component: slash(postTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }