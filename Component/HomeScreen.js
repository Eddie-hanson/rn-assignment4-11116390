import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import JobCard from "./JobCard";
import PopularJobCard from "./Popularjobs";
import SearchBar from "./SearchBar";
import profile from "../assets/img1.jpg";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
import Tesla from "../assets/Tesla.png";
import Amazon from "../assets/Amazon.png";
import coinbase from "../assets/coinbase.png";
import IBM from "../assets/IBM.png";
import Microsoft from "../assets/Microsoft.png";
import beats from "../assets/beats.png";
import RobertHalf from "../assets/RobertHalf.png";
import Walmart from "../assets/Walmart.png";
import Turing from "../assets/Turing.png";
import BurgerKing from "../assets/BurgerKing.png";
import Dice from "../assets/Dice.png";
import GeneralElectric from "../assets/GeneralElectric.png";

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const popularJobs = [
    {
      id: 1,
      title: "Jr Executive",
      company: "Burger King",
      salary: "$98,000/y",
      location: "Los Angeles, USA",
      image: BurgerKing,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Beats",
      salary: "$84,000/y",
      location: "Florida, USA",
      image: beats,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Facebook",
      salary: "$68,000/y",
      location: "Florida, USA",
      image: facebook,
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Walmart",
      image: Walmart,
      salary: "$58,000/y",
      location: "Sunnyvale, USA",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Turing",
      image: Turing,
      salary: "$168,000/y",
      location: " Palo Alto, USA",
    },
    {
      id: 6,
      title: "Product Manager",
      company: "Dice",
      image: Dice,
      salary: "$74,000/y",
      location: "Jersey City, USA",
    },
    {
      id: 7,
      title: "UI/UX Designer",
      company: "Rober tHalf",
      image: RobertHalf,
      salary: "$92,000/y",
      location: "Florida, USA",
    },
    {
      id: 8,
      title: "DevOps Engineer",
      company: "General Electric",
      image: GeneralElectric,
      salary: "$122,000/y",
      location: " Bothell, USA",
    },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Facebook",
      salary: "$180,000",
      location: "Accra, Ghana",
      color: "#1877F2",
      image: facebook,
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Google",
      salary: "$160,000",
      location: "Mountain View, US",
      color: "#000033",
      image: google,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Apple",
      salary: "$170,000",
      location: "Cupertino, US",
      color: "#A2AAAD",
      image: apple,
    },
    {
      id: 4,
      title: "Machine Learning Engineer",
      company: "Tesla",
      salary: "$200,000",
      location: "Palo Alto, US",
      color: "#B73038",
      image: Tesla,
    },
    {
      id: 5,
      title: "Blockchain Developer",
      company: "Coinbase",
      salary: "$190,000",
      location: "San Francisco, US",
      color: "#0f62fe",
      image: coinbase,
    },
    {
      id: 6,
      title: "Cybersecurity Analyst",
      company: "IBM",
      salary: "$150,000",
      location: "Armonk, US",
      color: "#002d9c",
      image: IBM,
    },
    {
      id: 7,
      title: "Cloud Architect",
      company: "Amazon",
      salary: "$210,000",
      location: "Seattle, US",
      color: "#ff9900",
      image: Amazon,
    },
    {
      id: 8,
      title: "AR/VR Developer",
      company: "Microsoft",
      salary: "$175,000",
      location: "Redmond, US",
      color: "#202124",
      image: Microsoft,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.subHeader}>{email}</Text>
        </View>
        <Image source={profile} style={styles.profileImage} />
      </View>

      <SearchBar />

      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredJobs.map((job) => (
          <JobCard key={job.id} job={job} style={styles.featuredJobCard} />
        ))}
      </ScrollView>

      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      {popularJobs.map((job) => (
        <PopularJobCard key={job.id} job={job} style={styles.popularJobCard} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F2F2F3",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: "column",
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
  },
  subHeader: {
    fontSize: 18,
    color: "grey",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "600",
  },
  seeAll: {
    fontSize: 14,
    color: "#356899",
  },
  featuredJobCard: {
    width: 280,
    height: 186,
    marginHorizontal: 5,
    borderRadius: 24,
    marginVertical: 20,
  },
  popularJobCard: {
    width: "100%",
    marginBottom: 10,
  },
});

export default HomeScreen;
