import React from 'react'
import { connect } from 'react-redux';
import AddForm from '../../components/AddForm';
import PostsListActions from '../../actions/actions';

const AddFormContainer = (props) =>  {
    const { addItem } = props
    return <AddForm addItem={addItem} />;
}

export default connect(
    null,
    PostsListActions,
)(AddFormContainer);