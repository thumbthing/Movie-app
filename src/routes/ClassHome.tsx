import axios from "axios";
import React from "react";
import Movie from "../components/Movie";
import { createGlobalStyle, styled } from "styled-components";

interface JSONProps {
  id: number;
  year: string;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: string[];
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segeo UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serf;
    background-color: #eff3f7;
    height: 100%;
  }
`;

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount(): void {
    this.getMovies();
  }

  render(): React.ReactNode {
    const { isLoading, movies } = this.state;
    return (
      <>
        <GlobalStyle />
        <StyledContainer className='container'>
          {isLoading ? (
            <StyledLoader className='loader'>
              <span className='loader__text'>Loading...</span>
            </StyledLoader>
          ) : (
            <StyledMovies className='movies'>
              {movies.map((movie: JSONProps) => (
                <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={
                    movie.summary.length > 0 ? movie.summary : "no summary"
                  }
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </StyledMovies>
          )}
        </StyledContainer>
      </>
    );
  }
}

export default Home;

const StyledContainer = styled.section`
  height: 100%;
  display: flex;
  justijy-content: center;
`;
const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

const StyledMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
