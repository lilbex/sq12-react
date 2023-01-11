import React, { useEffect, useState } from "react";

// create a higher order component with a function

const withFunction = (WrappedComponent) => {
  return (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      fetch("https://json-faker.onrender.com/movies")
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.movies);
        });
    }, []);
    return <WrappedComponent movies={movies} {...props} />;
  };
};

export default withFunction;
