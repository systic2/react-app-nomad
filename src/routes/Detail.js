import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
        <div>
          <h1>Information</h1>
          <hr />
          <h3>Movie ID : {detail.id}</h3>
          <h3>IMDB CODE : {detail.imdb_code}</h3>
          <h3>Language : {detail.language}</h3>
          <h3>Like : {detail.like_count}</h3>
          <h3>Rating : {detail.rating}</h3>
          <h3>Running Time : {detail.runtime} min</h3>
          {detail.torrents.map((torrent, index) => 
            (<h3 key={index}>Torrent {index + 1} : <Link to={torrent.url}>{torrent.url}</Link></h3>)
          )}
          <h3>URL : <Link to={detail.url}>{detail.url}</Link></h3>
        </div>
        }
    </div>
  );
}

export default Detail;
