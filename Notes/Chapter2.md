# Chapter 2 - Basics in React

• React
  – use this.state and setState() to manage your internal component state
  – pass functions or class methods to your element handler
  – use forms and events in React to add interactions
  – unidirectional data flow is an important concept in React
  – embrace controlled components
  – compose components with children and reusable components
  – usage and implementation of ES6 class components and functional stateless components – approaches to style your components

• ES6
  – functions that are bound to a class are class methods
  – destructuring of objects and arrays
  – default parameters

• General
  – higher order functions


Another performance relevant topic, that is often mentioned, are the implications of using arrow functions in event handlers. For instance, the onClick handler for the onDismiss() method is wrapping the method in another arrow function to be able to pass the item identifier. So every time the render() method runs, the handler instantiates the higher order arrow function. It can have an impact on your application performance, but in most cases you will not notice it. Imagine you have a huge table of data with 1000 items and each row or column has such an arrow function in an event handler. Then it is worth to think about the performance implications and therefore you could implement a dedicated Button component to bind the method in the constructor.

• Functional Stateless Components: These components are functions which get an input and return an output. The input are the props. The output is a component instance thus plain JSX. So far it is quite similar to an ES6 class component. However, functional stateless components are functions (functional) and they have no local state (stateless). You cannot access or update the state with this.state or this.setState() because there is no this object. Additionally, they have no lifecycle methods. You didn’t learn about lifecycle methods yet, but you already used two: constructor() and render(). Whereas the constructor runs only once in the lifetime of a component, the render() class method runs once in the beginning and every time the component updates. Keep in mind that functional stateless component have no lifecycle methods, when you arrive at the lifecycle methods chapter later on.

• ES6 Class Components: You already used this type of component declaration in your four components. In the class definition, they extend from the React component. The extend hooks all the lifecycle methods, available in the React component API, to the component. That way you were able to use the render() class method. Additionally, you can store and manipulate state in ES6 class components by using this.state and this.setState().

• React.createClass: The component declaration was used in older versions of React and still in JavaScript ES5 React applications. But Facebook declared it as deprecated70 in favour of JavaScript ES6. They even added a deprecation warning in version 15.571.

A HTML input tag comes with a value attribute. The value attribute usually has the value that is shown in the input field. In this case it would be the searchTerm property. However, it seems like we don’t need that in React.
That’s wrong. Form elements such as <input>, <textarea> and <select> hold their own state in plain HTML. They modify the value internally once someone changes it from the outside. In React that’s called an _uncontrolled component_, because it handles its own state. In React, you should make sure to make those elements _controlled components_.

The Button component expects a className property in the props. The className attribute is another React derivate for the HTML attribute class. But we didn’t pass any className when the Button was used. In the code it should be more explicit in the Button component that the className is optional.

Therefore, you can use the default parameter which is a JavaScript ES6 feature.

But when to use functional stateless components over ES6 class components? A rule of thumb is to use functional stateless components when you don’t need local state or component lifecycle methods. Usually you start to implement your components as functional stateless components. Once you need access to the state or lifecycle methods, you have to refactor it to an ES6 class component. 
