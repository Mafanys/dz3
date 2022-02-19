import React from "react";
import { v4 } from 'uuid';

const array = ["Sasha", "Igor", "Masha", "Illya"];
export class ListComponent extends React.Component{
    render(){
        return(
            
            <ul>
                {array.map(element => {
                    console.log(v4());
                    return <li key={v4()}>{element}</li>;
                })}
            </ul>
        );
    }
}
