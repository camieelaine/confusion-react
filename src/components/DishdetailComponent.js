import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-sm-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const listComments = comments.map((listItem) => {
                const commentDate = (new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(listItem.date))));
               
                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(listItem.date)))}
                return(
                    <Media tag="li" key={listItem.id}>
                        <Media body>
                            <p>{listItem.comment}</p>
                            <p>-- {listItem.author}, {commentDate}</p>
                        </Media>
                    </Media>
                );
            });

            return(
                <div className="col-12 col-sm-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <Media list className="list-unstyled">
                        {listComments}
                    </Media>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return(
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.comments)}
            </div>
        );
    }
}

export default DishDetail;