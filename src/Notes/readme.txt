<---------- useState ------------->

const [count, setCount] = useState();

- count - a variable to hold the state value, in this case, it's called count 
- setCount - a function to change the value, in this case, it's called setCount.


<---------- useEffect ------------->

1) Aek bar component  render hojae us k bad kia karna he ye hum useEffect ko batate hen.

    useEffect(()=>{

    })

2) Jab bhi render method call hoga useEffect call hojae ga agar [] nhi dengy to.

    useEffect(()=>{

    })

3) Only First Time useEffect call hoga agar array bracket [] lgaengy end method
    
    useEffect(()=>{

    }, [])

<---------- Context API ------------->

Context, Provider, Consumer teno ko mila ke Context API Banta he

Context API k andar ye problem he k is k andar consumer wala part bhut labmba hota he

<---------- useContext ------------->

1) Context API k andar jo consumer wala system he usko hata k useContext aya he

2) Pure project me kisi bhi jaga props pass karne k k bjae hum useContext ki madad sa apne all over the project me value get karsakte hen.

<---------- useReducer ------------->

useState is nothing only way to manage state in react 
useReducer is also use to manage state in react
useReducer is also allow to manage state and re render a component when ever state change
useReducer is not very usefull for manage small state
It is very usefull for managing complex state
See complete example of useReducer in given location (./Components/Usereducer)

<---------- useMemo ------------->

useMemo is use for better perfomance
//// Difference between useEffect and useMemo
useEffect pure component ki re rendiring ko rokta he
useMemo specific part ki re rendiring ko rokta he

<---------- useCallback ------------->

useCallback and useMemo are very similar to each other
useCallback return a function

    const usememocheck = useCallback((parameter) => {
        return <h2>{seccount + parameter}</h2>
    },[seccount])

useMemo return value

    const usememocheck = useMemo(() => {
        return <h2>{seccount}</h2>
    },[seccount])

<---------- React.Memo ------------->

Memo is only use in above 16.6 version
