import React from 'react';
import { connect } from 'react-redux';

import mock from '../../pessoas.json';
import Button from '../../components/UI/Button/Simple/Button';
import Table from '../../components/Table/Table';

import './UserList.scss';

const UserList = (props) => {
    let data = mock;

    if (Object.keys(props.userData).length)
        data = Object.values(props.userData);

    return (
        <div id="TableContainer">
            <header>
                <h1>
                    Cadastre-se para saber o
                    <br />
                    valor de desconto do
                    <br />
                    seu Imposto de Renda
                </h1>
                <h4>
                    OBS: Remova ou edite apenas usuários cadastrados por você!!
                </h4>
            </header>
            <Table userUpdated={data} />
            <div className="register-cta-wrapper">
                <Button route="/cadastrar">Cadastrar</Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userData: state,
    };
};

export default connect(mapStateToProps)(UserList);
