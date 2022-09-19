import React from 'react'
import { connect } from 'react-redux';
import { CLOSE_STATUS } from '../redux/actions';
const mapStateToProps = state => {
    const { status, isStatusShowing, statusText } = state;
    return { status, isStatusShowing, statusText }
}

const StatusContainer = ({ status, isStatusShowing, statusText, dispatch }) => {
    React.useEffect(() => {
        if (isStatusShowing) {
            const timeout = setTimeout(() => {
                dispatch({
                    type: CLOSE_STATUS
                })
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [isStatusShowing]);
    return (
        isStatusShowing && <p className={`alert-${status} py-2 px-3 text-center mb-4`}>{statusText}</p>
    )
}

export default connect(mapStateToProps)(StatusContainer)