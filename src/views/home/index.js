import  React from 'react'; 
import { View, Text } from 'react-native'; 

// App Styles
import styles from './styles'

// Components
import Position from '../../components/position'

export default function Home(){
    return(

        <View style={styles.container}>
        <Position/>
        </View>
    )
}