import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderLeader({leaders}) {
        if (leaders != null)
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Leaders</h4>
                
                {leaders.map((leader) => {
        // const leaders = props.leaders.map((leader) => {
        return(
            <div className="col-12 col-md-5 m-1">
            
            <Card>
                <CardImg top src={leader.image} alt={leader.name} />
                <CardBody>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardText>{leader.designation}</CardText>
                  <CardText>{leader.description}</CardText>
                </CardBody>
            </Card>
            </div>
            );
        })}
         </div>
        );
        else
        return (
            <div></div>
    );

}

export default RenderLeader;
