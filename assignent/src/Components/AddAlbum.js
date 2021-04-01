import React, { Component } from 'react'
import '../App.css';
export class AddAlbum extends Component {
    constructor(props){
        super(props)
        // this.props.func();
        this.state = {
            // id : '',
            album_title : [],
            artist : '',
            album_cover : []
        }
    }
    titleChange = e => { 
        console.log("new value", e.target.value)
        this.setState({ album_title: e.target.value })
    }
    artistChange = e => { 
        console.log("new value", e.target.value)
        this.setState({ artist: e.target.value })
     }
    coverChange = e => {
        console.log("new value", e.target.value)
        this.setState({ album_cover: e.target.value })
    }
    handleSubmit = (e, props) => {
        let obj = {};
        // obj.id = this.state.id;
        obj.id = this.state.album_cover + 1;
        obj.album_title = this.props.receiveFunc;
        obj.artist = this.state.artist;
        obj.album_cover = this.state.album_cover;
        // alert(` ${obj.id} ${obj.album_title} ${obj.artist} ${obj.album_cover}`)
        console.log("submitted the data", obj)
        this.props.receiveFunc(obj)
        e.preventDefault()
    }
    render() {
        const { album_title, artist, album_cover} = this.state
        return (
            <div className="form">
                
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-1">
                        <label>Album Title: </label>
                        <input 
                         type="text"
                         id="album_title"
                         value={album_title}
                         onChange={this.titleChange}
                        />
                    </div>
                    
                    <div className="form-2">
                        <label>Artist: </label>
                        <input
                         type="text"
                         id="artist"
                         value={artist}
                         onChange={this.artistChange}
                        />
                    </div>
                    <div className="form-3">
                        <label>Album Cover: </label>
                        <input
                         type="file"
                         id="album_cover"
                         value={album_cover}
                         onChange={this.coverChange}
                        />
                    </div>
                    <button type ="submit"> Submit</button>
                </form>
            </div>
        )
    }
}

export default AddAlbum
