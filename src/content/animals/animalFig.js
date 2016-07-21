import { connect } from 'react-redux';
import styles from './browse.css';
import { addDog } from '../../actions';

class AnimalFig extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <figure className={styles.animal_ctr} onClick={() => this.props.onAnimalClick(this.props.name)}>
                <img className={styles.animal_img} src={this.props.src} />
                <figcaption>{this.props.name}</figcaption>
            </figure>
        );
    }
}

export default connect(null,
    (dispatch) => {
        return {
            onAnimalClick: (name) => {
                dispatch(addDog(name))
            }
        }
    }
)(AnimalFig);
