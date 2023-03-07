## Getting Started

Installing React
`npx create-react-app [name of our app]`

## Running the App

Make sure you are in the directory of your app!
`npm start` in the root directory of your app.

## Public Folder

- Really shouldn't touched unless you need to bring in the following: - Googlefonts - Fontawesome - Theming Libraries
  The index.html file just has a single div with an id of root. That is where react will be injecting all the HTML that you will see in the browser.

## Rules of JSX

- Must Export for it to be used
- Must be imported to be used
- Must be mounted to be used
- Must only return ONE JSX element

## Example of Boiler Plate Component

```jsx
function Header() {
  return (
    <>
      <h2>Hello from Header</h2>
    </>
  );
}

export default Header;
```

## Example of Importing and Mounting

```jsx
import "./App.css";
import Header from "./components/header/Header"; //<--- Importing
function App() {
  const firstName = "Rob";
  return (
    <div className="App">
      <h2>Welcome {firstName}</h2>
      <Header /> //<---- Mounting
    </div>
  );
}

export default App;
```

## Styling

You can either do inline styling or import a css file

- inline styling requires an object of attributes and values
- classes make sure you use `className` and import the css file.

```jsx
import "./Footer.css";

const styles = {
  h6: {
    fontSize: "23px",
    border: "solid 3px black",
  },
};

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <h6 className="footer" style={styles.h6}>
        Copyright {currentYear}
      </h6>
    </>
  );
}

export default Footer;
```

## Props

React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

- Props can only be passed down. (A parent component can NOT get props from the child)
