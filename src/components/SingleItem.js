import React from 'react';
import './SingleItem.css'

class SingleItem extends React.Component {
  state = {
    quantity: 0,
    operation: '',
  }

  allowUpdate = false;

  handleAdd = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
      operation: 'add',
    }))
    this.allowUpdate = true;
  }

  handleRemove = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
      operation: 'remove',
    }))
    this.allowUpdate = true;
  }

  componentDidUpdate() {
    if (this.allowUpdate) {
      this.allowUpdate = false;
      this.props.updateAppComponent(this.props.item.price, this.state.operation);
    }
  }

  render() {
    const { id, name, price } = this.props.item;
    const style = {
      color: 'red',
      fontWeight: 'bold'
    }

    return (
      <li className='singleItem'>
        {!this.state.quantity ?
          <div>{name}</div> :
          <div style={style}>{name}</div>
        }
        <div>Price: {price}</div>
        <div className='actions'>
          <button
            onClick={this.handleAdd}
          >Add</button>

          {!this.state.quantity ?
            <button disabled>Remove</button> :
            <button
              onClick={this.handleRemove}
            >Remove</button>
          }

          <label>{this.state.quantity} - </label>
          <label>&pound; {(this.state.quantity * this.props.item.price).toFixed(2)}</label>
        </div>
      </li>
    );
  }
}

export default SingleItem;