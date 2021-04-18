import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const SortSelect = () =>{
    const classes = useStyles();
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
  

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return(
        <>
        <FormControl style={{marginTop:-22, minWidth:0}} className={classes.formControl}>
<InputLabel htmlFor="age-native-simple" style={{color:"white"}}>Recent</InputLabel>
<Select
  native
  value={state.age}
  onChange={handleChange}
  inputProps={{
    name: 'age',
    id: 'age-native-simple',
  }}
>
  <option aria-label="None" value="" />
  <option value={10}>Old</option>
  <option value={20}>Frequent</option>
  <option value={30}>Failed</option>
</Select>
</FormControl>
        </>
    )
}

export default SortSelect
