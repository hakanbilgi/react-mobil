import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({news}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: news.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.author}>{news.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
