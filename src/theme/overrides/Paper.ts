// import { Theme } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

export default function Paper() {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },

      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  };
}
