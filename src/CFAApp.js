import Header from './header/header';
import Content from './content/content';

export default class CFAApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div><Header /><Content /></div>
    }
}
