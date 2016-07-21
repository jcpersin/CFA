import styles from './title.css';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <img className={styles.title_img} src="http://assets.worldwildlife.org/photos/2325/images/hero_full/mountains-hero.jpg?1345838509" /> //http://constantine.typepad.com/.a/6a0120a7fc3be9970b01b7c7d26604970b-pi
    }
}
