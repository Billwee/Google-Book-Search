import React from "react";
import Wrapper from "../components/Wrapper";

class Books extends React.Component {



  render() {
    return (
      <Wrapper>
        <div className="alert alert-danger pb-1" role="alert">
          <h4 className="alert-heading text-center">404: File not found</h4>
          <p className="text-center">This page doesn't exist</p>
        </div>
      </Wrapper>
    )
  }
}

export default Books;