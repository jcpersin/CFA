import styles from './title.css';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <img className={styles.title_img} src="http://www.quickanddirtytips.com/sites/default/files/images/4448/Dog_Chew.jpg" /> //http://constantine.typepad.com/.a/6a0120a7fc3be9970b01b7c7d26604970b-pi
    }
}
