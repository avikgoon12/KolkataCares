import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
    return ( 
        <View style={styles.page}>
            {/* {Renderer Product component} */}
            <ProductItem item={products[0]} />
            <ProductItem item={products[1]} />
            <ProductItem item={products[2]} />
        </View>
    );
}

const styles = StyleSheet.create({
    page:{
        padding: 10
    }
})

export default HomeScreen;
