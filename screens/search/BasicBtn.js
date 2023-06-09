import React,{useState} from "react";
import { View,Text,StyleSheet,TextInput,Button,Pressable } from "react-native";


const BasicBtn = ({name , small, disable , onPress}) => {

  const [isPressed , setIsPressed] = useState(false);
  const handlePressed = () => { 
    if(onPress){
      onPress();
      setIsPressed(!isPressed)
    }
  }

  if(small == 1){
    return (
      <Pressable 
        style={[style.btn__sm , {backgroundColor : isPressed ? "#036B3F" : "#ffffff"}]}
        onPress={handlePressed}
        disabled = {disable}
      >
        <Text style={[style.text,{color : isPressed? "#ffffff":"#036B3F"}]}>{name}</Text>
      </Pressable>
    )
  }
  else if(small == 2){
    return (
      <Pressable 
        style={[style.btn__md , {backgroundColor : isPressed ? '#B0CDA6' : "rgba(176, 205, 166, 0.21)"}]}
        onPress={handlePressed}
        disabled = {disable}
      >
        <Text style={[style.text__md,{color : isPressed? "#ffffff":"#036B3F"}]}>{name}</Text>
      </Pressable>
    )
  }
  else {
    return (
    <Pressable
     style ={[style.btn , {backgroundColor : isPressed ? "#036B3F" : "#ffffff"}]} 
     onPress={handlePressed}
     disabled = {disable}
     >
      <Text style={[style.text,{color : isPressed? "#ffffff":"#036B3F"}]}>{name}</Text>
    </Pressable>
    )
  }
  // return(
  //   <Pressable style ={style.btn}>
  //     <Text style={style.text}>{name}</Text>
  //   </Pressable>
  // );
}

const style = StyleSheet.create({
  btn : {
    justifyContent: "center",
    alignItems : "center",
    borderWidth : 1.5,
    borderColor :"#036B3F",
    borderRadius : 10,
    height : 50,
    width : 88,
  },
  btn__sm : {
    justifyContent: "center",
    alignItems : "center",
    borderWidth : 1.5,
    borderColor :"#036B3F",
    borderRadius : 10,
    height : 50,
    width : 50,
  },
  text : {
    color : "#036B3F",
    fontSize : 18,
    fontWeight : 700,
  },
  btn__md : {
    justifyContent: "center",
    alignItems : "center",
    width: 88,
    height: 25,
    backgroundColor :"rgba(176, 205, 166, 0.21)",
    borderRadius: 10,
  },
  text__md : {
    fontSize : 10,
    fontWeight : 700,
  }

})

export default BasicBtn;