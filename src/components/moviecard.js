import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div style={{ margin: "10px" }}>
      <center>
        <img src={posterURL} alt={title} style={{ width: "30%" }} />
      </center>
      <Card className="text-center" style={{ margin: "10px" }}>
        <Card.Header as="h2">{title}</Card.Header>
        <Card.Body>
          <Card.Title>Description: </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="secondary" disabled>
            Rating: {rating}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
