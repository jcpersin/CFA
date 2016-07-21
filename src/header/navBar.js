import TabPanel from './tabPanel';
import styles from './title.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    renderTabs() {
        let tabTitles = ["Content", "Volunteering", "Etc", "Contact"];
        let tabConnections = ["BrowseAnimals", "Volunteering", "Nothing", "Nothing"]
        let tabs = [];
        for (let i = 0; i < tabTitles.length; i++) {
            tabs.push(<TabPanel key={tabTitles[i]} title={tabTitles[i]} tabConnect={tabConnections[i]} />);
        }
        return tabs;
    }
    render() {
        return (
            <div className={styles.tabs}>
                {this.renderTabs()}
            </div>
        );
    }
}
