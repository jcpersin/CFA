import BrowseAnimals from './animals/browse';
import Volunteering from './volunteering/general'
import { connect } from 'react-redux';


class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    renderTabs() {
        let elements = [BrowseAnimals, Volunteering];
        let keys = ["BrowseAnimals", "Volunteering"];
        let Temp;
        let elemArr = [];
        for (let i = 0; i < elements.length; i++) {
            Temp = elements[i];
            elemArr.push( <Temp key={keys[i]} id={keys[i]}/> );
        }
        return elemArr;
    }
    render() {
        return (
            <div>
                {this.renderTabs()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            tabName: state.tabName
        }
    }
)(Content);
