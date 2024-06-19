import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const JobCard = ({ job, style }) => {
  return (
    <View style={[styles.card, style, { backgroundColor: job.color }]}>
      <View style={styles.topContainer}>
        <Image source={job.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.cardfooter}>{job.salary}</Text>
        <Text style={styles.cardfooter}>{job.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  company: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    top: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardfooter: {
    marginTop: 55,
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});

export default JobCard;
