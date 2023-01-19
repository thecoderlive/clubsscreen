import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'

import ImageList from './ImageList'

const clubListItem = ({ item }) => (
<View style={styles.club_list_item}>
<Text style={styles.club_title}>{item.club_title}</Text>
<Text style={styles.club_duration}>{item.club_duration}</Text>
<Image
    style={styles.club_image}
    source={{uri: item.club_image}}
    />
<ImageList item={item.image_list}/>
</View>
  );

const ClubList = ({ item }) => (
<FlatList
    style={styles.club_list}
    data={item}
    renderItem={clubListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ClubList;

const styles = StyleSheet.create({
club_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
club_duration: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
club_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  }
});