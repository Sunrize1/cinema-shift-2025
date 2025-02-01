import { createSelector } from '@reduxjs/toolkit'; 

export const getFilmSchedulesIsLoading = (state) => state.filmSchedules.isLoading;
export const getFilmSchedules = (state) => state.filmSchedules.schedules;

export const getUniqueDates = createSelector(
  [getFilmSchedules], 
  (schedules) => {
    if (!schedules || schedules.length === 0) return [];

    return Array.from(
      new Map(
        schedules.map((schedule) => [
          schedule.date,
          {
            date: schedule.date,
            seances: schedule.seances, 
          },
        ])
      ).values()
    );
  }
);

export const getActiveDate = (state) => state.filmSchedules.activeDate;
export const getActiveTime = (state) => state.filmSchedules.activeTime;

export const getActiveSeances = createSelector(
  [getActiveDate], 
  (activeDate) => {
    if (!activeDate) return [];

    const seances = activeDate.seances;
    const hallsMap = {};

    seances.forEach((item) => {
      const hallName = item.hall.name;
      if (!hallsMap[hallName]) {
        hallsMap[hallName] = [];
      }

      hallsMap[hallName].push({
        id: activeDate.date + item.time,
        date: activeDate.date,
        time: item.time,
        hallName: item.hall.name,
        places: item.hall.places,
      });
    });

    return Object.keys(hallsMap).map((hallName) => ({
      hallName,
      times: hallsMap[hallName],
    }));
  }
);


