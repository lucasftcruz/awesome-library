import { View, StyleSheet } from 'react-native';
import { TestView } from '@components/TestView';

export default function App() {
  return (
    <View style={styles.container}>
      <TestView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
