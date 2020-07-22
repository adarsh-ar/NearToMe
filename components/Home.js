import React, { useState } from 'react'
import {View,Text,StyleSheet,Button, ListView, Picker, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
export function HomeScreen({ navigation }) {
   const [selectedValue,setSelectedValue] = useState("Adarsh")
    const change=(value)=>{
        Alert.alert(value)
        setSelectedValue(value)
    }
    return (
       
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <DropDownPicker items={[{label:"test",value:"test"},{label:"test1",value:"test2"}]} containerStyle={{height:50,width:250}} 
        onChangeItem={item=>{change(item.value)}}
        />
        <Button 
          title="Get Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Text>{selectedValue}</Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
    pickercontainer: {
        height: 100,
        width: 150
      }
  });
