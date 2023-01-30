import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import MovieList from "./movielist";
const Filter = ({ movies }) => {
  const [title, setTitle] = useState("");
  const [minRating, setMinRating] = useState(0);
  const onFilter = (movies, title, minRating) => {
    if (title === "" && minRating === 0) {
      return movies;
    } else if (title === "" && minRating >= 0) {
      return movies.filter((item) => item.rating >= minRating);
    } else if (title !== "" && minRating >= 0) {
      return movies.filter(
        (item) =>
          item.title.toLowerCase() === title.toLowerCase() &&
          item.rating >= minRating
      );
    } else {
      return movies.filter(
        (item) =>
          item.titel.toLowerCase() === title.toLowerCase() &&
          item.rating >= minRating
      );
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setMinRating(e.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        border: "2px solid purple",
        padding: "10px 15px",
        borderRadius: "10px",
      }}
    >
      {/**************Filter Movies****************/}
      <Form>
        <Row className="mb-3">
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            as={Col}
          >
            <Form.Label
              as={Col}
              style={{
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Titel
            </Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            as={Col}
          >
            <Form.Label
              as={Col}
              style={{
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Rating:
            </Form.Label>
            <Form.Control
              type="number"
              value={minRating}
              onChange={handleRatingChange}
              min={0}
              max={10}
              step="0.1"
            />
          </Form.Group>
        </Row>
        <hr />
      </Form>

      {/**************Filter Movies****************/}
      {onFilter(movies, title, minRating).length === 0 && (
        <h1>No Items Found!</h1>
      )}
      {!(onFilter(movies, title, minRating).length === 0) && (
        <MovieList movies={onFilter(movies, title, minRating)} />
      )}
    </div>
  );
};

export default Filter;
