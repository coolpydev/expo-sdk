'use strict';

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default () => (
  <View
    style={{ flex: 1,
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor: '#fff' }}>
    <Text style={{ fontSize: 14 }}>
      Loading...
    </Text>
  </View>
);
