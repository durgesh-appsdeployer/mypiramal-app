import { ImageBackground } from 'react-native'
import React from 'react'

export default function Splash({navigation}) {

  setTimeout(()=>navigation.navigate("sidebar"), 3000);

  return (
      <ImageBackground style={{flex:1}} source={require("../assets/splash.png")}/>
  )
}