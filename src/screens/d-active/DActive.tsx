import {FlatList, SafeAreaView, View} from 'react-native';
import React from 'react';
import list from '../../data/data-two.json';
import TopNav from '../../components/top-nav/TopNav';
import DActiveCard from '../../components/d-active-card/DActiveCard';
import {imagePathsDActive} from '../../constants/image-constants';
import {backRight} from '../../constants/icons-constants';

export default function DActive() {
  return (
    <SafeAreaView>
      <TopNav title="D-active" imageRight={backRight} />
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
    </SafeAreaView>
  );
}