import { connect } from 'react-redux';

import Outcomes from '../components/Outcomes';

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps)(Outcomes);