import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PopularJobCard = ({ job, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={job.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 16,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  company: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  infoContainer: {
    alignItems: "flex-end",
  },
  salary: {
    fontSize: 14,
    fontWeight: "500",
    color: "#999",
  },
  location: {
    fontSize: 14,
    color: "#999",
    marginTop: 10,
  },
});

export default PopularJobCard;
