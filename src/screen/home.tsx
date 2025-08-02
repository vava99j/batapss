import React from "react";
import {View } from 'react-native';
import styles from "../style/style";
import {BatLogo} from "../component/BatBtnlogo";
import { BatText } from '../component/BatInputCopy'; 

export default function Home() {
    return (
        <View style= {styles.appContainer}>
           <View style={styles.logoConteiner}> 
            <BatLogo/> 
          
            </View>
            <View style={styles.inputConteiner}> 
                 </View>
        </View>
    );
}