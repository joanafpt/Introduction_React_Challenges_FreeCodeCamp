//React: Create a React Component
/*
MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.
*/



//This creates an ES6 class Kitten which extends the React.Component class:
/*
Also notice the Kitten class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component.
*/
class MyComponent extends React.Component {
  /*It is best practice to call a component's constructor with super, and pass props to both. This makes sure the component is initialized properly.  */
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return <div><h1>Hello React!</h1></div>


    // change code above this line
  }
};