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
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 60000);

    return () => clearInterval(interval);
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
                <View style={styles.listContainer}>
                  <Image
                    source={imagePaths[item.name]}
                    style={styles.listImage}
                  />
                  <View>
                    <Text style={styles.listText}>{item.text1}</Text>
                    <Text style={styles.listText}>{item.text2}</Text>
                  </View>
                </View>
                <View style={styles.listTimeContainer}>
                  <Text style={styles.listTime}>
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