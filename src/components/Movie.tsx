import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export interface MovieProps {
  year: string;
  title: string;
  summary: string;
  poster: string;
  genres: string[];
}

const Movie: React.FC<MovieProps> = (props) => {
  return (
    <StyledMovie>
      <Link
        to={"/movie-detail"}
        state={{
          year: props.year,
          title: props.title,
          summary: props.summary,
          genres: props.genres,
        }}
      >
        <StyledImg src={props.poster} alt={props.title} title={props.title} />
        <div className='movie__data'>
          <StyledH3 className='movie__title'>{props.title}</StyledH3>
          <StyledH5 className='movie__year'>{props.year}</StyledH5>
          <StyledUl className='movie__genres'>
            {props.genres.map((genre, index) => {
              return (
                <StyledLi key={index} className='movie__genre'>
                  {genre}
                </StyledLi>
              );
            })}
          </StyledUl>
          <p className='movie__summary'>{props.summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </StyledMovie>
  );
};

export default Movie;

const StyledMovie = styled.div`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #abaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  text-decoration: none;
  color: inherit;
`;

const StyledImg = styled.img`
  position: relative;
  top: -50px;
  max-width: 100%;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const StyledH3 = styled.h3`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
`;

const StyledH5 = styled.h5`
  margin: 0;
  font-weight: 300;
  margin-right: 10px;
  font-size: 14px;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  margin: 5px, 0px;
`;

const StyledLi = styled.li`
  margin-right: 10px;
  font-size: 14px;
`;
