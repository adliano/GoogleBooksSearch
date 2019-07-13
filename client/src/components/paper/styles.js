import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(5, 1),
      margin: theme.spacing(9, 2),
      boxShadow: '0 3px 5px 2px rgba(50, 50, 150, .3)',
    },
  }));

  export default useStyles