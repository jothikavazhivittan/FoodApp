import { StyleSheet, Text, View,TouchableOpacity,Image, Platform } from 'react-native';
import React from 'react';
import { SIZES,COLORS,icons,FONTS } from '../constants';
import { BlurView } from '@react-native-community/blur';

const RecipeCardDetails=({recipeItem})=>{
  return(
    <View style={{
      flex:1,
    }}>
     <View style={{
     flex:1,
     flexDirection:"row",
     justifyContent:"space-between"
     }}>
     <Text style={{
      width:"70%",
      color:COLORS.white,
      ...FONTS.h3,
      fontSize:18
      
     }}>{recipeItem.name}
     </Text>
     <Image
      source={recipeItem.isBookmark ? icons.bookmarkFilled:icons.bookmark}
      style={{
        width:20,
        height:20,
        tintColor:COLORS.darkGreen,
        marginRight:SIZES.base,
      }}
      />
     </View>
     <Text style={{
      color:COLORS.lightGray,
      ...FONTS.body4,
     }}>{recipeItem.duration} | {recipeItem.serving}</Text>
    </View>
  );
}

const RecipeCardInfo=({recipeItem})=>{
  if(Platform.OS=== 'ios'){
    return(
      <BlurView blurType='dark'
      overlayColor=''
      blurAmount={10}
      style={styles.recipeCardContainer}
      >
        <RecipeCardDetails recipeItem={recipeItem} />
      </BlurView>
    );
 }
  else{
    return(
      <View style={{
        ...styles.recipeCardContainer,
        backgroundColor:COLORS.transparentDarkGray,
      }}>
      <RecipeCardDetails recipeItem={recipeItem}/>
      </View>
    )
  }
}

const Trendingcard = ({containerStyle,recipeItem,onPress}) => {
  return (
    <TouchableOpacity 
    styles={{
     height:350,
     width:250,
     marginTop:SIZES.radius,
     marginRight:20,
     borderRadius:SIZES.radius,
     ...containerStyle,
    }} 
     onPress={onPress}
     >
      <Image
       source={recipeItem.image}
       resizeMode="cover"
       style={{
        width:250,
        height:250,
        borderRadius:SIZES.radius,
       }}
       />
       <View style={{
        position:"absolute",
        top:20,
        left:15,
        paddingVertical:5,
        paddingHorizontal:SIZES.radius,
        backgroundColor:COLORS.transparentGray,
        borderRadius:SIZES.radius,
       }}>
        <Text 
        style={{
        color:COLORS.white,
        ...FONTS.h4,
        }}>{recipeItem.category}</Text>
     </View>
     <RecipeCardInfo recipeItem={recipeItem}/>
    </TouchableOpacity>
  );
};

export default Trendingcard;

const styles = StyleSheet.create({
  recipeCardContainer:{
    position:"absolute",
    bottom:10,
    left:10,
    right:10,
    height:100,
    paddingHorizontal:SIZES.base,
    paddingVertical:SIZES.radius,
    borderRadius:SIZES.radius,

  }
});