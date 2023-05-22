import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, Pressable, Vibration } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.View`
  width: 300px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NameDiv = styled.View`
  height: 150px;
  align-items: center;
  justify-content: center;
  /* background-color: #888; */
`;
const InputDiv = styled.View`
  height: 250px;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: #888; */
`;
const InputBox = styled.View`
  flex-direction: row;
  width: 300px;
  height: 60px;
  border: 1.5px solid #036b3f;
  border-radius: 10px;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-around;
`;
const InputImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  margin-left: 10px;
`;

const Input = styled.TextInput`
  width: 250px;
  height: 55px;
`;
const InputError = styled.View`
  width: 300px;
  height: 30px;
  border: 2px #e1512e;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px #999;
`;
const InputErrorTransparent = styled.View`
  width: 300px;
  height: 30px;
`;
const InputErrorText = styled.Text`
  font-size: 12px;
  color: #e1512e;
  font-family: "GmarketSansTTFBold";
  font-weight: bold;
`;
const NameText = styled.Text`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: #036b3f;
`;
const ButtonDiv = styled.View`
  height: 107px;
  justify-content: space-between;
`;
const Button = styled.TouchableOpacity`
  height: 70px;
  background-color: #b0cda6;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
const Button1 = styled.TouchableOpacity`
  height: 70px;
  background-color: #036b3f;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
const JoinGuideTextDiv = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const JoinGuideText1 = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000000;
`;
const JoinGuideText2 = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #036b3f;
`;
const ButtonText = styled.Text`
  color: #f5f5f5;
  font-size: 28px;
`;
const SignupScreen = () => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [EMAIL, setEMAIL] = useState("");
  const [isValidIDPW, setIsValidIDPW] = useState(true);
  const checkID_PW = (ID, PW) => {
    const idRegExp = /^[a-zA-Z0-9]{8,15}@konkuk\.ac\.kr$/;
    const pwRegExp = /^[a-zA-Z0-9]{8,15}/;
    if (!(idRegExp.test(ID) && pwRegExp.test(PW))) Vibration.vibrate([1]);
    return idRegExp.test(ID) && pwRegExp.test(PW);
  };

  const navigation = useNavigation();
  const handlePress = () => {
    setIsValidIDPW(checkID_PW(ID, PW));
  };
  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <Container>
        <Main>
          <NameDiv>
            <NameText>KU CLASS</NameText>
          </NameDiv>
          <InputDiv>
            <InputBox>
              <InputImage source={require("../../assets/signup/id.png")} />
              <Input
                placeholder="아이디"
                placeholderTextColor="#036b3f"
                keyboardType="email-address"
                onChangeText={(text) => setID(text)}
              />
            </InputBox>
            <InputBox>
              <InputImage source={require("../../assets/signup/atsign.png")} />
              <Input
                placeholder="학교 이메일"
                placeholderTextColor="#036b3f"
                keyboardType="email-address"
                onChangeText={(text) => setID(text)}
              />
            </InputBox>
            <InputBox>
              <InputImage source={require("../../assets/signup/pw.png")} />
              <Input
                placeholder="비밀번호"
                placeholderTextColor="#036b3f"
                secureTextEntry={true}
                onChangeText={(text) => setPW(text)}
              />
            </InputBox>
            {isValidIDPW ? (
              <InputErrorTransparent></InputErrorTransparent>
            ) : (
              <InputError>
                <InputErrorText>
                  영문, 숫자, 특수문자를 포함한 8자 이상을 입력해주세요!
                </InputErrorText>
              </InputError>
            )}
          </InputDiv>
          <ButtonDiv>
            {ID && PW ? (
              <Button1 onPress={handlePress}>
                <ButtonText>SIGN UP</ButtonText>
              </Button1>
            ) : (
              <Button onPress={handlePress}>
                <ButtonText>SIGN UP</ButtonText>
              </Button>
            )}
            <JoinGuideTextDiv>
              <JoinGuideText1>이미 계정이 있다면</JoinGuideText1>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <JoinGuideText2> 로그인 </JoinGuideText2>
              </TouchableOpacity>
              <JoinGuideText1>하러가기</JoinGuideText1>
            </JoinGuideTextDiv>
          </ButtonDiv>
        </Main>
      </Container>
    </Pressable>
  );
};

export default SignupScreen;
