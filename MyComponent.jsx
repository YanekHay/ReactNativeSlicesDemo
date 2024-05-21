// MyComponent.jsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment as incrementCounter, decrement as decrementCounter } from './counterSlice';
import { increment as incrementPersisted, decrement as decrementPersisted } from './persistedCounterSlice';

const MyComponent = () => {
  const persistedCounter = useSelector((state) => state.persistedCounter.value);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{ fontSize: 30, padding:10, marginBottom: 20, textAlign: 'center', borderColor: 'black', borderWidth: 1 }}>
        Counter: {counter}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{flex:1, marginRight: 10 }}>
          <Button color="red" title="Decrement" onPress={() => dispatch(decrementCounter())} />
        </View>
        <View style={{ flex:1, marginRight: 10 }}>
          <Button color="green" title="Increment" onPress={() => dispatch(incrementCounter())} />
        </View>
      </View>
      
      <Text style={{ marginTop:100, padding:10, fontSize: 30, marginBottom: 20, textAlign: 'center', borderColor: 'black', borderWidth: 1 }}>
        Persisted Counter: {persistedCounter}
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ flex:1, marginRight: 10 }}>
          <Button  color="red" title="Decrement" onPress={() => dispatch(decrementPersisted())} />
        </View>
        <View style={{ flex:1, marginRight: 10 }}>
          <Button color="green" title="Increment" onPress={() => dispatch(incrementPersisted())} />
        </View>

      </View>
    </View>
  );
};

export default MyComponent;
