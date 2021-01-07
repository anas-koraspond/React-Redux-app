import "./App.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { nextData } from "./actions";
import Container from "./components/Container";
import { Button } from "reactstrap";
import Summary from "./components/SummaryComponent";
import Carousle from "./components/CarousleComponent"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      isStart: false,
      isSummary: false,
      isMin: true,
    };
    this.startConfig = this.startConfig.bind(this);
  }
  startConfig() {
    this.props.dispatch(nextData(this.state.id));
    this.setState(() => {
      return { isStart: true};
    });
  }
  nextSite() {
    this.setState(
      (prevState) => {
        if (prevState.id > 5) return { id: 7, isSummary: true };
        return { id: prevState.id + 1, isSummary: false, isMin: false };
      },
      () => {
        this.props.dispatch(nextData(this.state.id));
      }
    );
  }

  prevSite() {
    this.setState(
      (prevState) => {
        if (this.state.id < 2 ) return { id: 0, isMin: true };
        return { id: prevState.id - 1, isMin: false, isSummary: false };
      },
      () => {
        this.props.dispatch(nextData(this.state.id));
      }
    );
    
  }

  render() {
    return (
      <div className="App">
        {!this.state.isStart ? (
          <div className="start-div">
            <h1 className="display-6">Witaj w samochodowym konfiguratorze</h1>
            <Button className="start-button" onClick={this.startConfig}>
              Rozpocznij
            </Button>
            <Carousle/>
          </div>
        ) : (
          <div className="Config">
            {!this.state.isSummary ? (
              <div className="bg-light text-dark">
                <h1 className="text-center">{this.props.category}</h1>

                <Container
                  data={this.props.data}
                  category={this.props.category}
                  check = {this.props.check}
                />
              </div>
            ) : (
              <Summary summary={this.props.check} />
            )}
            <div>
              <div className="d-flex flex-row justify-content-center">
                <Button
                  className="main-buttons"
                  onClick={this.prevSite.bind(this)}
                  disabled={this.state.isMin}
                >
                  Poprzedni
                </Button>
                <Button
                  className="main-buttons"
                  onClick={this.nextSite.bind(this)}
                  disabled={this.state.isSummary}
                >
                  Następny
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    category: state.category,
    check: state.check

  };
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(App);
