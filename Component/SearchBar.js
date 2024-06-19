import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import filter from "../assets/filter.png";
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search a job or position"
          placeholderTextColor="#999"
        />
      </View>
      <View>
        <Image source={filter} style={styles.filter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 327,
    height: 48,
    borderRadius: 12,
    elevation: 3,
    marginVertical: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: 263,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  filter: {
    height: 48,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    marginVertical: 10,
    left: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

export default SearchBar;
