import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles';

interface ProductItemProps {
    item: {
        avgRating: number,
        id: string,
        image: string,
        oldPrice?: number,
        price: number,
        ratings: number,
        title: string
    };
}

const ProductItem = (props : ProductItemProps) => {
  const {item} = props;
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
        {[0,0,0,0,0].map( (el, i) =>
          <FontAwesome key={i.toString()}
            style={styles.star}
            name={
              (i < Math.floor(item.avgRating)) ? 'star' : 'star-o'
            }
            size={18}
            color={'#e47911'}
          />)
        }
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ₹{item.price}
          {item.oldPrice && (<Text style={styles.oldPrice}> ₹{item.oldPrice}</Text>)}
        </Text>
      </View>
    </View>
  );
};


export default ProductItem;
