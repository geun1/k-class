import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #036b3f;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 128px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0px 12px 8px;
`;

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <Container>
      <Title>K</Title>
    </Container>
  );
};

export default SplashScreen;
