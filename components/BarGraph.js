import React from 'react';
import { View, Text } from 'react-native';

const BarGraph = ({ data1, data2, data3, data4 }) => {
  const barWidth = 20;
  const margin = 10;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '80%',
        margin: margin,
      }}>
      <View>
        <Text style={{ color: '#FFFF00', marginBottom: 10 }}>{data1}%</Text>
        <View
          style={{
            width: barWidth + 10,
            height: data1+20,
            backgroundColor: '#FFFF00',
            borderRadius: 10,
            marginRight: margin,
          }}
        />
      </View>

      <View>
        <Text style={{ color: '#24FF00', marginBottom: 10 }}>{data2}%</Text>
        <View
          style={{
            width: barWidth + 10,
            height: data2+20,
            backgroundColor: '#24FF00',
            borderRadius: 10,
            marginRight: margin,
          }}
        />
      </View>

      <View>
        <Text style={{ color: '#FF0000', marginBottom: 10 }}>{data3}%</Text>
        <View
          style={{
            width: barWidth + 10,
            height: data3+20,
            backgroundColor: '#FF0000',
            borderRadius: 10,
            marginRight: margin,
          }}
        />
      </View>

      <View>
        <Text style={{ color: '#00C2FF', marginBottom: 10 }}>{data4}%</Text>
        <View
          style={{
            width: barWidth + 10,
            height: data4+20,
            backgroundColor: '#00C2FF',
            borderRadius: 10,
            marginRight: margin,
          }}
        />
      </View>
    </View>
  );
};

export default BarGraph;
