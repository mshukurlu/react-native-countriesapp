import * as React from 'react';
import {View,Text} from 'react-native';
import {headerStyles as styles} from './styles';
class Header extends React.Component{
    render()
    {
        return(
            <View style={styles.container}>
                <Text style={styles.subtitle}>Hansı ölkə maraqlıdır?</Text>
                <View styles={styles.line} />
                <Text style={styles.title}>Countries</Text>
            </View>
        )
    }
}

export default Header;