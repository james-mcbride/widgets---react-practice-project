import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items=[
    {
        title: 'What is React?',
        content: 'Reacgt is a front end js frameowkr'
    },
    {
        title: 'Why use react?',
        content: 'React is a js developers fave'
    },
    {
        title: 'How do you use react?',
        content: 'You use components'
    }
]

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: '',
        value: ''
    },
    {
        label: "Hindi",
        value: 'hi'
    }
]



export default () =>{

    const [selected, setSelected]=useState(0)

    return <div>
        <Header />
        <Route path="/">
            <Accordion items={items} />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown
                label="select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
    </div>
}
