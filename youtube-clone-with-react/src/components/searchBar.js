import { Component } from "react";
import "./searchBar.css"

export default class SearchBar extends Component {
    constructor() {
        super()
    }




    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search for a video"
                />
            </div>
        )

    }

}