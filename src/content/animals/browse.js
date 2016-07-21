import styles from './browse.css';
import { addDog } from '../../actions';
import { connect } from 'react-redux';
import AnimalFig from './animalFig';

class BrowseAnimals extends React.Component {
    constructor(props) {
        super(props);
    }
    renderImages() {
        let srcList = [
            "https://s-media-cache-ak0.pinimg.com/236x/e4/f7/15/e4f715007fe8ef279bf62a9898e6e70d.jpg",
            "http://www.petmd.com/sites/default/cache/imagecache/node-gallery-display/shutterstock_19820554-slide1.jpg",
            "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-12.jpg",
            "http://f.tqn.com/y/puppies/1/W/8/8/-/-/ResizePupDevelop.jpg",
            "http://www.tehcute.com/pics/201109/is-this-a-kitten-or-a-puppy--big.jpg",
            "http://www.tehcute.com/pics/201109/corgi-puppy-on-a-couch.jpg",
            "https://metrouk2.files.wordpress.com/2016/03/187137083.jpg?w=620&h=447&crop=1",
            "http://cbsnews2.cbsistatic.com/hub/i/r/2016/03/01/322ed196-67c2-4cce-9d6a-9209c87530a4/thumbnail/620x350/f7650f1500d1258f3851020d6a86837b/puppy.jpg",
            "http://srslycute.com/wp-content/uploads/2012/02/Pug-puppy-dog.png"
        ];
        let nameList = ["Captain Puppypants", "Irving", "Mona", "Grover", "Sampson", "Murphy", "Bennie", "Jet", "Snurf"];
        let animalFigs = [];
        for (let i = 0; i < srcList.length; i++) {
            animalFigs.push(
                <AnimalFig key={nameList[i]} src={srcList[i]} name={nameList[i]} />
            );
        }
        return <div className={styles.animal_list_ctr}>{animalFigs}</div>;
    }
    render() {
        //const { dogList } = this.props;
        return (
            <div id={this.props.id}>{this.renderImages()}</div>
        )
    }
}

export default connect(
    (state) => {
        return {
            dogList: state.doglist
        }
    }
)(BrowseAnimals);
