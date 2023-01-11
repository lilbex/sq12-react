// import withFetch from "../hoc/WithFetch";
import Wrapper from "../hoc/hocWithFunction";
import './style.css'

const MovieList = (props) => {
  const { movies } = props;
  return (
    <div className="movie-container">
      <h2>Movie List - With HoC</h2>
      {
        <ul>
        {movies.map((movie, index) =>(
          <li key={index}>
            <img src={movie.poster} alt={movie.title} />
            <span>{movie.title}</span>
          </li>
        ))}
        </ul>
      }
    </div>
  )
};
const HOC = Wrapper(MovieList);
export default HOC;