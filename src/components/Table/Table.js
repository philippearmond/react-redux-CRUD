import React from 'react';

import BtnCustom from '../UI/Button/Custom/BtnCustom';
import './Table.scss';

const Table = (props) => {
    const tableHead = (
        <tr>
            <th className="table-head-large">Nome</th>
            <th className="table-head-medium">CPF</th>
            <th className="table-head-low">Salário</th>
            <th className="table-head-low">Desconto</th>
            <th className="table-head-low">Dependentes</th>
            <th className="table-head-low">Desconto IRRF</th>
            <th className="table-head-very-low">Editar</th>
            <th className="table-head-very-low">Excluir</th>
        </tr>
    );

    const tableContent = props.userUpdated.map((user) => {
        return (
            <tr key={user.cpf}>
                <td>{user.nome || user.name} </td>
                <td>{user.cpf} </td>
                <td>{user.salario || user.salary} </td>
                <td>{user.desconto || user.pensionDiscount} </td>
                <td>{user.dependentes || user.dependentsQuantity}</td>
                <td>{user.desconto || user.irrf} </td>
                <td>
                    <BtnCustom data={user} typeEdit>
                        Editar
                    </BtnCustom>
                </td>
                <td>
                    <BtnCustom data={user} typeRemove>
                        Excluir
                    </BtnCustom>
                </td>
            </tr>
        );
    });

    return (
        <table id="Table">
            <thead>{tableHead}</thead>
            <tbody>{tableContent}</tbody>
        </table>
    );
};

export default Table;
