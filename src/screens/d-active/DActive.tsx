import {FlatList, View} from 'react-native';
import React from 'react';

import TopNav from '../../components/top-nav/TopNav';
import DActiveCard from '../../components/d-active-card/DActiveCard';
import {imagePathsDActive} from '../../constants/image-constants';
import list from '../../services/data-two.json';

const DActive = () => {
  return (
    <View>
      <TopNav title="D-active" />
      <View>
        <FlatList
          data={list}
          renderItem={({item, index}) => (
            <DActiveCard
              imageURL={imagePathsDActive[item.title]}
              color={item.color}
              title={item.title}
            />
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </View>
  );
}

export default DActive;