import Link from "next/link";
import { Card, Placeholder } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

// This function gets called at build time
export function getStaticProps() {
    // Call an external API endpoint to get posts
    return new Promise((resolve,reject)=>{

      fetch('https://fair-plum-cocoon-slip.cyclic.app/api/movies/573a139af29313caabcf0859').
        then(res=>res.json()).then(data=>{
        // resolve the promise with an object containing the "props" keyword, with the data for your movie (returned from the "fetch" request"), ie: {props: {movie: data}}
        resolve({ 
            props: { movie: data } 
        });
      })
    })
  }

// 573a139cf29313caabcf560f
export default function About(props) {
    // console.log(props);
    return (
        <>
            <Card className="bg-light">
                <Card.Body>
                    <PageHeader text="About the Developer: Jihyun Nam" />
                    <p>
                        Hello, My name is JIHYUN NAM, and student Number is 130641210.
                        <br/><br/><br/>
                        <Link legacyBehavior href="/movies/[title]" as={`/movies/${props.movie.title}`}>
                        <a>About  {props.movie.title}</a>
                        </Link>
                    </p>
                    <br/>
                </Card.Body>
                <MovieDetails movie={props.movie} />
            </Card>
      </>
    );
}