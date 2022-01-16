// App.js

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { secondaryColor } from '../../constants/colors';
import ButtonBar from '../components/ButtonBar';


export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
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
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
                <ButtonBar />
      <View style={styles.tableContainer}>
        <Table style={styles.Table} borderStyle={{borderWidth: 1.33, borderColor: secondaryColor}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fafafa'
  },
  tableContainer: { 
    flex: 1,
    paddingLeft:50,
    paddingRight:50,
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