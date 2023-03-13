// FunctionUseContextComponent is a functional component that renders a button and a div. The background color, text color, padding, and margin of the div are determined by the theme. The theme is accessed through useTheme and useThemeUpdate hooks, which are defined in ThemeUseContext. The toggleTheme function is called when the button is clicked to switch the theme between light and dark.



import { useTheme , useThemeUpdate } from "./ThemeUseContext"

export default function FunctionUseContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC" , 
        color :  darkTheme ?  "#CCC" : "#333" ,
        padding : "2rem" , 
        margin : "2rem"
    }
    return(
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyles}>Function Theme</div>
        </>
    )
}