import React from 'react'
import { connect } from 'react-redux';
import EditForm from '../../components/EditForm';
import PostsListActions from '../../actions/actions';

class EditFormContainer extends React.Component {

    componentDidMount() {
        const { post, postId, fetchItem } = this.props;
        if (!post) {
            fetchItem(postId);
        }
    }

    render() {
        const { post, editItem } = this.props

        return !post ? ('Loading...') : (<EditForm item={post} editItem={editItem} />)
    }
}

const mapStateToProps = ({ posts }, { match }) => ({
    post: posts.items && posts.items.filter(post => post._id === match.params.id)[0],
    postId: match.params.id,
});

export default connect(
    mapStateToProps,
    PostsListActions,
)(EditFormContainer);