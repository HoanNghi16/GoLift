export interface colorType {
    background: string   
    surface: string      
    primary: string      
    primaryText: string 
    textPrimary: string
    textSecondary: string
}

export type themeType = Record<string, {DARK_COLORS: colorType, LIGHT_COLORS: colorType}>