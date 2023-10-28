import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://api.disneyapi.dev/character');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('error is', error);
    }
  };

  return (
    <View>
      <Text>Fetch Data</Text>
      <Button onPress={getData} title='Click here' />
    </View>
  );
};

export default MyComponent;
