// Import a library to help create a component
import React from 'react';
import { 
    Text, 
    View, 
    AppRegistry 
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/CarList';

// Create a component
const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'Performance cars'}/>
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
