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
            console.log(action.payload);
            // const calculatedIR = getCalculatedIR(userDataUpdated);
            //abaixo só está funcionado estaticamente, preciso passar a route pra inputar os dados a atualizar
            return {
                ...state,
                [action.payload.cpf]: {
                    name: 'usuário alterado',
                    cpf: '123456',
                    salary: '2,5k',
                    pensionDiscount: '12',
                    dependentsQuantity: '1',
                    irrf: '123456',
                },
            };

        case 'REMOVE-USER':
            delete state[action.payload.cpf];
            return { ...state };

        default:
            return state;
    }
};

export default reducer;
