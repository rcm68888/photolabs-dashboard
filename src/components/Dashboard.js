import React, { Component } from "react";
import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: "Lukas Souza"
  }
];

class Dashboard extends Component {
  state = {
    loading: false
  };
  render() {
    const dashboardClasses = classnames("dashboard");
    const panels = data.map(panel => (
      <Panel
        key={panel.id}
        id={panel.id}
        label={panel.label}
        value={panel.value}
      />
    ));
    if (this.state.loading) {
      return <Loading />;
    }
    return <main className={dashboardClasses}> {panels} </main>;
  }
}

export default Dashboard;
