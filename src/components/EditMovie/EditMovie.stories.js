import EditMovie from './EditMovie';
import { MOCK_MOVIES } from '../../mock/mockData.js';

export default {
  component: EditMovie
};

export const Default = {
  args: {
    movie: MOCK_MOVIES[0],
    handleClose: (event) => console.log('dialog closed'),
    handleSubmit: (event) => console.log('movie edited: ' + JSON.stringify(event))
  },
  parameters: {
  }
};
