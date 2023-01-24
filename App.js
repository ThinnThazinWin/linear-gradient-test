import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
   
<LinearGradient style={styles.container}
   colors={['#ff0000','#00ff00','#0000ff']}
   start={{x:0,y:0}}
   end={{x:0.5,y:0.5}}
   locations={[0,0.5,1]}
    >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
