//React: Render State in the User Interface Another Way
/*In the MyComponent render method, define a const called name and set it equal to the name value in the component's state. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.
Next, in the return statement, render this value in an h1 tag using the variable name. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement. */

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // In the MyComponent render method, define a const called name and set it equal to the name value in the component's state. 
      const name = this.state.name;
      // change code above this line
      return (
        <div>
          { /* in the return statement, render this value in an h1 tag using the variable name */}
          <h1>{name}</h1>
        </div>
      );
    }
  };
