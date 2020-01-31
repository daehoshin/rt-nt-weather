import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Clouds: {
        iconName: "cloud",
        gradient: ["#304352","#d7d2cc"],
    }, 
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
    }
}

export default function Weather({temp, condition, subTitle}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{condition}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Mist","Smoke","Haze","Dust","Fog","Sand","Dust","Ash","Squall","Tornado","Clear","Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 40
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    }
})