import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '../components/Form';
import { changeCityName } from '../actions/formActions';

const mapStateToProps = state => ({
    enteredCityName: state.form.enteredCityName
});

const mapDispatchToProps = dispatch => ({
    changeCityName: bindActionCreators(changeCityName, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

