import React from 'react';

import './BtnCustom.scss';

import { connect } from 'react-redux';
import { onEdit } from '../../../../actions';

const BtnCustom = (props) => {
    const classes = ['btn-edit'];
    props.typeRemove ? classes.push('btn-remove') : null;

    return (
        <button
            id="BtnCustom"
            className={classes.join(' ')}
            onClick={() => props.onEditClick(props.data)}
        >
            {props.children}
        </button>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onEditClick: (user) => {
        dispatch(onEdit(user));
    },
});

export default connect(null, mapDispatchToProps)(BtnCustom);
