import React from 'react';

import './BtnCustom.scss';

import { connect } from 'react-redux';
import { onEdit } from '../../../../actions';
import { onRemove } from '../../../../actions';

const BtnCustom = (props) => {
    const classes = ['btn-edit'];
    let clickEvent = props.onEditClick;

    if (props.typeRemove) {
        classes.push('btn-remove');
        clickEvent = props.onRemoveClick;
    }

    return (
        <button
            id="BtnCustom"
            className={classes.join(' ')}
            onClick={() => clickEvent(props.data)}
        >
            {props.children}
        </button>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onEditClick: (user) => {
        dispatch(onEdit(user));
    },
    onRemoveClick: (user) => {
        dispatch(onRemove(user));
    },
});

export default connect(null, mapDispatchToProps)(BtnCustom);
