import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from "expo-router";

const App = () => {
  const randomImageSource = 'https://example.com/random-image.jpg';
  const randomText = 'The Bioterrorism Security Assessment Alliance (BSAA) is an international counter-terrorism organisation sanctioned by the United Nations. It was formed during the War on Terror as a means of more readily combating the rising use of biological weaponry since the collapse of Umbrella Pharmaceuticals. Originally founded by the Federation of Pharmaceutical Companies as a private paramilitary agency, the UN allowed its continued private funding as late as 2009, understanding that footing the bill on terrorism-affected countries was counterproductive.';

  return (
    <View style={styles.container}>
      <Image source={require('../assets/819ue6coZLL.jpg')} style={styles.image} />
      <Text style={styles.appName}>BSAA REGISTROS</Text>
      <Text style={styles.paragraph}>{randomText}</Text>
      return <View style={styles.flex}>
        <ScrollView>
     <Image style={styles.image} source={require('../assets/mrx.jpg')} />
     <Image style={styles.image} source={require('../assets/nemesis.jpg')} />
     <Image style={styles.image} source={require('../assets/saddler.jpg')} />
     <Image style={styles.image} source={require('../assets/jack-krauser-resident-evil-4-re4.jpg.jpg')} />
     <Image style={styles.image} source={require('../assets/sherry.jpg')} />
     <Image style={styles.image} source={require('../assets/540351-Leon-S.-Kennedy.jpg')} />
     <Image style={styles.image} source={require('../assets/claire.jpg')} />
     <Image style={styles.image} source={require('../assets/resident-evil-village-chris-redfield-miranda-lab.jpg')} />
     </ScrollView>
    </View>
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
  flex: {
    flex: 1,
    gap: 10,
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
