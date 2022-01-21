import React, { useState } from 'react';
import { render } from 'react-dom';
import { AntDesign } from '@expo/vector-icons';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { primaryColor } from '../../constants/colors';
const MakeDonationScreen = ({ route, navigation }) => {

    const [propheticAmount, updatePropheticAmount] = useState(0);
    const [offeringAmount, updateOfferingAmount] = useState(0);
    const [missionAmount, updateMissionAmount] = useState(0);
    const [seedAmount, updateSeedAmount] = useState(0);
    const [buildingAmount, updateBuildingAmount] = useState(0);
    const [titheAmount, updateTitheAmount] = useState(0);

    let { donationTypes } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
           
                {donationTypes.map(donationType => {

                    switch (donationType) {
                        case 'tithe':
                            return (
                                <View style={styles.containerUpperForm}>
                                    <Text style={styles.upperformLabel}>{donationType}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updateTitheAmount(titheAmount - 1)}><AntDesign name="minuscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                    <Text style={styles.span}>{titheAmount}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updateTitheAmount(titheAmount + 1)}><AntDesign name="pluscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                </View>
                            )
                            break;

                        case 'offering':
                            return (
                                <View style={styles.containerUpperForm}>
                                    <Text style={styles.upperformLabel}>{donationType}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updateMissionAmount(missionAmount - 1)}><AntDesign name="minuscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                    <Text style={styles.span}>{missionAmount}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updateMissionAmount(missionAmount + 1)}><AntDesign name="pluscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                </View>
                            )
                            break;
                        case 'seed':
                            return (
                                <View style={styles.containerUpperForm}>
                                    <Text style={styles.upperformLabel}>{donationType}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updateSeedAmount(seedAmount - 1)}><AntDesign name="minuscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                    <Text style={styles.span}>{seedAmount}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updateSeedAmount(seedAmount + 1)}><AntDesign name="pluscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                </View>
                            )
                            break;
                        case 'building':
                            return (
                                <View style={styles.containerUpperForm}>
                                    <Text style={styles.upperformLabel}>{donationType}</Text> 
                                     <TouchableOpacity style={styles.div} onPress={() => updateBuildingAmount(buildingAmount - 1)}><AntDesign name="minuscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                    <Text style={styles.span}>{buildingAmount}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updateBuildingAmount(buildingAmount + 1)}><AntDesign name="pluscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                </View>
                            )
                            break;
                        case 'mission':
                            return (
                                <View style={styles.containerUpperForm}>
                                    <Text style={styles.upperformLabel}>{donationType}</Text>                                    
                                    <TouchableOpacity style={styles.div} onPress={() => updateOfferingAmount(offeringAmount - 1)}><AntDesign name="minuscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                    <Text style={styles.span}>{offeringAmount}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updateOfferingAmount(offeringAmount + 1)}><AntDesign name="pluscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                </View>
                            )
                            break;
                        case 'prophetic':
                            return (
                                <View style={styles.containerUpperForm}>
                                    <Text style={styles.upperformLabel}>{donationType}</Text>                                    
                                    <TouchableOpacity style={styles.div} onPress={() => updatePropheticAmount(propheticAmount - 1)}><AntDesign name="minuscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                    <Text style={styles.span}>{propheticAmount}</Text>
                                    <TouchableOpacity style={styles.div} onPress={() => updatePropheticAmount(propheticAmount + 1)}><AntDesign name="pluscircleo" size={30} color={primaryColor} /></TouchableOpacity>
                                </View>
                            )
                            break;
                    }
                   


                })}
                 <View style={styles.totalContainer}>
                        <Text style={styles.textTotal}>${offeringAmount+missionAmount+buildingAmount+titheAmount+propheticAmount+seedAmount}</Text>
                    </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'

    },
    text: {
        fontSize: 30,
    },
    textTotal: {
        fontSize: 30,
        marginLeft: '40%'
        },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    span: {
        paddingLeft: 7.5,
        paddingRight: 7.5,
        fontSize: 26
    },
    containerUpperForm: {
        flex: .33,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8
    },
    upperformLabel: {
        paddingTop: 1.5,
        paddingRight: 60,
        textTransform: 'uppercase',
        fontSize: 22
    },
    totalContainer: {
        marginBottom: 20,
        fontSize: 50,

    }
});

export default MakeDonationScreen;
