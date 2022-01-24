import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate'
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title : 'What is React',
        content : 'React is a JavaScript Framework'
    },
    {
        title : 'Why use React?',
        content : 'React is a famous library among the engineers' 
    },
    {
        title : 'How do you use React?',
        content : 'You use react by creating components'
    }
]

const options = [
    {
        label : 'The color red',
        value : 'red'
    },
    {
        label : 'The color green',
        value : 'green'
    },
    {
        label : 'The Shade of blue',
        value : 'blue'
    }
]

const App = () => {

    const [selected, setSelected] = useState(options[0])

    
    return (
        
        <div>
            <Header />
           <Route path = '/'>
               <Accordion items = {items} />
           </Route>
           <Route path = '/list'>
               <Search />
           </Route>
           <Route path = '/dropdown'>
               <Dropdown 
                  label = 'Select a Color'
                  options = {options} 
                  selected = {selected}
                  onSelectedChange = {setSelected}
               />
           </Route>
           <Route path = '/translate'>
               <Translate />
           </Route>
        </div>
    )
}

export default App