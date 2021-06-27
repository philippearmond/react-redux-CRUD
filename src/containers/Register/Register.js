import React, { useState } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Simple/Button';
import './Register.scss';

const Register = () => {
    const formData = {
        name: {
            label: 'Nome',
            inputType: 'text',
            value: '',
            valid: false,
        },
        cpf: {
            label: 'CPF',
            inputType: 'text',
            value: '',
            valid: false,
        },
        salary: {
            label: 'Salário Bruto',
            inputType: 'text',
            value: '',
            valid: false,
        },
        pensionDiscount: {
            label: 'Desconto da previdência',
            inputType: 'text',
            value: '',
            valid: false,
        },
        dependentsNumber: {
            label: 'Número de dependentes',
            inputType: 'number',
            value: '',
            valid: false,
        },
    };

    const [registerForm, setRegisterForm] = useState(formData);

    /**
     * Observa a alteração de input e seta no estado local
     * @param {String} value
     * @param {String} inputName
     */
    const onChangeInputHandler = (value, inputName) => {
        const formUpdated = {
            ...registerForm,
        };

        const formElementUpdated = {
            ...formUpdated[inputName],
        };

        formElementUpdated.value = value;
        formUpdated[inputName] = formElementUpdated;

        setRegisterForm(formUpdated);
    };

    const formElements = [];
    for (let input in registerForm) {
        formElements.push({
            input,
            configs: registerForm[input],
        });
    }

    const input = formElements.map((inputData) => (
        <Input
            key={inputData.input}
            label={inputData.configs.label}
            inputType={inputData.configs.inputType}
            value={inputData.configs.value}
            onChangeInputHandler={(event) =>
                onChangeInputHandler(event.target.value, inputData.input)
            }
        />
    ));

    return (
        <div id="RegisterContainer">
            <fieldset>
                {input}
                <div className="register-cta-wrapper">
                    <Button route="/" sendData={registerForm}>
                        Salvar
                    </Button>
                </div>
            </fieldset>
        </div>
    );
};

export default Register;
