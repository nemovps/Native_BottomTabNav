import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DetailsScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}
                onPress={()=>navigation.navigate('Home')}>
                    Details Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 40,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold'
    },
  });