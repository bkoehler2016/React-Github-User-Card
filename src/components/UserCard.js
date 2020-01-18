import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const UserCard = props => {
  return (
    <div>
      <Card>
        <img src={props.img} width="20%" alt={props.login}></img>
        <CardTitle>
          <strong>{props.name}</strong>
        </CardTitle>
        <CardSubtitle>
          <a href={props.url}>Profile</a>
        </CardSubtitle>

        <CardBody>Bio: {props.bio}</CardBody>
        <CardSubtitle>Location: {props.location}</CardSubtitle>
      </Card>
    </div>
  );
};

export default UserCard;
