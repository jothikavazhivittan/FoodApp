import { Text, View, StatusBar, ImageBackground } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, images } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import { CustomButton } from '../Components';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation =useNavigation()
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? '65%':'60',
        }}>
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          resizeMode="cover">
            <LinearGradient
            start={{x:0,y:0}}
            end={{x:0,y:0}}
            colors={[COLORS.transparent,COLORS.black]}
            style={{
              height:150,
              justifyContent:"flex-end",
              paddingHorizontal:SIZES.padding
            }}
            >
            <Text 
            style={{
                  width:"50",
                  color:COLORS.white,
                  lineHeight:50,
                  ...FONTS.largeTitle
            }}>
               Cooking a Delicious Food Easily
               </Text>
            </LinearGradient>
      </ImageBackground>
      </View >
    );
  }
  function renderDetails(){
    return(
      <View style={{
        flex:1,
        paddingHorizontal:SIZES.padding,  
      }}>
      <Text style={{
        marginTop:SIZES.radius,
        width:250,
        color:COLORS.gray,
        ...FONTS.body3,
      }}>
        Discover more than 1500 food recipes in your hands and cooking it easily!
      </Text>
      <View>
      <CustomButton
      buttonText="Login"
      colors={[COLORS.darkGreen,COLORS.lime]}
      buttonContainerStyle={{
        paddingVertical:12,
        boderRadius:15,
        marginTop:SIZES.radius
        
      }}
      onPress={()=>navigation.navigate('Home')}
      />
      <CustomButton
      buttonText="Sign up"
      colors={[]} 
      buttonContainerStyle={{
        paddingVertical:12,
        boderRadius:15,
        marginTop:SIZES.radius,
        borderColor:COLORS.darkLime,
        borderWidth:1
      }}
      onPress={()=>navigation.navigate('Home')}
      />
       </View>
      </View>
    )
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.black,
    }}>
      <StatusBar barStyle={"light-content"} />
      {renderHeader()}
      {renderDetails()}
    </View>
  );
};

export default Login;

