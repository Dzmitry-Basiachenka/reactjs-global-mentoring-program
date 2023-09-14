import MovieDetails from './MovieDetails.jsx';
import { MOCK_MOVIES } from '../../mock/mockData.js';

export default {
  component: MovieDetails
};

export const Default = {
  args: {
    movie: MOCK_MOVIES[0],
  },
  parameters: {
  }
};
