import 'goober'

declare module 'goober' {
    export interface DefaultTheme {
        theme: {
            color: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
             };
        };
    }
}