import moment from 'moment';
import { map } from 'lodash';

export const GenerateId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const GenerateIngredients = () => {
    return {
        uuid: GenerateId(20),
        amount: 0,
        measurement: '',
        name: ''
    }
}

export const GenerateDirections = () => {
    return {
        instructions: '',
        optional: false,
    }
}

export const TimeNow = () => {
    return moment().format('MM/DD/YYYY HH:mm:ss A');
}

export const GenerateRecipeForm = (forms) => {
    let recipe = {};
    map(forms, input => {
        recipe[input.name] = input.value;
    });
    return recipe;
}