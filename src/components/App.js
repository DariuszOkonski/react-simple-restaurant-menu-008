import React from 'react';
import './App.css';
import Header from './Header';
import ListItems from './ListItems';

const menu = [
  { id: 1, name: 'hamburger', price: 2.5 },
  { id: 2, name: 'cheesburger', price: 2.8 },
  { id: 3, name: 'gyros', price: 3.2 },
  { id: 4, name: 'kebab', price: 2.6 },
  { id: 5, name: 'fish and chips', price: 3.6 },
  { id: 6, name: 'coca-cola', price: 0.5 },
  { id: 7, name: 'pepsi-cola', price: 0.6 },
  { id: 8, name: 'tea', price: 0.7 },
  { id: 9, name: 'coffe', price: 1.2 },
  { id: 10, name: 'pizza', price: 4.6 },
  { id: 11, name: 'hot-dog', price: 3.6 },
]

class App extends React.Component {
  state = {
    items: 0,
    bill: 0,
  }

  updateAppComponent = (price, operation) => {

    if (operation === 'add') {
      this.setState(prevState => ({
        items: prevState.items + 1,
        bill: prevState.bill + price,
      }))
    } else if (operation === 'remove') {
      this.setState(prevState => ({
        items: prevState.items - 1,
        bill: prevState.bill - price,
      }))
    } else {
      alert('Unknown operation');
    }
  }

  roundNumber = (num, scale) => {
    if (!("" + num).includes("e")) {
      return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
      var arr = ("" + num).split("e");
      var sig = ""
      if (+arr[1] + scale > 0) {
        sig = "+";
      }
      return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
  }



  render() {
    return (
      <div className="app">
        <Header state={this.state} />

        <ListItems
          menu={menu}
          updateAppComponent={this.updateAppComponent}
        />
      </div>
    );
  }
}

export default App;
