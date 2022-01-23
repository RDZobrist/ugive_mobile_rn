import React, { useState, useEffect } from "react";
import { StyleSheet, View} from 'react-native';
import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native';
import axios from 'axios';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
 const primaryColor =  '#3B7979';
 const secondaryColor = '#dd7a58';
const PaymentScreen = () => {
  const [card, setCard] = useState(CardFieldInput.Details | null);
  const API_URL = "http://localhost:4002";
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };
  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();
    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setLoading(true);
    }
  };
  const makePayment = ()=>{
    axios({
      url: `${API_URL}/create-checkout-session`,
      method: 'post', 
      data: {
          amount: 100
          
      }
  }).then(res => {
      return res

  }).catch(err => {
      return console.log('Payment error: ', err);
  });
  }
  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet({ clientSecret });
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };
  useEffect(() => {
    initializePaymentSheet();
  }, []);
  return (
    <View style={styles.container}>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#dd7a58',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          setCard(cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
        
        <Button
                title="Make Donation"
                type="outline"
                raised
                titleStyle={{ color: '#ffffff' }}
                containerStyle={{
                  width: '80%',
                  marginVertical: 5,
                  marginLeft: '10%',
                  marginRight:'10%'
                }}
                style={styles.button}
                onPress={()=>makePayment()}
              />
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 20,
     marginHorizontal: 10,
     marginVertical: 10,
     backgroundColor: '#FFFFFF'
  },
  button: {
     backgroundColor:'#3B7979',
     borderColor: '#dd7a58',
     borderWidth: 1.25,
     borderRadius: 2.5      ,
      
  }
})
export default PaymentScreen