import AddMovie from './AddMovie';

export default {
  component: AddMovie
};

export const Default = {
  args: {
    handleClose: (event) => console.log('dialog closed'),
    handleSubmit: (event) => console.log('movie added: ' + JSON.stringify(event))
  },
  parameters: {
  }
};
