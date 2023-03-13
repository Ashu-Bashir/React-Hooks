import React, {  useState } from "react";
// import ClassUseContextComponent from "./ClassUseContextComponent";
import FunctionUseContextComponent from "./FunctionUseContextComp";
import {ThemeProvider} from  "./ThemeUseContext" 

export default function UseContext() {
   
    return(
        <ThemeProvider>

            <FunctionUseContextComponent/>
        </ThemeProvider>
        
    )
    
}