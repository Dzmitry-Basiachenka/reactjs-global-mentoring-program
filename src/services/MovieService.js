const BACKEND_URL = 'http://localhost:4000/movies';

export const MovieService = {

  getMovies: async ({ search, genres, sort }, onSuccess, onError) => {
    const queryParams = [
      'sortOrder=asc',
      'searchBy=title',
      'limit=9',
      ...(search ? [`search=${search}`] : []),
      ...(genres && genres.length > 0 ? [`filter=${genres}`] : []),
      ...(sort ? [`sortBy=${sort}`] : [])
    ];

    const queryString = queryParams.join('&');
    const url = `${BACKEND_URL}?${queryString}`;

    try {
      await fetch(url)
        .then(response => response.json())
        .then(data => onSuccess(data.data))
        .catch(error => onError(error));
    } catch (error) {
      onError(error);
    }
  }
}
