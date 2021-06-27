import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { onInsert } from '../../../../actions';

import './Button.scss';

const Button = (props) => {
    return (
        <NavLink
            id="ButtonComponent"
            to={`${props.route}`}
            onClick={() => props.onClick(props.sendData)}
        >
            {props.children}
        </NavLink>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onClick: (user) => {
        dispatch(onInsert(user));
    },
});

export default connect(null, mapDispatchToProps)(Button);
