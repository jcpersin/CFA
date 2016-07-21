import Title from './title';
import NavBar from './navBar';
import Donate from './donate';
import Logo from './logo';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div><Logo /><NavBar /><Donate /><Title /></div>)
    }
}
