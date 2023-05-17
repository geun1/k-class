import { StatusBar } from 'expo-status-bar';
import React , {useState} from "react";
import { View,Text,StyleSheet,TextInput,Button,Pressable } from "react-native";
import {db} from "../../configuration.js"
import BasicBtn from "./BasicBtn.js";

//slider library
import RangeSlider from 'rn-range-slider';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {

  const [cName, setcName] = useState('') //className
  const [dept, setDept] = useState('')
  const [major,setMajor] = useState(0); //1 : 전공 2 : 심교 3: 기교
  
  const [grade,setGrade] = useState([false,false,false,false,false]);
  const [day,setDay] = useState([false,false,false,false,false]);

  const [noGrade,setNoGrade] = useState(false);
  
  //전공 심교 기교

  const handlePress__major = (val) => {
    if(major == 0){
      if(val === 1){ setMajor(1); }
      else if(val === 2){ //학년 선택 불가
        setMajor(2);
        //세부분야 드롭다운
      }
      else //기교 - 학년 선택 불가
      {
        setMajor(3);
      }
    }
    else setMajor(0);

    if(major > 1) setNoGrade(true)
    else setNoGrade(false)
    setTimeout(()=>{console.log(major);},10);
    
  }

  const majorCheck = (m) => {
    if(major>0) {
      if(major === m) return false;
      else return true;
    }
  }

  //학년
  const handlePress__grade = (grd) => {
    temp =[...grade];
    if(grd === "all"){
      temp[4] = !temp[4];
      setGrade(temp); 
    }
    else{
      temp[grd-1] = !temp[grd-1];
      setGrade(temp);
    }
    //console.log(temp);
  }
  
  //요일
  const handlePress__day = (idx) => {
    temp = [...day];
    temp[idx] = !temp[idx];
    setDay(temp);
    console.log(day);
  }


  return (
    <View style={style.container}>
      {/* NAV */}

      {/*//교과목 검색 */}
      <View style ={style.inputWrapper}>
        <TextInput 
          style={style.inputBar} 
          placeholder="   과목명을 입력해주세요!" 
          onChange={(e)=>{e.persist()
          setcName(e.nativeEvent.text)}}
        />
        <Ionicons name="ios-search" size={33} color="#036B3F"
        style={{position:"absolute",right : 8,top: 8}} />
      </View>

      <View style ={style.inputWrapper}>
        {/* <View>
          <Text>학과</Text>
        </View> */}
        <TextInput 
          style={style.inputBar} 
          placeholder="   학과"
          onChange={(e)=>{e.persist()
          setDept(e.nativeEvent.text)}}
        />
        <Ionicons name="ios-search" size={33} color="#036B3F"
        style={{position:"absolute",right : 8,top: 8}} />
      </View>

      {/* 심교 선택 시 3가지 선택 사항 슬라이드 다운으로 보여줌 */}
      <View style={style.btnContainer}>
        <BasicBtn name="전공" disable={majorCheck(1)}
         onPress={()=>{handlePress__major(1)}}/>
        <BasicBtn name="심교" disable={majorCheck(2)}
         onPress={()=>{handlePress__major(2)}}/>
        <BasicBtn name="기교" disable={majorCheck(3)}
         onPress={()=>{handlePress__major(3)}}/>
      </View>

      {/* 학년 선택 */}
      <View style={style.btnContainer} >
        <BasicBtn name="1" small="1" disable={grade[4]||noGrade? true:false}
         onPress={()=>{handlePress__grade(1)}}/>
        <BasicBtn name="2" small="1" disable={grade[4]||noGrade? true:false}
         onPress={()=>{handlePress__grade(2)}}/>
        <BasicBtn name="3" small="1" disable={grade[4]||noGrade? true:false}
         onPress={()=>{handlePress__grade(3)}}/>
        <BasicBtn name="4" small="1" disable={grade[4]||noGrade? true:false}
         onPress={()=>{handlePress__grade(4)}}/>
        <BasicBtn name="all" small="1"
         onPress={()=>{handlePress__grade("all")}}/>
      </View>

      {/*시간 선택 -> 슬라이드 바*/}
      <Slider 
      style={{width :200 , height:40}}
      minimumValue={0}
      maximumValue={1}
      />

      {/* 요일 선택 */}
      <View style={style.btnContainer}>
        <BasicBtn name="월" small="1" onPress={()=>handlePress__day(0)}/>
        <BasicBtn name="화" small="1" onPress={()=>handlePress__day(1)}/>
        <BasicBtn name="수" small="1" onPress={()=>handlePress__day(2)}/>
        <BasicBtn name="목" small="1" onPress={()=>handlePress__day(3)}/>
        <BasicBtn name="금" small="1" onPress={()=>handlePress__day(4)}/>
      </View>

      <View style={{height:2,backgroundColor:"#036B3F",width:"80%"}}></View>

      {/* 비활성 -> 활성/ 위에서 하나라도 선택 시 
       클릭 시 검색 시작하고 검색결과를 홈화면에서 보여준다.
      */}
      <View style={{width:"80%", flexDirection:"row", justifyContent:"flex-end"}}>
        <BasicBtn name="검색"/>
      </View>
      
      {/* MENU BAR */}
    </View>
  
  );
};

const style = StyleSheet.create({
  container : {
    flex : 0.75,
    width : 352,
    flexDirection : "column",
    alignItems:"center",
    justifyContent :"space-between",
    backgroundColor : "#fff",
    borderRadius : 15,
    paddingTop : 27,
    paddingBottom : 27
  },
  inputWrapper : {
    flexDirection : "row",
    //backgroundColor : "#2e2e2e",
    //height : 51,
  },
  inputBar : {
    width : "80%",
    height : 51,
    borderWidth : 1.5,
    borderColor :"#036B3F",
    borderRadius : 10,
    textAlign : "left",
  },
  btnContainer : {
    width : "80%",
    flexDirection : "row",
    justifyContent :"space-between",
  },

})

export default SearchScreen;
