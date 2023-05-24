import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import FavoriteImg from "../../assets/main/img_favorite.png";
import HomeIcon from "../../assets/main/img_homeIcon.png";
import SearchIcon from "../../assets/main/img_searchIcon.png";
import FavIcon from "../../assets/main/img_favIcon.png";
import MyPageIcon from "../../assets/main/img_myPageIcon.png";

import { useSelector } from "react-redux";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const MainScreen = ({ navigation }) => {

  const classes = useSelector((state)=> state.classes);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>수업 조회</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.filterContainer}>
          <ScrollView horizontal contentContainerStyle={styles.filterScroll}>
            <View style={styles.filterItem}>
              <Text style={styles.filterTitle}>전공</Text>
            </View>
            <View style={styles.filterItem}>
              <Text style={styles.filterTitle}>시간</Text>
            </View>
            <View style={styles.filterItem}>
              <Text style={styles.filterTitle}>구분</Text>
            </View>
            <View style={styles.filterItem}>
              <Text style={styles.filterTitle}>학년</Text>
            </View>
            <View style={styles.filterItem}>
              <Text style={styles.filterTitle}>원어</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={styles.listScroll}>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate("DetailScreen")}
            >
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </TouchableOpacity>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemNum}>1644</Text>
              <Text style={styles.listItemTitle}>20세기 패션사</Text>
              <Image source={FavoriteImg} style={styles.listItemFav}></Image>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Image source={HomeIcon} style={styles.bottomIconHome}></Image>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <Image source={SearchIcon} style={styles.bottomIconSearch}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FavScreen")}>
          <Image source={FavIcon} style={styles.bottomIconFav}></Image>
        </TouchableOpacity>

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
    backgroundColor: "#036B3F",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: 700,
    marginTop: 67,
  },
  mainContainer: {
    flex: 6.21,
    backgroundColor: "blue",
  },
  filterContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  filterScroll: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  filterItem: {
    width: SCREEN_WIDTH / 5,
    backgroundColor: "#B0CDA636",
    borderRadius: 18,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  filterTitle: {
    fontSize: 15,
    fontWeight: 500,
  },
  listContainer: {
    flex: 9.5,
    backgroundColor: "#f5f5f5",
  },
  listScroll: {
    paddingVertical: 22,
    paddingHorizontal: 19,
  },
  listItem: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
  },
  listItemNum: {
    flex: 1,
    fontSize: 18,
    fontWeight: 500,
  },
  listItemTitle: {
    flex: 2.5,
    fontSize: 18,
    fontWeight: 500,
  },
  listItemFav: {
    width: 30,
    height: 30,
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

export default MainScreen;
