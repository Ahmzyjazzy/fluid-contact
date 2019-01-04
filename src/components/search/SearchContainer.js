import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import SearchResult from './SearchResult'

class SearchContainer extends Component {

  render() {

    return (
        <Fragment>
            <div className="search-container nav-child">
                <input type="search" placeholder="search" className="search" />
            </div>
            <SearchResult />
        </Fragment>
    )
  }
}

export default SearchContainer