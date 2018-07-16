import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, 
    BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

        //render details when render dish is called by selectedDish
    function RenderDish({dish}) {
                return(
                    <div>
                    {/* <div className="col-12 col-md-5 m-1"> */}
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
    function RenderComments({comments}) {
            if (comments != null)
            return(
                <div>
                {/* <div className="col-12 col-md-5 m-1"> */}
                <h4>Comments</h4>
                <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                        <p>{comment.comment}</p>
                        {/* <p>-- {comment.author} , {comment.date}</p> */}
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    );
                })}
                </ul>
                <CommentForm />
            </div>
            );
            else
            return (
                <div></div>
        );

    }
    class CommentForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              modal: false
            };
        
            this.toggle = this.toggle.bind(this);
          }
        
          toggle() {
            this.setState({
              modal: !this.state.modal
            });
          }
        render(){
        return(
        <div>
            <Button onClick={this.toggle} className="fa fa-pencil">Submit Comment</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        Form Details here          
                </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
        );
    }

}
    const  DishDetail = (props) => {
        if (props.dish != null)
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
            else
                return(
                <div></div>
            );
        }
    
    export default DishDetail;
