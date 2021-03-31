import React, { useContext, useState } from "react"


const ThemeContext = React.createContext()

function Provider(props){
    const themeList = {
        light: {
            background: "#FFFFFF",
            foreground: "#000000"
        },
        dark:{
            background: "#000000",
            foreground: "#FFFFFF"
        }
    }

    const themeConfig={
        active: themeList.light,
        changeTheme: (t)=>{
            console.log('change')
            if(t.active.background==="#FFFFFF") {
                setTheme({...theme, active: themeList.dark})
            }else {
                setTheme({...theme, active:themeList.light})
            }
        }
    }

    const [theme,setTheme]=useState(themeConfig)

    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>

    )
}


function App(){
    return (
        <Provider>
            <Title />
            <Content />
        </Provider>
    )
}


function Title()
{
    const theme = useContext(ThemeContext)
    return (
        <h1 style={{background: theme.active.background, color: theme.active.foreground}}>Title</h1>
    )
}

function Button()
{
    const theme = useContext(ThemeContext)
    return (
        <>
            <button onClick={()=>{theme.changeTheme(theme)}}>Change theme</button>
        </>
    )
}


function Content()
{
    const theme = useContext(ThemeContext)
    return (
        <>
            <p style={{background: theme.active.background, color: theme.active.foreground}}>{theme.active.background==="#FFFFFF"?'Light':'Dark'}</p>
            <Button />
        </>
    )
}


export default App;