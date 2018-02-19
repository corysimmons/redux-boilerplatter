import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from './actions/userActions'
import * as foodActions from './actions/foodActions'
import * as usersActions from './actions/usersActions'

class App extends Component {
  render () {
    return (
      <div>
        <button onClick={() => this.props.updateUser()}>Update User</button>
        <button onClick={() => this.props.deleteUser()}>Delete User</button>
        <button onClick={() => this.props.fetchUsers()}>Fetch Users</button>
        <button onClick={() => this.props.updateFood(`Apple`, `Cucumber`)}>Update Food</button>

        <hr />

        {this.props.errorsProp.length > 0 && (
          <ul>
            {this.props.errorsProp.map((error, i) => {
              return (
                <li key={i}>{error.code}: {error.message}</li>
              )
            })}
          </ul>
        )}

        <hr />

        <b>First Name:</b> <span>{this.props.userProp.firstName}</span><br />
        <b>Last Name:</b> <span>{this.props.userProp.lastName}</span><br />
        <b>Email:</b> <span>{this.props.userProp.email}</span>

        <hr />

        <b>Fruit:</b> <span>{this.props.foodProp.fruit}</span><br />
        <b>Veggie:</b> <span>{this.props.foodProp.veggie}</span>

        <hr />

        <ul>
          {this.props.usersProp && this.props.usersProp.map((user, i) => <li key={i}>{user.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorsProp: state.errors,
    userProp: state.user,
    foodProp: state.food,
    usersProp: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...userActions,
    ...foodActions,
    ...usersActions,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
