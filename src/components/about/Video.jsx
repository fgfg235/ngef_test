import React from 'react';
import Datas from '../../data/about/video.json';
import ModalVideo from 'react-modal-video';

class Video extends React.Component {
    constructor() {
        super()
        this.state = {
            Data: Datas,
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <div className="video-player" style={{ backgroundImage: `url(./assets/images/${this.state.Data.videoBackground})` }}>
                <p>Watch Online</p>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.Data.videoLink} onClose={() => this.setState({ isOpen: false })} />
                <button className="play-btn" onClick={this.openModal}><i className="las la-play"></i></button>
            </div>
        )
    }
}

export default Video