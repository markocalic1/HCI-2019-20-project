/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
} from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../utils/utilityFunctions"

const Post = ({ title, author, date, slug, body, fluid, tags }) => {
  return (
    <Card sx={{ marginBottom: "2vh" }}>
      <Link to={slug}>
        <Img
          sx={{
            maxHeight: "40vh",
          }}
          className="card-image-top"
          fluid={fluid}
        />
      </Link>
      <CardBody style={{ paddingBottom: "0rem" }}>
        <CardTitle>
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#167d26",
            }}
            to={slug}
          >
            {title}
          </Link>
        </CardTitle>
        <CardSubtitle style={{ color: "#47ad57" }}>
          <span>{date} by </span>
          <span>{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul
          sx={{
            marginLeft: "0",
            padding: "0",
            display: "inline-flex",
            listStyle: "none",
          }}
        >
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge
                  sx={{
                    backgroundColor: "#167d26",
                    margin: "2px",
                    fontSize: "1.5vh",
                    padding: "0.35rem",
                  }}
                >
                  {tag.toUpperCase()}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={slug}
          className="btn  float-right "
          style={{ backgroundColor: "#167d26", color: "white" }}
        >
          Read more ->
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
