import {createBrowserRouter} from 'react-router-dom'
import { Aksiya } from '../components/Aksiya'
import { Kirish } from '../components/Kirish'
import App from '../App'
import { Savatcha } from '../components/Savatcha'
import { Tanlanganlar } from '../components/Tanlanganlar'
import { Taqqoslash } from '../components/Taqqoslash'
import { Layout } from '../layout/layout'
import { Manzil } from '../components/Manzillar'
import { Dynamic } from '../components/Dynamic'

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
    {
        path:'/',
        element:<App/>
    }  ,  
    {
        path:'/aksiya',
        element:<Aksiya/>
    },
    {
        path:'/registration',
        element:<Kirish/>,
    } ,  
    {
        path:'/manzillar',
        element:<Manzil/>
    } ,
    {
        path:'/savatcha',
        element:<Savatcha/>
    } ,   
    {
        path:'/tanlanganlar',
        element:<Tanlanganlar/>
    } ,
    {
        path:'/taqqoslash',
        element:<Taqqoslash/>
    } ,
    {
        path:'/product/:id',
        element:<Dynamic/>
    } ,
]
},
])