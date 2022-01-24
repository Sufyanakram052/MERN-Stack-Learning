import React from 'react'

class SearchBar extends React.Component{

    state = {term : ''}


    OnInputChange = (event) => {
        this.setState({ term : event.target.value })
    }

    OnFormSubmit = (event) =>{ 
        event.preventDefault()

        this.props.OnFormSubmit(this.state.term)
    }

    render(){
        return(
            <div className = 'search-bar ui segment'>
                <form className = 'ui form' onSubmit ={this.OnFormSubmit} >
                    <div className = 'field'>
                        <label>Videos Search</label>
                        <input 
                           type = 'text' 
                           value = {this.state.term}
                           onChange = {this.OnInputChange} />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar