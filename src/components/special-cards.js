import React from "react";
import { ISpecial, IString } from '../models/models';

const SpecialCards = ({ special }) => {
    const geo = (special) => {
        return special.geo ? <a href={`https://maps.google.com/?q=${special.geo}`} target="_blank">{ special.title }</a> : <span>{ special.title }</span>
    }
   
    return (
        special ? <div className="special">
            <p>{ geo(special)}</p>
            <p>{ special.text }</p>
        </div>
        : ''
    ) 
}

SpecialCards.propTypes  = {
    special: ISpecial,
}

export default SpecialCards;