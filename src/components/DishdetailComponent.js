import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, 
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
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
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
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
            this.handleSubmit = this.handleSubmit.bind(this);
          }
          
        
          toggle() {
            this.setState({
              modal: !this.state.modal
            });
            
          }
          handleSubmit(values) {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            // event.preventDefault();
        }
        validate(author) {

            const errors = {
                author: ''
            };
    
            if (this.state.touched.author && author.length < 3)
                errors.author = 'Name should be >= 3 characters';
            else if (this.state.touched.author && author.length > 10)
                errors.author = 'Name should be <= 10 characters';

            return errors;
        }
        render(){
        return(
        <div className="col-md-5 m-2">
            <Button onClick={this.toggle} outline color="secondary" className="fa fa-pencil">Submit Comment</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group col-md-12">
                        <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    </Control.select>
                    </Row>
                    <Row className="form-group col-md-12">
                                <Label htmlFor="author">Your Name</Label>
                   
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                               
                            </Row>
                            <Row className="form-group col-md-12">
                                <Label htmlFor="message">Comment</Label>
    
                             
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                             
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>        
                </ModalBody>
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
