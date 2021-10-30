<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->


<----------------------- useState ------------->

const [count, setCount] = useState();

- count - a variable to hold the state value, in this case, it's called count 
- setCount - a function to change the value, in this case, it's called setCount.


<----------------------- useEffect ------------->

    // Important Description about useEffect
    
    https://reactjs.org/docs/hooks-reference.html#useeffect

The function passed to useEffect will run after the render is committed to the screen. 

1) Aek bar component  render hojae us k bad kia karna he ye hum useEffect ko batate hen.

    useEffect(()=>{

    })

2) Jab bhi render method call hoga useEffect call hojae ga agar [] nhi dengy to.

    useEffect(()=>{

    })

3) Only First Time useEffect call hoga agar array bracket [] lgaengy end me
    
    useEffect(()=>{

    }, [])

4) we can also call useEffect when certain value change

    useEffect(()=>{

    }, [call here])


<------------------------ Context API ---------------------->

1)  Context API is use for pass props globally

2)  The Context API can be used to share data with multiple components, without having to pass data through props manually.

3)  Context, Provider, Consumer teno ko mila ke Context API Banta he

4)  Context API k andar ye problem he k is k andar consumer wala part bhut labmba hota he

<------------------------ useContext ------------------------>

1) Context API k andar jo consumer wala system he usko hata k useContext aya he

2) Pure project me kisi bhi jaga props pass karne k k bjae hum useContext ki madad sa apne all over the project me value get karsakte hen.

<------------------------ useReducer ------------------------>

useState is nothing only way to manage state in react 
useReducer is also use to manage state in react
useReducer is also allow to manage state and re render a component when ever state change
useReducer is not very usefull for manage small state
It is very usefull for managing complex state
See complete example of useReducer in given location (./Components/Usereducer)

<-------------------------- useRef -------------------------->

useRef is just like document.getElementbyid()

const ref = useRef(initialValue);


<------------------------ useMemo -------------------------->

using useMemo we can control unwanted rerendring

useMemo is use for better perfomance

//// Difference between useEffect and useMemo

useEffect pure component ki re rendiring ko rokta he
useMemo component k specific part ki re rendiring ko rokta he

useEffect k andar hum html Likh kar usay print ni karwasakte.

<----------------------- useCallback ----------------------->

useCallback and useMemo are very similar to each other

useCallback return a function

    const usememocheck = useCallback((parameter) => {
        return <h2>{seccount + parameter}</h2>
    },[seccount])

useMemo return value

    const usememocheck = useMemo(() => {
        return <h2>{seccount}</h2>
    },[seccount])

<------------------------ React.Memo ------------------------>

Memo is only use in above 16.6 version

// syntex
wrap the component name Like this "export Default React.memo(Components name)"

1)  if we call more than one component in our parent component and passing props form parent to child component so 
    if we do any changes in any part like changing any value on button click or changing state so it call or rerender all over the component we call in parent component

2)  so this is very bad experiance for our application. React.memo is use for enhancing speed and stop Uneless rendring of component

3)  React.memo provide an access to render a component only when any thing change in our React.memo(component)



