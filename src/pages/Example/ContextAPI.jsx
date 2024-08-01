import { createContext, useContext, useState } from "react";

// Create a context
const MyContext = createContext();

function MyProvider({ children }) {
  const [value, setValue] = useState("initial value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

function Page1() {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Page 1 Value: {value}</p>
      <button onClick={() => setValue("new value from Page 1")}>
        Change Value
      </button>
    </div>
  );
}

function Page2() {
  const { value } = useContext(MyContext);

  return (
    <div>
      <p>Page 2 Value: {value}</p>
    </div>
  );
}

function ContextAPI() {
  return (
    <MyProvider>
      <Page1 />
      <Page2 />
    </MyProvider>
  );
}

export default ContextAPI;
