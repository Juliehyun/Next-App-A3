/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Jihyun Nam Student ID: 130641210 Date: 16th Feb, 2023
*
*
********************************************************************************/ 


import	useSWR from 'swr';
import	{useState, useEffect} from 'react';
import	{Pagination, Accordion} from 'react-bootstrap';
import	MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export default function Index() {
   // add the following state values to the component
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(`https://fair-plum-cocoon-slip.cyclic.app/api/movies?page=${page}&perPage=10`);
  // Professor Wei Song's cyclick
  // const { data, error } = useSWR(`https://web422-a1-api-wsong-2231.cyclic.app/api/movies?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if(page > 1) {
      setPage(page - 1);
    }
  }
  
  function next() {
    setPage(page + 1);
  }
  
  return (
    <div>
      <br/><br/>
      <PageHeader text="Film Collection : Sorted by Date" />
      <Accordion>
        {pageData.map((movie) => (
          <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header>
              <b>{movie.title}</b> ({movie.year}) Directed By: {movie.directors}
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
}

