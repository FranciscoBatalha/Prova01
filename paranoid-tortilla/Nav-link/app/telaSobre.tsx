import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  const randomImageSource = 'https://example.com/random-image.jpg';
  const randomText = 'The B.S.A.A. was founded by a group of people who were known as the "Original Eleven". Among them was Clive O Brian, who was precisely the first director of the organization. These eleven people acted as observers and instructors for the local armed forces. The B.S.A.A. could not itself organize actions and operations, but due to the exponential growth of bioterrorism, the BSAA. it ended up changing its guidelines and started to have power and military autonomy to organize its own actions, making it much more efficient, since in this way a series of bureaucratic barriers and intermediaries were excluded. Still, the B.S.A.A. remained with some barriers, such as the fact that it could not operate freely in sovereign nations, which prevented the organization from conducting investigations, making arrests or even using military force. Although with the first measure the BSAA had become more efficient, these barriers still meant that the organization did not act as precisely and efficiently as the growing wave of bioterrorism required.';

  return (
    <View style={styles.container}>
      <Image source={require('../assets/819ue6coZLL.jpg')} style={styles.image} />
      <Text style={styles.appName}>BSAA REGISTROS</Text>
      <Text style={styles.paragraph}>{randomText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  paragraph: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default App;

