import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Signup"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
