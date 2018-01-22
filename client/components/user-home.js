import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import UserInfo from './user-info'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email, user} = props
  return (
    <div>
      <h3 style={{textAlign:'center', color:'#E9E9E9'}}>Welcome, {email.split('@')[0].replace(/\b\w/g, l => l.toUpperCase())}</h3>
      <UserInfo userId={user.id} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
