import {FlatList, SafeAreaView, View} from 'react-native';
import React from 'react';
import list from '../../data/data-two.json';
import TopNav from '../../components/top-nav/TopNav';
import DActiveCard from '../../components/d-active-card/DActiveCard';
const backButton = require('../../assets/icons/back.png');
const backRight = require('../../assets/icons/backRight.png');
// const image = require('../images/scene1.png');

export default function DActive() {
  const imagePaths: {[key: string]: string} = {
    'Outer Ring': require('../../assets/images/scene1.png'),
    Focus: require('../../assets/images/scene2.png'),
    Follow: require('../../assets/images/scene3.png'),
    Scan: require('../../assets/images/scene4.png'),
    Square: require('../../assets/images/scene5.png'),
  };

  return (
    <SafeAreaView>
      <TopNav title="D-active" imageLeft={backButton} imageRight={backRight} />
      <View>
        <FlatList
          data={list}
          renderItem={({item, index}) => (
            <DActiveCard
              imageURL={imagePaths[item.title]}
              color={item.color}
              title={item.title}
            />
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
        {/* <FlatList
            data={list}
            renderItem={({item, index}) => {
              <DActiveCard imageURL= {imagePaths[item.title]} color={item.color} title={item.title}} />
              return (
                <View style={styles.listContainer}>
                  <ImageBackground source={imagePaths[item.title]} style={styles.bgImage}>
                    <View style={styles.innerContainer}>
                      <View style={styles.textContainer}>
                        <Text style={[styles.text, {color: item.color}]}>{item.title}</Text>
                      </View>
  
                      <View style={styles.buttonContainer}>
                        <Pressable style={styles.button}>
                          <Text style={styles.buttonText}>2 min</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                          <Text style={styles.buttonText}>4 min</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                          <Text style={styles.buttonText}>8 min</Text>
                        </Pressable>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              
            }
            keyExtractor={(item, index) => item.id.toString()}
          /> */}
      </View>
    </SafeAreaView>
  );
}
