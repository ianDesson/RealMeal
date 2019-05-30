import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./components/Layout";
import {
  FormControl,
  MenuItem,
  Select,
  IconButton,
  OutlinedInput,
  InputLabel,
  makeStyles
} from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";
import "./styles/welcome-page.css";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./images/uottawa.png";

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

function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    city: ""
  });

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
      <InputLabel htmlFor="outlined-city-simple">City</InputLabel>
      <Select
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

ReactDOM.render(
  <Layout>
    <div id="container">
      <div id="header">
        <img src={Logo} height="300" width="300" alt="logo" />
        <div>
          <input
            id="search"
            type="textarea"
            placeholder="Search for a restaurant..."
          />
          <IconButton color="white" aria-label="Search">
            <SearchIcon />
          </IconButton>
          <br />
          <SimpleSelect />
        </div>
      </div>
      <div>
        <h1>▼</h1>
        <div>
          <button class="mealtypes">Breakfast</button>
          <button class="mealtypes">Lunch</button>
          <button class="mealtypes">Dinner</button>
          <br />
          <button class="mealtypes">Take-out</button>
          <button class="mealtypes">Drinks</button>
        </div>
      </div>
    </div>
  </Layout>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
