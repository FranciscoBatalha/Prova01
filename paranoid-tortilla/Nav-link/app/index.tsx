import React from 'react';
import { Link } from "expo-router";
import { View, Text, StyleSheet, Image } from 'react-native';


const App = () => {
  const randomImageSource = 'https://example.com/random-image.jpg';
  const randomText = 'The Bioterrorism Security Assessment Alliance (BSAA) is an international counter-terrorism organisation sanctioned by the United Nations. It was formed during the War on Terror as a means of more readily combating the rising use of biological weaponry since the collapse of Umbrella Pharmaceuticals. Originally founded by the Federation of Pharmaceutical Companies as a private paramilitary agency, the UN allowed its continued private funding as late as 2009, understanding that footing the bill on terrorism-affected countries was counterproductive.';

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
