/*
import React,{useEffect, useState} from "react"

const themes = {
    dark:{
        backgroundColor:"black",
        color:"white"
    },
    light:{
        backgroundColor:"white",
        color:"black"
    }
}

const initialState = {
    dark:false,
    theme: themes.light,
    toggle:() =>{

    }
}
const ThemeContext = React.createContext(initialState);


function ThemeProvider({children}){

    //Default theme
    const [dark ,setDark] = useState(false)


    // useEffect(() =>{
    //  const isDark = localStorage.getItem("dark" ==='true')
    //  setDark(!dark)
    // },[dark])
    const toggle = () =>{
        localStorage.setItem('dark',JSON.stringify(!dark))
        setDark(!dark)
    }

    const theme = dark ? themes.dark : themes.light
    return (
        <ThemeContext.Provider value={{dark,theme,toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}


export {ThemeContext,ThemeProvider}



// ---------
import React from "react";
import "./App.css";
import { ThemeContext } from "./theme-context";

function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  //useContext is alternative to consumer
  return (
    <div className="app">
      <h1>Theme Toggler</h1>
      <div onClick={toggle}  className="app-header">
        <h1>Context Api Theme Toggler</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          temporibus animi omnis expedita, atque hic distinctio, repudiandae
          quod alias perferendis commodi nisi quo molestiae velit quas vel quia
          ducimus! Cupiditate, consectetur doloribus esse laboriosam distinctio
          ipsa incidunt nemo laborum, rerum pariatur, veniam aliquam veritatis
          impedit harum. Iste nesciunt incidunt molestias delectus accusantium
          ut dolores.
        </p>
        <div className="button_container">{`Toggle to ${
          !dark ? "Dark" : "Light"
        } theme`}</div>
      </div>
    </div>
  );
}

export default App;

//create a todo list using context api



*/
