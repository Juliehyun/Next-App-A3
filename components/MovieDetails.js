import { Container, Row, Col} from "react-bootstrap";

export default function MovieDetails(props) {
        const movie = props.movie;
        let poster;
        let directors ;
        let fullplot ;
        let cast;
        let awards;
        let imdbRating;
        let imdbVotes;
        
        // 1. Poster
        if(movie.poster) {
            poster = <Col md><img src={movie.poster} alt="poster" className="w-100" /><br /><br /></Col>;
        }
        // 2. Directors 
        if(movie.directors) {
            directors = movie.directors.join(',');
        } else {
            directors = "N/A";
        }
        // 3. Plot
        if(movie.fullplot) {
            fullplot = movie.fullplot;
        } else {
            fullplot = "N/A";
        }
        // 4. cast
        if(movie.cast) {
            cast = movie.cast.join(',');
        } else {
            cast = "N/A";
        }
        // 5. awards
        if(movie.awards) {
            awards = movie.awards.text;
        }
        // 6. lmdb.rating
        if(movie.imdb) {
            imdbRating = movie.imdb.rating;
        } else {
            imdbRating = 0;
        }
        // 6. lmdb.votes
        if(movie.imdb) {
            imdbVotes = movie.imdb.votes;
        } else {
            imdbVotes = 0;
        }
        
    // https://fair-plum-cocoon-slip.cyclic.app/api/movies?page=1&perPage=10&title=Dark%20City
    return (
        <Container>
        <Row>
          {poster}
          <Col md>
            <strong>Directed By:</strong> {directors}<br /><br />
            <p>{fullplot}</p>
            <strong>Cast:</strong> {cast}<br /><br />
            <strong>Awards:</strong> {awards}<br />
            <strong>IMDB Rating:</strong> {imdbRating} ({imdbVotes} votes)
          </Col>
        </Row>
        </Container>
    );
  }