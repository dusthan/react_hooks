import React,{ useContext, useState } from "react"


const ThemeContext = React.createContext()

const ThemeProvider = (props)=>{
    const themeList = {
        light: {
            name: 'light',
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            name: 'dark',
            foreground: "#ffffff",
            background: "#222222"
        }
    }
    const themeConfig = {
        active: themeList.light,
        changeTheme: (name)=>{
            console.log('change theme to:'+ name)
            setTheme({
                ...theme,active: name==='dark'?themeList.dark:themeList.light
            })
        }
    }
    const [theme,setTheme] = useState(themeConfig)
    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
    
}



function AppPro(){
    return (
        <ThemeProvider>
            <Toolbar />
            <Content />
        </ThemeProvider>
    )
}


function Toolbar(props){
    return (
        <>
        <ThemedButton />
        </>
    )
}

function Content() {
    const theme = useContext(ThemeContext);
    return (
        <>
            <p style={{background: theme.active.background, color: theme.active.foreground}}>Theme:{theme.active.name}</p>
            <button className="profile-button" onClick={()=>{
                theme.changeTheme('dark')
            }}>Dark</button>
            <button className="profile-button" onClick={()=>{
                theme.changeTheme('light')
            }}>Light</button>
        </>
    )
}


function ThemedButton(){
    const theme = useContext(ThemeContext)
    return (
        <button style={{background: theme.active.background, color: theme.active.foreground}}>I am styled by theme context!</button>
    )
}

export  {AppPro};