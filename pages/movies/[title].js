import { useRouter } from 'next/router';
import	useSWR from 'swr';
import	MovieDetails from '@/components/MovieDetails';
import	Error from 'next/error'; 
import	PageHeader from '@/components/PageHeader';

export default function Movie(props){
  const router = useRouter();
  const { title } = router.query;
  const { data, error } = useSWR(`https://fair-plum-cocoon-slip.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);
  // Professor Wei Song's cyclick
  // const { data, error } = useSWR(`https://web422-a1-api-wsong-2231.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);


  if (!data) return null;
  if (error) return <Error statusCode={404} />;
  if (data.length === 0) return <Error statusCode={404} />;

  return (
    <>
      {data.map(movie => (
        <div key={movie._id}>
          <br/><br/>
          <PageHeader text={movie.title} />
          <MovieDetails movie={movie} />
        </div>
      ))}
    </>
  );
};
