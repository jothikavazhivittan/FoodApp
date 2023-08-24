import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const TabIcon = ({focused,icon}) => {
  return (
    <View style={{
        alignItems:"center",
        justifyContent:"center",
        height:80,
        width:50,
    }}>
        <Image
        source={icon}
        resizeMode="contain"
        style={{
            height:28,
            width:28,
            tintColor:focused?COLORS.darkGreen:COLORS.lightLime,
        }}
        />
        
        { 
        focused &&(
            <View 
            style={{
                position:"absolute",
                left:0,
                right:0,
                bottom:0,
                height:5,
                backgroundColor:COLORS.darkGreen,
                borderBottomLeftRadius:5,
                borderBottomRightRadius:5,
            }}/>

            
        )}
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({})