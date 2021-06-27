import { getCalculatedIR } from '../src/getCalculatedIR';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'INSERT-USER':
            const userDataUpdated = {};

            for (let key in action.payload) {
                userDataUpdated[key] = action.payload[key].value;
            }

            const { cpf } = userDataUpdated;

            if (!cpf) return state;

            const calculatedIR = getCalculatedIR(userDataUpdated);

            return {
                ...state,
                [cpf]: { ...userDataUpdated, irrf: calculatedIR.toFixed(2) },
            };

        case 'UPDATE-USER':
            console.log(state[action.payload.cpf]);
            if (21 == state.cpf) console.log('aewwwww');
            // if (action.payload.cpf == state.cpf) console.log('aewwwww');
            // return {
            //     ...state,
            //     [action.payload.cpf]: { ...action.payload },
            // };
            return state;

        default:
            return state;
    }
};

export default reducer;
