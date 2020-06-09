import React from "react";

class Reservation extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.props.values.isGoing}
              onBlur={this.props.handleBlur}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.props.values.numberOfGuests}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
            />
          </label>
        </form>
        <hr />
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

export default Reservation;
