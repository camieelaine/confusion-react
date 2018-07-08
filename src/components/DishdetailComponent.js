import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    class DishDetail extends Component {
        //render details when render dish is called by selectedDish
        renderDish(dish) {
                return(
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                );
            
        }
    
        render() {
            if (this.props.dish != null)
            return (
                <div class="container">
                <div className="row">
                  {/* <div  className="col-12 col-md-5 m-1"> */}
                    {this.renderDish(this.props.dish)}
                    {/* {this.renderComments(this.props.dish.comments)} */}
                  </div>
                </div>

            );
            else
                return(
                <div></div>
            );
        }
    
       
    }
    
    export default DishDetail;
