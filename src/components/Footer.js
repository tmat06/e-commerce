import React from "react";

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "lightgrey"
          }}
        >
          <h2>WE'RE HERE TO HELP</h2>
          <p>Mon - Thurs 8am - 6pm CST | Friday 8am - 5pm CST</p>
          <p>info@thetiebar.com | 877-888-TIES (8437)</p>
          <div>
            <button>Email US</button>
            <button>Call Us</button>
            <button>Chat US</button>
            <button>FAQ</button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "black",
            color: "white"
          }}
        >
          <div />
          <div style={{ display: "flex", flexDirection: "column" }}>ORDERS</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            ABOUT US
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            STYLE TIPS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            WE'RE FAMOUS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            QUICKLINKS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            WEDDING
          </div>
          <div />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ flexGrow: "4" }} />
            <div style={{ flexGrow: "3", backgroundColor: "black" }} />
            <div style={{ flexGrow: "2" }} />
            <input style={{ flexGrow: "3", backgroundColor: "lightgrey" }} />
            <div style={{ flexGrow: "2" }} />
          </div>
        </div>
      </div>
    );
  }
}
