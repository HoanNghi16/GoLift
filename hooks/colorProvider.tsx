import { DARK_COLORS, LIGHT_COLORS } from "@/assets/styles/color"
import { colorType } from "@/types/color"
import { createContext, ReactNode, useContext } from "react"
import { useColorScheme } from "react-native"

const ColorContext = createContext<{colors: colorType}>({colors:LIGHT_COLORS})

export function ColorProvider({children}:{children: ReactNode}){
    const theme = useColorScheme()
    const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS
    return (
        <ColorContext.Provider value={{colors}}>
            {children}
        </ColorContext.Provider>
    )
}

export function useColor(){
    const context = useContext(ColorContext)
    return context
}