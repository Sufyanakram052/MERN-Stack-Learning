import React from 'react'
import SearchBar from './SearchBar'
import Youtube from '../apis/Youtube'
import VideoList from './VideoList'

class App extends React.Component{

    state = { videos : [] , SelectedVideo : null }

    OnTermSubmit = async term => {
        const response = await Youtube.get('/search' , {
            params : {
                q : term
            }
        })

        this.setState({ videos : response.data.items })
    }

    onVideoSelect = (video) => {
       this.setState({SelectedVideo : video})
    };


    render(){
        return(
            <div className='ui container'>
                <SearchBar  
                   OnFormSubmit = {this.OnTermSubmit}
                   OnSelectedVideo = {this.OnVideoSelect}
                 />
                <VideoList videos = {this.state.videos} />
            </div>
        )
    }
}



export default App