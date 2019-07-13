import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(13, 20),
      margin: theme.spacing(10, 2),
      boxShadow: '0 3px 5px 2px rgba(50, 50, 150, .3)',
    },
  }));

  export default useStyles