import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from "react";
import { useParams } from "react-router-dom";

import {fetchConcreateFilm} from "../../utils/redux/ConcreateFilm/thunks";
import { Container } from "../../components/Other/Container";
import { getConcreateFilmIsLoading, getConcreateFilm } from '../../utils/redux/ConcreateFilm/seleсtor'; 
import { Header } from "../../components/Header/header";
import { FilmCard } from "../../components/Main/filmCard";
import { FilmSchedule } from "../../components/Schedule/FilmSchedule";
import {BackArrow} from "../../components/Other/BackArrow";

export const FilmInfo = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getConcreateFilmIsLoading);
  const film = useSelector(getConcreateFilm);
  const { filmId } = useParams(); 

  useEffect(() => {
    dispatch(fetchConcreateFilm(filmId));
  }, [dispatch, filmId]); 

  if (isLoading) return (
  <Container>
    <Header />
    <div className="max-w-screen-lg mx-auto">Загрузка...</div>
  </Container>);

  return (
    <Container>
      <Header />
      <BackArrow />
      <FilmCard film={film} isDetailed={true} />
      <FilmSchedule filmId={filmId} />
    </Container>
  );
};
