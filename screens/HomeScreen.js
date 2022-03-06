import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import React, { useLayoutEffect } from "react";
import CustomListItem from "../Components/CustomListItem";
import { auth, db } from "../firebase";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {auth.signOut().then(() => {navigation.replace("Login")}); };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => {
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity= {0.5}>hello
      {/* //    <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} /> */}
          <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>;
      }
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <View>
          <Text>Home Page</Text>
        </View> */}
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
