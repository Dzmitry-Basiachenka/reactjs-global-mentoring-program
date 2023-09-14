export const getGenres = genres => genres.join(', ');

export const getYear = date => new Date(date).getFullYear();

export const getRuntime = runtime => `${Math.trunc(runtime / 60)}h ${runtime % 60}min`;
