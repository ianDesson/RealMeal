import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {
  FormControl,
  MenuItem,
  Select,
  IconButton,
  OutlinedInput,
  InputLabel,
  makeStyles
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import Logo from "./images/logo-512x512.png";

/*
* Defines styles for dropdown box 
*/
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

/*
* Generates dropdown box containing Ottawa, Toronto and Montreal
*/
function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    city: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(150);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-city-simple" style={{paddingTop:"0.5rem"}}>
        City
      </InputLabel>
      <Select
        style={{marginTop:"0.5rem"}}
        value={values.city}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="city"
            id="outlined-city-simple"
          />
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Ottawa">Ottawa</MenuItem>
        <MenuItem value="Toronto">Toronto</MenuItem>
        <MenuItem value="Montreal">Montreal</MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  const classes = useStyles();
  return (
    <div id="container">
    <div id="header">
      <img src={Logo} height="300" width="300" alt="logo" />
      <div>
        <TextField
          id="SearchBar"
          label="Search for a Restaurant"
          placeholder=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          style={{fontSize:"2.5rem"}}
        />
        <SimpleSelect />
        <Link to="/restaurants">
          <IconButton color="white" aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Link>
        <br />
        <Button className={classes.button}>Breakfast</Button>        
        <Button className={classes.button}>Lunch</Button>
        <Button className={classes.button}>Dinner</Button>
        <Button className={classes.button}>Take-out</Button>
        <Button className={classes.button}>Drinks</Button>
        <br />
      </div>
    </div>
  </div>
  );
}

export default App;
