import React from 'react';
import {Alert} from "react-native";
import Weather from './Weather';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "ebae536c488014512693ccd6486bbeb9";

export default class extends React.Component {
  
  state = {
    isLoading : true
  };

  getWeather = async(latitude, longitude) =>{
    console.log(latitude, longitude);
    const {data: {
            main:{temp},
            weather}} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({isLoading:false, temp, condition: weather[0].main, subTitle: weather[0].description})
  };

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
        } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch(error) {
      Alert.alert("Can't find you.", "So sad")
    } 
  }

  componentDidMount() {
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition, subTitle} = this.state;
    return isLoading?<Loading/>:<Weather temp={Math.round(temp)} condition={condition} subTitle={subTitle}/>;
  }
}


