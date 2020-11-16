import * as React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Header,SearchInput} from '../../components'
import CountryObject  from "./CountryObject";
import { homeStyles as styles } from './styles';
class Home extends React.Component{
    onSearchButtonTouched = ()=>
    {
        console.warn('search button touched');
    }

    onChangeSearchQuery = (text) => {
      console.warn('New text'+text);
    };
    render(){
        return(
            <View style={styles.container}>
                <ScrollView  style={styles.container}>
               <Header/>
               <SearchInput
               placeholder='Ölkə adını seçin'
               onPress={this.onSearchButtonTouched}
               onChangeText={this.onChangeSearchQuery}
               style={styles.searchInput}/>
               <CountryObject/>
                </ScrollView>
            </View>
        )
    }
}

export default Home;