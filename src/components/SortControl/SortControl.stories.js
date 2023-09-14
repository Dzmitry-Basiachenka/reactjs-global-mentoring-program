import SortControl from './SortControl.jsx';
import { MOCK_SORT_OPTIONS } from '../../mock/mockData.js';

export default {
  component: SortControl
};

export const Default = {
  args: {
    sortOptions: MOCK_SORT_OPTIONS,
    defaultSortBy: MOCK_SORT_OPTIONS[1].value,
    handleChange: event => console.log(`sort by: ${event.target.value}`),
  },
  parameters: {
  }
};
