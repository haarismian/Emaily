import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google"> Login With Google</a>
          </li>
        );
      default:
        <li>
          <a>Logout</a>
        </li>;
        break;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="let brand-logo">Emaily</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStatetoProps({ auth }) {
  return { auth };
}

export default connect()(Header);
