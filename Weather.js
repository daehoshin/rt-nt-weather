import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName: "ios-thunderstorm",
        gradient: ["#f3e7e9","#e3eeff"],
    }, 
    Drizzle: {
        iconName: "cloud-drizzle",
        gradient: ["#007adf","#00ecbc"],
    }, 
    Rain: {
        iconName: "cloud-rain",
        gradient: ["#cfd9df","#e2ebf0"],
    }, 
    Snow: {
        iconName: "snowflake-o",
        gradient: ["#e6e9f0","#eef1f5"],
    }, 
    // Mist: {
    //     iconName: "weather-hail",
    //     gradient: ["#d558c8","#24d292"],
    // },
    // Smoke: {
    //     iconName: "weather-hail",
    //     gradient: ["#fdfcfb","#e2d1c3"],
    // }, 
    // Haze: {
    //     iconName: "weather-hail",
    //     gradient: ["#dcb0ed","#99c99c"],
    // }, 
    // Dust: {
    //     iconName: "weather-hail",
    //     gradient: ["#c79081","#dfa579"],
    // }, 
    Fog: {
        iconName: "weather-fog",
        gradient: ["#93a5cf","#e4efe9"],
    }, 
    // Sand: {
    //     iconName: "weather-hail",
    //     gradient: ["#c1c161","#d4d4b1"],
    // }, 
    // Dust: {
    //     iconName: "weather-hail",
    //     gradient: ["#c79081","#dfa579"],
    // }, 
    // Ash: {
    //     iconName: "weather-hail",
    //     gradient: ["#616161","#9bc5c3"],
    // }, 
    // Squall: {
    //     iconName: "weather-hail",
    //     gradient: ["#fff1eb","#ace0f9"],
    // }, 
    // Tornado: {
    //     iconName: "weather-hail",
    //     gradient: ["#fdfcfb","#e2d1c3"],
    // }, 
    Clear: {
        iconName: "sun",
        gradient: ["#00c6fb","#005bea"],
    }, 
    Clouds: {
        iconName: "cloud",
        gradient: ["#fff1eb","#ace0f9"]
    }
}

export default function Weather({temp, condition, subTitle}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={true}/>
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