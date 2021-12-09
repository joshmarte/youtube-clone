import { Component } from "react";
import "./searchBar.css"

export default class SearchBar extends Component {
    //handled in app - 

   //wrap in form 
    render() {
        return (
            <div>
                <input
                    id="search-bar"
                    type="text"
                    placeholder="Search for a video"
                />
                <button type="submit">Search</button>
            </div>
        )

    }

}