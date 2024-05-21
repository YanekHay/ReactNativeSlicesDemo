// App.tsx
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';

import MyComponent from './MyComponent';

export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.counterPersistor}>
        <View style={styles.container}>
          <MyComponent />
        </View>
      </PersistGate>
    </Provider>
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
