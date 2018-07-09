
import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

//create Menu Component
class Menu extends Component {
    //define constructor
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
           // var console: Console
           
        } 
       // console.log('Menu Component constructor is invoked');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
   
     //use render method to return view for component
    render() {
        //use map operator to iterate over the items in the JavaScript array
        //change state to props
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* display selected dish */}
                <DishDetail dish={this.state.selectedDish} />
                
            </div>
        );
    }

}

export default Menu;