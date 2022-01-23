import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import {
    CardField,
    CardFieldInput,
    confirmPaymentSheetPayment,
    SafeAreaProvider,
    StripeProvider,
    useConfirmPayment,
    useStripe,
} from '@stripe/stripe-react-native';
import { NavigationRouteContext } from '@react-navigation/native';
const API_URL = 'http://localhost:4002'

export default StripeApp
    = (props) => {

        const [cardDetails, setCardDetails] = useState();
        const { confirmPayment, loading } = useConfirmPayment();

        const fetchPaymentIntentClientSecret = async () => {
            const response = await fetch(`http://localhost:4002/create-payment-intent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: {
                    paymentMethodType: "card",
                    currency: "usd"
                }
            });
            const { clientSecret, error } = await response.json();
            console.log(clientSecret)
            return {clientSecret, error};
        };


        const handlePaymentSubmittedPress = async (props) => {
            console.log(this.props)
            if (!cardDetails.complete || cardDetails === undefined) {
               return alert( 'Please enter all values to complete this transaction')
            }
            const billingDetails = {
                name: 'sara',
                email: 'sarah@go.co'
            }
           
                    const { clientSecret, error } = await
                        fetchPaymentIntentClientSecret();
                    if (error) {
                        console.log('Unable to process the payment');
                        console.log(error)
                    }
                    else {
                      
                            // confirmPayment(clientSecret, {type:"Card"}).then(response=>{console.log('response   ', response)})
                        
                        const { paymentIntent, error } = await
                            confirmPayment(clientSecret, {
                                type: "Card",
                                billingDetails: {name: 'sara'}
                            })
                        
                        if (error) {
                            alert(`Payent Confirmation Error: ${error.message}`)
                        }
                    
                        else if (paymentIntent) {
                            alert('Payment Successful :) \n thank you');
                            props.navigation.navigate("   ")
                        }
                    }
                }
                 

            
        
        return (
            <View style={styles.container}>
                <StripeProvider publishableKey='pk_test_51JtHuRLJGUXtSxBXJnr8ZWK2Pi5w4Kzn26t0sSCpHTIxks1qi0nwkxVcAZPGh4Xc2iDwBqIOYEZktan9bgn7fgSE00uOkHvWRS'>
                    <CardField
                        postalCodeEnabled={true}
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
                        onCardChange={cardDetails => {
                            setCardDetails(cardDetails);
                        }}
                        onFocus={(focusedField) => {
                            console.log('focusField', focusedField);
                        }}
                    />

                    <Button
                        title="Make Donation"
                        disabled={loading}
                        style={styles.button}
                        onPress={handlePaymentSubmittedPress}
                    />
                </StripeProvider>
            </View>
        )
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#FFFFFF'
    },
    button: {
        backgroundColor: '#3B7979',
        borderColor: '#dd7a58',
        borderWidth: 1.25,
        borderRadius: 2.5,

    }
})