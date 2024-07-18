
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Form from './src/components/Form';
import VideoPlayer from './src/components/VideoPlayer';



function App(): React.JSX.Element {

  return (
    <View>
      <Form />
      <VideoPlayer/>
    </View>
  );
}

export const styles = StyleSheet.create({
  input: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    margin: 5
  },
  video: {
    height: 300,
  },
  button: {
    padding: 20,
    marginBottom: 50
  }
});

export default App;
