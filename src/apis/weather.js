import axios from "axios";

// const API_KEY = '115dbed065611525b98943579998e5f1'
const API_KEY = "a9bb928a4791c5e7c57238f22c2918e7";
export const getWeather = () => {    
  return axios.get("https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=${API_KEY}&units=metric&lang=vi");
};


// https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=${API_KEY}&units=metric&lang=vi
