import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ClubList from './ClubList'

const Clubs = () => (
<ScrollView style={styles.clubs} showsVerticalScrollIndicator={false}>
<Text style={styles.practice_title}>{item.practice_title}</Text>
<Text style={styles.duration}>{item.duration}</Text>
<Image
    style={styles.scenario}
    source={{uri: item.scenario}}
    />
<ClubList item={item.club_list}/>
</ScrollView>
)

export default Clubs;

const styles = StyleSheet.create({
practice_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
duration: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
scenario: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  }
});