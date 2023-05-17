import { useState , useEffect } from "react";
import { View,Text,StyleSheet } from "react-native";

import {db} from "./configuration.js";
import SearchScreen from "./screens/search/SearchScreen.js"
import { collection, getDocs } from "firebase/firestore";


export default function App() {

  // const [classInfo, setclassInfo] = useState([]);

  // const readFromDB = async () => {
  //   try{
  //     const result = await getDocs(collection(db,"test"))
  //     setclassInfo(result.docs[1].data()); 
  //     console.log(result.docs[1].data());
  //   }
  //   catch(err){
  //     console.log("error",err.message)
  //   }

  // }

    
  // useEffect(() => {
  //   readFromDB()
  // },[])

  return (
    <View style = { style.container}>
      <SearchScreen/>
    </View>
  );
  
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#f5f5f5",
  }

})
