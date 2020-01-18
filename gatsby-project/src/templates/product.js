/** @jsx jsx */
import { jsx} from "theme-ui"
import {  Link } from "gatsby"
import {
  Card,  CardText, CardBody, 
  CardTitle, CardFooter,
} from 'reactstrap';
import Img from 'gatsby-image'

const Product = ({ id, title ,description, price ,fluid}) => {
    return (
    <Card sx={{ margin:"1vh" ,padding:"0"  }} className="col-lg-3 col-md-3 col-sm-5 ">
      <Link >
      <Img sx={{
        borderRadius:" 1px solid grey"
        }}
        className="card-image-top" fluid={fluid}/>
      </Link>
      <CardBody>
        <CardTitle><Link style={{textDecoration:"none" ,fontWeight:"bold" , fontSize:"1rem",color:"#167d26"}} >{title}</Link></CardTitle>
        {/* <CardText>{description}</CardText>         */}
      </CardBody>
    <CardFooter sx={{fontWeight:"bold" }}>{price} HRK <button className="btn btn-sm btn-outline-success text-capitalize float-right 
    snipcart-add-item"
    data-item-id={id}
    data-item-name={title}
    data-item-price={price}
    data-item-image={fluid.src}
    data-item-url="https://eagrar.netlify.com/shop/"
    
    >add to cart</button></CardFooter>

    </Card>   
      
    )
  }



export default Product

