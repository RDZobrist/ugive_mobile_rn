// App.js

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { secondaryColor, primaryColor } from '../../constants/colors';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


const HistoryScreen = props => {
  
    this.state = {
      HeadTable: ['Date', 'Type', 'Currency', 'Amount'],
      DataTable: [
        ['12/01', 'Tithe', '$usd', '99.00'],
        ['07/12', 'Prophetic Offering', '$usd', '150.00'],
        ['03/30', 'Tithe', '$usd', '300.00'],
        ['02/11', 'Tithe', '$usd', '50.00'],
        ['01/20', 'Tithe', '$usd', '60.00']
      ]
    }
  

  
    const state = this.state;
    return (
      <View style={styles.container}>
       <View style={styles.buttonBarContainer}>
        <View style={styles.iconContainerButtonBar}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Schedule Counseling")}>
              <MaterialCommunityIcons name="monitor-dashboard" style={styles.icon} size={40} color='#fafafa' />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Verse of the Day")}>
            <View style={styles.icon}>
              <Ionicons name="receipt" size={40} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Send Message")}>
            <FontAwesome name="envelope" size={40} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Twitter Feed")}>
            <MaterialCommunityIcons name="twitter" style={styles.icon} size={45} color='#fafafa' />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Instagram Feed")}>
            <MaterialCommunityIcons name="instagram" size={40} style={styles.icon} color='#fafafa' />
          </TouchableOpacity>
        </View>
      </View>       
        <View style={styles.tableContainer}>
          <Table style={styles.Table} borderStyle={{ borderWidth: 1.33, borderColor: secondaryColor }}>
            <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
            <Rows data={state.DataTable} textStyle={styles.TableText} />
          </Table>
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fafafa'
  },
  buttonBarContainer: {
    height: 75,
    backgroundColor: primaryColor,
    marginTop: '57.75%'
  },
  iconContainerButtonBar: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '20.33%',
    marginRight: '20.33%',
    marginTop: '2.33%'

  },
  icon: {
    paddingRight: 12.5,
    paddingTop: 5.5,
    color: '#fefefe'
  },
  tableContainer: {
    flex: 1,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#ffffff'
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffffff'
  },
  TableText: {
    margin: 5
  },
  Table: {
    marginTop: '6.66%'
  }
});

export default HistoryScreen;