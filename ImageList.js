import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const imageListItem = ({ item }) => (
<View style={styles.image_list_item}>
<Image
    style={styles.icons}
    source={{uri: item.icons}}
   />
</View>
  );

const ImageList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.image_list}
    data={item}
    renderItem={imageListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ImageList;

const styles = StyleSheet.create({
icons: {
    width: '10vw',
    height: '10vw',
    margin: 5
  }
});