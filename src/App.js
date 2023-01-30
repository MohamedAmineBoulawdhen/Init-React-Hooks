import Filter from "./components/filter";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "Frozen Planet",
      description:
        "Ambitious and epic in scale, Frozen Planet is the ultimate portrait of the polar regions, capturing all the fragile, jaw-dropping beauty and majestic power of the elements, in the greatest wildernesses on Earth.",
      posterURL: "./Frozenplanet.jpg",
      rating: 9.9,
    },
    {
      id: 1,
      title: "Flooded Tombs of the Nile",
      description:
        "Archaeologist's dive into a flooded pyramid near the Nile, to search for a king's burial that could reveal clues about the ancient kingdom of Kush.",
      posterURL: "./FloodedTombs.jpg",
      rating: 7.1,
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);
  const newMovie = {};
  const handleTitel = (e) => {
    setTitle(e.target.value);
  };
  const handledescription = (e) => {
    setDescription(e.target.value);
  };
  const handleposterURL = (e) => {
    setPosterURL(e.target.value);
  };
  const handlerating = (e) => {
    setRating(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    newMovie.id = movies.length;
    newMovie.title = title;
    newMovie.description = description;
    newMovie.posterURL = posterURL;
    newMovie.rating = rating;
    setMovies([...movies, newMovie]);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };
  return (
    <div style={{ margin: "20px" }}>
      {/**************Filter Movies****************/}
      <div style={{ margin: "20px 0px" }}>
        <Filter movies={movies} />
      </div>
      {/**************Filter Movies****************/}
      {/**************Adding Movies****************/}
      <div
        style={{
          width: "100%",
          border: "2px solid purple",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h1>Adding Movies</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label as="h2">Titel</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={handleTitel}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label as="h2">Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={handledescription}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label as="h2">Poster URL:</Form.Label>
            <Form.Control
              type="text"
              value={posterURL}
              onChange={handleposterURL}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label as="h2">Rating:</Form.Label>
            <Form.Control
              type="number"
              value={rating}
              onChange={handlerating}
              min={0}
              max={10}
              step="0.1"
              required
            />
          </Form.Group>
          <button
            type="submit"
            style={{
              width: "100%",
              border: "2px solid purple",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Add
          </button>
        </Form>
      </div>
      {/**************Adding Movies****************/}
    </div>
  );
}

export default App;
