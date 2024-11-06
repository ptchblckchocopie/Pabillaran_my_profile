import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function User() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backgroundShapes}>
        <View style={styles.circleShape1} />
        <View style={styles.circleShape2} />
        <View style={styles.triangleShape} />
      </View>
      <Image style={styles.profileImage} source={require("../assets/profile.jpg")} />
      <Text style={styles.welcomeText}>Welcome to Your Profile</Text>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Zoe Mart Derick Ranis Pabillaran</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>20</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>Male</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Contact Number:</Text>
        <Text style={styles.value}>09491147622</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>zoepabillaran49@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  backgroundShapes: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  circleShape1: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#e0f7fa",
    position: "absolute",
    top: -50,
    left: -50,
  },
  circleShape2: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#b2ebf2",
    position: "absolute",
    bottom: -100,
    right: -100,
  },
  triangleShape: {
    width: 0,
    height: 0,
    borderLeftWidth: 150,
    borderRightWidth: 150,
    borderBottomWidth: 200,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#4dd0e1",
    position: "absolute",
    top: 150,
    right: -75,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#2980b9",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 30,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    color: "#555",
  },
});
