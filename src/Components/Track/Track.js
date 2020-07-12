import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        return this.props.onAdd = this.props.track;
    }

    removeTrack() {
        return this.props.onRemove = this.props.track;
    }

    renderAction() {
        return this.props.isRemoval ? <button className="Track-action" onClick={this.addTrack}>+</button> : <button onClick={this.removeTrack} className="Track-action">-</button>;
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} {this.props.album}</p>
                </div>
            {this.renderAction}
            </div>
        )
    }
};

export default Track;