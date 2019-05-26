//React: Use PropTypes to Define the Props You Expect
/*Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.*/

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // change code below this line
  Items.propTypes = { quantity: PropTypes.number.isRequired }
  // change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };