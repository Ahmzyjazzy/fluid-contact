import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import StarredContactList from '../components/contacts/StarredContactList'
import AllContactList from '../components/contacts/AllContactList'

class Dashboard extends Component {

  render() {

    return (
        <Fragment>
            <div class="star_outlinered-contacts contacts-container">
                <p class="group-title">Starrered contacts <span class="counts">(4)</span></p>
                <ul>
                    {
                        <StarredContactList />
                    }
                </ul>
            </div>
            <div class="other-contacts contacts-container">
                <p class="group-title">Contacts <span class="counts">(5)</span></p>
                <ul>
                    {
                        <AllContactList />
                    }
                </ul>
            </div>
        </Fragment>
    )
  }
}

export default Dashboard