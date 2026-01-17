// this could be a page itself, or a component you import into pages

//TODO: set up a form to collect users' data

import { useState } from "react";

export default function Form() {
  // 1. Store form data in state
  const [formValues, setFormValues] = useState({
    username: "",
    date: "",
    location: "",
    approach_score: "",
    comments: "",
    src: "",
  });

  // 2. Handle the input changes
  // -- target the correct input value
  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  // 3. Create event handler
  // -- here we will send the form data to the server
  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      // fetch the POST route and declare the headers (body) which is the value of the state
      const response = await fetch("http://localhost:8080/new-cat", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          approach_score: Number(formValues.approach_score),
        }),
      });

      // ! Look into why we do this when we already have the catch for errors?
      if (!response.ok) {
        throw new Error("Failed to submit cat");
      }

      const data = await response.json();
      console.log("New cat added", data);

      // Clear form after successful submission
      setFormValues({
        username: "",
        date: "",
        location: "",
        approach_score: "",
        comments: "",
        src: "",
      });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  }

  // 4. Create the form, with event handler on submit
  return (
    <>
      <section className="form-title">
        <h2>Spotted a cat?</h2>
        <h3>Don't be selfish, share it with the world!</h3>
      </section>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Your username:</label>
        <input
          type="text"
          required
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
        />

        <label htmlFor="date">Date of sighting:</label>
        <input
          type="date"
          required
          name="date"
          value={formValues.date}
          onChange={handleInputChange}
        />

        <label htmlFor="location">Location of sighting:</label>
        <input
          type="text"
          required
          name="location"
          value={formValues.location}
          onChange={handleInputChange}
        />

        <label htmlFor="approach_score">Approachability score:</label>
        <input
          type="number"
          required
          name="approach_score"
          min="1"
          max="5"
          value={formValues.approach_score}
          onChange={handleInputChange}
        />

        <label htmlFor="comments">Comments:</label>
        <input
          type="text"
          name="comments"
          value={formValues.comments}
          onChange={handleInputChange}
        />

        <label htmlFor="src">Image link:</label>
        <input
          type="url"
          required
          name="src"
          value={formValues.src}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>

      {/* test if it works */}
      {/* <p>Username: {formValues.username}</p>
      <p>Date: {formValues.date}</p>
      <p>Location: {formValues.location}</p>
      <p>Approachability score: {formValues.approach_score}</p>
      <p>Comments:{formValues.comments}</p>
      <p>Link: {formValues.src}</p> */}
    </>
  );
}

// On submission form entries are added to the database
