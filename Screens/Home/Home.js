import { TouchableOpacity, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign } from "@expo/vector-icons";

import { CreatePostScreen } from "../CreatePostScreen";
import { PostScreen } from "../PostScreen/PostScreen";

import { header, headerTitle, plusIcon } from "./HomeStyles";
import { ProfileScreen } from "../ProfileScreen";

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: header,
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 83,
          borderTopWidth: 1,
          borderTopColor: "#bdbdbd",
        },
        headerTitleStyle: headerTitle,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Feather name="grid" size={24} color="#212121cc" />,

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ marginRight: 16 }}
            >
              <Feather name="log-out" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          ),
        }}
        name="Posts"
        component={PostScreen}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <View style={plusIcon}>
              <Feather name="plus" size={24} color="#fff" />
            </View>
          ),

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Posts")}
              style={{ marginLeft: 16 }}
            >
              <AntDesign name="arrowleft" size={24} color="#212121cc" />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
        }}
        name="Create post"
        component={CreatePostScreen}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#212121CC" />,
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};
