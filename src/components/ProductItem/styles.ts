import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    
    root:{
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderRadius: 10,
        backgroundColor: "#fff",
        width: '100%',
        marginVertical: 5
    },
    rightContainer:{
        padding: 10,
        flex: 3,
    },
    image:{
        flex: 2,
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    title:{
       fontSize: 18 
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems:"center",
        marginVertical: 10 
    },
    star:{
        margin: 2
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: "normal",
        textDecorationLine: "line-through",
        
    }
})

export default styles;