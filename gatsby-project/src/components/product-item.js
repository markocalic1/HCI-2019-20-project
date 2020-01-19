import React , {Component} from 'react'
import { Row , Col  } from 'reactstrap'
import Product from '../templates/product'

const getCategories = items  => {
    let tempItems = items.map(items =>{
        return items.node.category
    });
    let tempCategories = new Set (tempItems);
    let categories = Array.from(tempCategories);

    categories = ["all" , ...categories];
    return categories;
};


export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : props.items.edges,
            productItems :  props.items.edges,
            categories :getCategories(props.items.edges)
        };
    }
    handleItems = category => {
        console.log(category);
        let tempItems=[...this.state.items];
        if( category === "all"){
            this.setState(() => {
                return{productItems:tempItems}
            })
        }
        else{
            let items = tempItems.filter(({node}) => node.category === category);
            this.setState(()=> {
                return { productItems: items}
            })
        }
    };
    

    render(){
        if(this.state.items.length > 0){
           
            return(<section className="menu py-5">
            <div className="">
                <Row style={{width:"100%" , margin:"0"}}>
                    <Col >
                        <Row className="mx-auto justify-content-center px-2">
                            
                                <h6>Filter by category :</h6>
                                {this.state.categories.map((category, index) => {
                                return(<button  key={index} className=" btn text-capitalize mx-2 mb-3" style={{backgroundColor:"#167d26" , color:"white"}} onClick={() => this.handleItems(category)}>{category}</button>)
                                })}
                        </Row>
                        <Row style={{justifyContent:"center" ,margin:"auto"}}>
                            {this.state.productItems.map(({node}) =>{
                                return(
                                        <Product
                                        id={node.id}
                                        title={node.title}
                                        description={node.description.description}
                                        price={node.price}
                                        fluid={node.image.fluid}
                                        />

                                    
                                )
                            }
                            )
                            }
                        </Row>

                    </Col>
                   
                </Row>
            </div>

        </section>);
        }
        else{
            return(<section className="menu py-5">
                <div className="container">
                    <Row>
                        <Col md="8">
                            <h1>There is no items to display</h1>

                        </Col>
                        <Col md="4">
                        
                        </Col>

                    </Row>
                </div>

            </section>)
        }
    }
}