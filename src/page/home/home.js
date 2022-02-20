import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import SearchBar from "../../components/SearchBar/searchBar";
import "./home.css";

import { ceil, isEmpty } from "lodash";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Card, Alert } from "reactstrap";
import PageInnation from "../../components/pageInnation/pageInnation";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [movies, setmovies] = useState([]);
  const [SearchedMovie, setSearchedMovie] = useState([]);
  const [page, setpage] = useState(1);
  const [WelcomeText, setWelcomeText] = useState(true);
  const [Error, setError] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [ErrorStatus, setErrorStatus] = useState(false);
  const [TotalResponse, setTotalResponse] = useState(0);
  const [TotalPage, setTotalPage] = useState(0);

  let history = useHistory();

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=ba811eaa&s=${SearchedMovie}&page=${page}`
      )
      .then((response) => {
        if (response.data.Response === "True") {
          console.log(response.data);
          setmovies(response.data.Search);
          setTotalResponse(response.data.totalResults);
          let page = ceil(response.data.totalResults / 10);
          setTotalPage(page);
          setLoader(false);
          setErrorStatus(false);
        } else {
          setError(response.data.Error);
          setErrorStatus(true);
          setLoader(false);
        }
      });
  }, [SearchedMovie, page]);

  let handleClickDetails = (Id) => {
    history.push(`${Id}`);
  };

  return (
    <div>
      <Header />

      <div className="main_container">
        {ErrorStatus ? <Alert color="danger">{Error}</Alert> : null}

        <SearchBar
          setSearchedMovies={setSearchedMovie}
          setMovies={setmovies}
          welcomeText={setWelcomeText}
          Error={setErrorStatus}
        />

        {Loader ? (
          <div className="Loader">
            <Spinner color="primary" />
          </div>
        ) : null}

        {WelcomeText ? (
          <div>
            <Card body>
              Welcome to Movie App Search Your Favourite Movie !!
            </Card>
          
          </div>
        ) : null}

        {!isEmpty(movies) && (
          <div>
            <div className="Status">
              <b>Stats:</b>
              <br />
              <div>Keyword: {SearchedMovie}</div>
              <div>Total Response: {TotalResponse}</div>
              <div>
                Page No: {page}/{TotalPage}
              </div>
            </div>

            <br></br>
            <table className="table table-hover table-bordered">
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Poster</th>
                </tr>
                {movies.map((movie) => {
                  return (
                    <tr key={movie.imdbID}>
                      <td
                        className="Id"
                        onClick={() => {
                          handleClickDetails(movie.imdbID);
                        }}
                      >
                        {movie.imdbID}
                      </td>
                      <td>{movie.Title}</td>
                      <td>{movie.Year}</td>
                      <td>
                        <a href={movie.Poster} target="_blank" rel="noreferrer">
                          Poster
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <PageInnation
              totalPages={TotalPage}
              setPage={setpage}
              pageNo={page}
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default Home;
