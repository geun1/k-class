import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import HomeIcon from "../../assets/main/img_homeIcon.png";
import SearchIcon from "../../assets/main/img_searchIcon.png";
import FavIcon from "../../assets/main/img_favIcon.png";
import MyPageIcon from "../../assets/main/img_myPageIcon.png";
import BackIcon from "../../assets/detail/img_backIcon.png";
import FavWIcon from "../../assets/detail/img_favIconW.png";

const DetailScreen = ({ navigation }) => {
  const [comment, setComment] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
          <Image source={BackIcon} style={styles.topBack}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>20세기 패션사</Text>
        <Image source={FavWIcon} style={styles.topFav}></Image>
      </View>
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.listScroll}>
          <View style={styles.classInfoContainer}>
            <Text style={styles.classInfoTitle}>강의 정보</Text>
            <View style={styles.line}></View>
            <View style={styles.classInfoItem}>
              <Text style={styles.classInfoItemTitle}>과목번호</Text>
              <Text style={styles.classInfoItemContent}>3204</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.classInfoItem}>
              <Text style={styles.classInfoItemTitle}>교수님</Text>
              <Text style={styles.classInfoItemContent}>김지인</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.classInfoItem}>
              <Text style={styles.classInfoItemTitle}>강의종류</Text>
              <Text style={styles.classInfoItemContent}>일반</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.classInfoItem}>
              <Text style={styles.classInfoItemTitle}>강의실</Text>
              <Text style={styles.classInfoItemContent}>공C487</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.classInfoItem}>
              <Text style={styles.classInfoItemTitle}>강의교재</Text>
              <Text style={styles.classInfoItemContent}>HCI 3rd Edition</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.classInfoItem}>
              <Text style={styles.classInfoItemTitle}>수업 정원</Text>
              <Text style={styles.classInfoItemContent}>99명</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.classInfoItem}>
              <Text style={styles.classInfoItemTitle}>원어유형</Text>
              <Text style={styles.classInfoItemContent}>영어</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.classInfoItem}>
              <Text style={styles.classInfoItemTitle}>작년 경쟁률</Text>
              <Text style={styles.classInfoItemContent}>1.15</Text>
            </View>
          </View>
          <View style={styles.classTimeContainer}>
            <Text style={styles.classInfoTitle}>수업 시간</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.classCommentContainer}>
            <Text style={styles.classInfoTitle}>한 줄 코멘트</Text>
            <View style={styles.classCommentInputBox}>
              <TextInput
                style={styles.classCommentInputText}
                placeholder="한 줄 코멘트를 입력해주세요"
                onChangeText={(comment) => {
                  setComment(comment);
                }}
              ></TextInput>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Image source={HomeIcon} style={styles.bottomIconHome}></Image>
        <Image source={SearchIcon} style={styles.bottomIconSearch}></Image>
        <Image source={FavIcon} style={styles.bottomIconFav}></Image>
        <Image source={MyPageIcon} style={styles.bottomIconMyPage}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1.23,
    flexDirection: "row",
    backgroundColor: "#036B3F",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: 700,
    marginTop: 67,
    marginBottom: 24,
  },
  topBack: {
    marginTop: 67,
    width: 12.97,
    height: 22,
    marginBottom: 24,
  },
  topFav: {
    marginTop: 67,
    width: 30,
    height: 30,
    marginBottom: 24,
  },
  mainContainer: {
    flex: 6.21,
    backgroundColor: "#f5f5f5",
  },
  listScroll: {
    paddingVertical: 22,
    paddingHorizontal: 19,
  },
  line: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#B0CDA6",
  },
  classInfoContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 23,
    marginBottom: 15,
  },
  classInfoTitle: {
    fontWeight: 700,
    fontSize: 20,
    color: "#036B3F",
    marginBottom: 14,
  },
  classInfoItem: {
    flex: 1,
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    height: 22,
  },
  classInfoItemTitle: {
    flex: 1,
    fontWeight: 700,
    fontSize: 12,
    marginLeft: 12,
  },
  classInfoItemContent: {
    flex: 2,
    fontWeight: 500,
    fontSize: 12,
  },
  classTimeContainer: {
    paddingHorizontal: 22,
    paddingVertical: 23,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
  },
  classCommentContainer: {
    paddingHorizontal: 22,
    paddingVertical: 23,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  classCommentInputBox: {
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#B0CDA6",
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  classCommentInputText: {
    fontSize: 12,
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#036B3F",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomIconHome: {
    marginLeft: 41,
    width: 34,
    height: 38.25,
    marginRight: 55,
  },
  bottomIconSearch: {
    width: 38,
    height: 38,
    marginRight: 54,
  },
  bottomIconFav: {
    width: 38,
    height: 34.87,
    marginRight: 51,
  },
  bottomIconMyPage: {
    width: 38,
    height: 38,
    marginRight: 41,
  },
});

export default DetailScreen;
