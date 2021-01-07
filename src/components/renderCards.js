import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
const RenderCards = (props) => {
  return (
    <Card>
      <CardImg  src={props.data.url} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{props.data.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 font-weight-bold">
          {props.data.price} zł
        </CardSubtitle>
        <CardText>{props.data.desc}</CardText>
      </CardBody>
    </Card>
  );
};
export default RenderCards;
