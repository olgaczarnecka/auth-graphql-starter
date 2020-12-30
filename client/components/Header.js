import React from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import { Link } from "react-router";
import mutation from "../mutations/Logout";

const Header = (props) => {
  function onLogoutClick() {
    props.mutate({ refetchQueries: [{ query }] });
  }
  function renderButtons() {
    const { loading, user } = props.data;
    if (loading) {
      return <div />;
    }
    if (user) {
      return (
        <div>
          <li>
            <a onClick={onLogoutClick}>Logout</a>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default graphql(mutation)(graphql(query)(Header));
