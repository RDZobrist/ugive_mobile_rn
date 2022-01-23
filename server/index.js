import express from 'express';
import Stripe from 'stripe';

const app = express();
const PORT = process.env.PORT || 4002;
const secret = 'sk_test_51JtHuRLJGUXtSxBX3m292rCclgvFeOA5ottcwX2LijuXbHLWGn7BQOvjWh0jVlfBCfbh9qmTE8UFjzjDVXr26AkA00k5cxpROt';
const stripe = Stripe(secret, {apiVersion: "2020-08-27"})

app.listen(PORT, ()=> {console.log('lisening on port: ', PORT)});

app.post("/create-payment-intent", async (req, res) => {
try {
  const paymentIntent = stripe.paymentIntents.create({
    amount: 2000, // lowest denomination of given currency to be used for the transaction
    currency: "usd",
    payment_method_types: ["card"]
    });
    console.log(res)
  const clientSecret = paymentIntent.client_secret;
  console.log('PAYMENT INTENT: ',  paymentIntent)
  res.json({clientSecret})
} catch (error) {
  console.log(error.message);
  res.json({error:error.message})
}});

app.get('/test', (req, res)=>{
res.sendStatus(200)
} )