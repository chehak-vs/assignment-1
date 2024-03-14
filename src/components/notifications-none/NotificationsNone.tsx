import {Text, View, Image} from 'react-native';
import React from 'react';

import TopNav from '../top-nav/TopNav';
import {bell} from '../../constants/image-constants';
import {settings} from '../../constants/icons-constants';

import styles from './NotificationsNone-styles';

const NotificationsNone = () => {
  return (
    <View style={styles.container}>
      <TopNav title="Notifications" imageRight={settings} />
      <View style={styles.subContainer}>
        <Image source={bell} style={styles.image} />
        <View>
          <Text style={styles.title}>No Notifications Yet!</Text>
          <Text style={styles.text}>
          {'You have no notification right now.\nCome back later.'}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationsNone;