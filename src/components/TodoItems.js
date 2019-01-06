import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItems extends Component {
  getStyle = () => {
      return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px dotted #ccc',
          textDecoration: this.props.item.completed ? 'line-through' : 'none'
      }
  }

  render() {
    const { id, title } = this.props.item;

    return (
      <div style={ this.getStyle() }>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItems.propTypes = {
  item: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItems
