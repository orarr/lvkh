import { connect } from 'react-redux';
import { signIn, modelPath } from 'routes/Auth/modules/SignInModule';
import SignIn from 'routes/Auth/components/SignIn';
import { actions } from 'react-redux-form';

/**
 * Maps the state properties to the React component `props`.
 *
 * @param {Object} state The application state.
 * @returns {Object} The props passed to the react component.
 */
const mapStateToProps = state => ({
  ...state.auth.signIn.form,
  ...state.auth.signIn.request,
});

/**
 * Maps the store `dispatch` function to the React component `props`.
 *
 * @param {Function} dispatch The Redux store dispatch function.
 * @returns {Object} The props passed to the react component.
 */
const mapDispatchToProps = dispatch => ({
  onSignIn: data => dispatch(signIn(data)),
  reset: () => dispatch(actions.reset(modelPath)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
