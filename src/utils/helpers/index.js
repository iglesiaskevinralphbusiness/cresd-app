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
