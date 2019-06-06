import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Layout from "../components/layout";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

/*
            <TextField
              id="standard-with-placeholder"
              label="With placeholder"
              placeholder="Placeholder"
              margin="normal"
            />
*/
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));


const Checkout = (props) => {

  const classes = useStyles();
  const cost = props.cost;
  const [value, setValue] = React.useState("Credit Card");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return(
    <div>
      <Layout>
        <div className={classes.root}>
      <h1 style={{fontSize:"2rem", textAlign:'center'}}>Checkout</h1>
      <Grid container spacing={3} alignItems='center' justify='center'>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>Delivery Information</h2>
            <Grid container spacing={3}>
             <Grid item xs={4}>
             <TextField
              id="standard-with-placeholder"
              label="First Name"
              placeholder="e.g. John"
              margin="normal"
            />
            </Grid>
            <Grid item xs={4}>
             <TextField
              id="standard-with-placeholder"
              label="Last Name"
              placeholder="e.g. Smith"
              margin="normal"
            />
            </Grid>
            <Grid item xs={4}>
             <TextField
              id="standard-with-placeholder"
              label="Email"
              placeholder="e.g. example@email.com"
              margin="normal"
            />
            </Grid>
            <Grid item xs={5}>
             <TextField
              id="standard-with-placeholder"
              label="Address"
              placeholder="e.g. 123 Example Street"
              margin="normal"
            />
            </Grid>
            <Grid item xs={5}>
             <TextField
              id="standard-with-placeholder"
              label="Address 2"
              placeholder="e.g. Floor X, Apt #X, etc"
              margin="normal"
            />
            </Grid>
            <Grid item xs={4}>
             <TextField
              id="standard-with-placeholder"
              label="Country"
              placeholder="e.g. Canada"
              margin="normal"
            />
            </Grid>
            <Grid item xs={4}>
             <TextField
              id="standard-with-placeholder"
              label="State/Province"
              placeholder="e.g. Ontario"
              margin="normal"
            />
            </Grid>
            <Grid item xs={4}>
             <TextField
              id="standard-with-placeholder"
              label="ZIP Code"
              placeholder="e.g. A1A-2B2"
              margin="normal"
            />
            </Grid>
            </Grid>       
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <h2>Payment Info</h2>
          <Grid container spacing={3}>
          <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Payment Option</FormLabel>
          <RadioGroup
          aria-label="Payment Option"
          name="Choice"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="credit card" control={<Radio color='primary'/>} label="Credit Card" />
          <FormControlLabel value="debit card" control={<Radio color='primary'/>} label="Debit Card" />
          <FormControlLabel value="paypal" control={<Radio color='primary'/>} label="Paypal" />
          </RadioGroup>
          </FormControl>
          <Grid item xs={12}>
          <TextField
              id="standard-with-placeholder"
              label="Card Number"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              margin=""
            />
          </Grid>
          <Grid item xs={12}>
          <TextField
              id="standard-with-placeholder"
              label="Expiry Date"
              placeholder="MM/YY"
              margin=""
            />
          </Grid>
          </Grid>
          </Paper>
        </Grid>
        <br />
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h2>Cost</h2>
            <Grid container spacing={3}>
              <Grid item xs><p>Subtotal:</p>{props.cost}</Grid>
              <Grid item xs><p>Tax:</p>{props.cost*0.13}</Grid>
              <Grid item xs><p>Total:</p>{props.cost*1.13}</Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary" className={classes.button} marginLeft='2rem'> Confirm Purchase </Button>
        </Grid>
      </Grid>
        </div>
      </Layout>
    </div>
  )
};

export default Checkout;
