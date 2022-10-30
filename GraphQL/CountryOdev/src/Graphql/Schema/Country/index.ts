

export const typeCountry = `

    type Eng{
        official:String
        common:String
    }

    type NativeName{
        eng:Eng
    }

    type Name{
        common:String
        official:String
        nativeName:NativeName
    }

    type Country{
        name:Name
    } 
`


