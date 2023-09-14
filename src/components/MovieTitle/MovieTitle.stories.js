import MovieTitle from './MovieTitle.jsx';
import { MOCK_MOVIES } from '../../mock/mockData.js';

export default {
  component: MovieTitle
};

export const Default = {
  args: {
    movie: MOCK_MOVIES[0],
  },
  parameters: {
  }
};
