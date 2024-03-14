import {Text, View, FlatList, SafeAreaView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

import TopNav from '../top-nav/TopNav';
import {formatTimeAgo} from '../../utils/common-utils';
import {imagePaths} from '../../constants/image-constants';
import {settings} from '../../constants/icons-constants';
import list from '../../services/data-one.json';

import styles from './NotificationsCard-styles';

const Notifications = () => {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const interval = () => {
    setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 60000);
  }
  
  useEffect(() => {
    interval()
  }, []);

  formatTimeAgo(elapsedTime);

  return (
    <SafeAreaView>
      <TopNav title="Notifications" imageRight={settings} />
      <View>
        <FlatList
          data={list}
          renderItem={({item, index}) => {
            return (
              <View>
                <View style={styles.subContainer}>
                  <Image
                    source={imagePaths[item.name]}
                    style={styles.image}
                  />
                  <View>
                  <Text style={styles.text}>{item.text.replace('Unlocked', 'Unlocked\n')}</Text>
                  </View>
                </View>
                <View style={styles.timeContainer}>
                  <Text>
                    {formatTimeAgo(elapsedTime)}
                  </Text>
                </View>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;