import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CarDetails from './CarDetails';

class CarList extends Component {
    state = { 
        cars: []
    };

    componentWillMount() {
        axios.get('https://api.myjson.com/bins/iwpxd')
            .then(response => this.setState({ cars: response.data }));
    }

    renderList() {
        return (
            this.state.cars.map(car => 
                <CarDetails key={car.id} carData={car}/>
            )
        );
    }

    render() {
        
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}

export default CarList;
