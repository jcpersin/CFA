import styles from './title.css';
import { tabSelect } from '../actions';
import { connect } from 'react-redux';

class TabPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            //<span className={styles.tab} onClick={() => this.props.onTabClick(this.props.tabConnect)}>{this.props.title}</span>
            <a className={styles.tab} href={'#' + this.props.tabConnect}>{this.props.title}</a>
        );
    }
}

export default connect(null,
    (dispatch) => {
        return {
            onTabClick: (id) => {
                dispatch(tabSelect(id))
            }
        }
    }
)(TabPanel);
