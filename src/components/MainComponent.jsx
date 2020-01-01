import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent.jsx';
import DishDetail from './DishDetailComponent.jsx';
import { DISHES } from '../shared/dishes.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishID) {
    this.setState( { selectedDish: dishID });
  }


  render() {
   return (
     <div className="App">
       <Navbar dark color="primary">
         <div className="container">
           <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
         </div>
       </Navbar>
       <Menu dishes={this.state.dishes}  onClick={(dishID) => this.onDishSelect(dishID)} />
       <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
    );
  }
}

export default Main;
