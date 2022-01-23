import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
const { width, height } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";
import { primaryColor } from "../../constants/colors";
export default Dropdown = () => {
  const countries = ["United States", "United Kingdom", "China"];
  const countriesWithFlags = [
    { title: "$", image: require("../../assets/usa.jpeg") },
    { title: "£", image: require("../../assets/euuk.jpeg") },
    { title: "¥", image: require("../../assets/chineseMapflag.jpeg") },
  ];

 

  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>
      <View style={styles.viewContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
      
          <SelectDropdown
            data={countriesWithFlags}
            // defaultValueByIndex={1}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  {selectedItem ? (
                    <Image
                      source={selectedItem.image}
                      style={styles.dropdown3BtnImage}
                    />
                  ) : (
                    <Ionicons name="md-earth-sharp" color={"#444"} size={32} />
                  )}
                
                  {/* <FontAwesome name="chevron-down" color={"#444"} size={18} /> */}
                </View>
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                  <Image source={item.image} style={styles.dropdownRowImage} />
                </View>
              );
            }}
          />

     
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: {primaryColor},
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 10,
  },

  saveAreaViewContainer: { flex: 1, backgroundColor: "#fff", marginRight: 75 },
  viewContainer: { flex: 1, width: 100, marginBottom:0,backgroundColor: {primaryColor}},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0

  },

  dropdown3BtnStyle: {
    width: 75,
    height: 50,
    backgroundColor: {primaryColor},
    paddingHorizontal: 0,
    borderWidth: .2,
    borderRadius: 5,
    borderColor: {primaryColor},
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: 'pink',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "white" },
  dropdown3RowStyle: {
    backgroundColor: {primaryColor},
    borderBottomColor: {primaryColor},
    height: 35,
    paddingRight: 0
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: "50%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown4BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown4DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown4RowStyle: {
    backgroundColor: "#ffffff",
    borderBottomColor: {primaryColor},
  },
  dropdown4RowTxtStyle: { color: "#ffffff", textAlign: "left" },
});