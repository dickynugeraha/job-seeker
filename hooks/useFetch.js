import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = process.env.RAPID_API_KEY;

const useFetch = (endpoint, params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/" + endpoint,
    params: {
      ...params,
    },
    headers: {
      // "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Key": "9869f4ebe4msh651e26824a14c38p150f01jsn9dbbdb605555",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went worng!, " + error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
