import {load, logout} from '../../redux/actions/auth';

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => load(dispatch),
        logout: () => logout(dispatch)
    }
}

export default mapDispatchToProps;