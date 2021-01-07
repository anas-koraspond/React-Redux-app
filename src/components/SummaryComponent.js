import React from "react";
import { connect } from "react-redux";
import { Row, Table } from "reactstrap";
class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.summaryCost = 0;
  }
  createAdditional() {
    const obj = this.props.summary;
    let addition = "Dodatkowe wyposażenie";
    const tab = Object.values(obj[addition]).map((keyName, i) => {
      this.summaryCost += keyName.price;
      return (
        <tr key={i}>
          <td  className="text-left">
            <span>{i === 0 && addition}</span>
          </td>
          <td>
            <span>{keyName.name}</span>
          </td>
          <td>
            <img className="summary-img" src={keyName.url} alt={i}></img>
          </td>
          <td>
            <span>{keyName.price} zł</span>
          </td>
        </tr>
      );
    });
    return tab;
  }
  createTable() {
    const obj = this.props.summary;
    let temp = Object.keys(obj);
    temp.splice(temp.indexOf("Dodatkowe wyposażenie"), 1);
    const tab = temp.map((keyName, i) => {
      this.summaryCost += obj[keyName].price;
      return (
        <tr key={i}>
          <td className="text-left">
            <span>{keyName}</span>
          </td>
          <td>
            <span>{obj[keyName].name}</span>
          </td>
          <td>
            <img src={obj[keyName].url} className="summary-img" alt={i}></img>
          </td>
          <td>
            <span>{obj[keyName].price} zł</span>
          </td>
        </tr>
      );
    });
    return tab;
  }
  render() {
    return (
      <div className="conteiner">
        <Row>
          <div className="col-12">
            <h1 className="text-center">Podsumowanie</h1>
            <Table striped>
              <thead>
                <tr>
                  <th className="text-left">Kategoria</th>
                  <th>Nazwa</th>
                  <th>Obraz</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                {this.createTable()}
                {"Dodatkowe wyposażenie" in this.props.summary &&
                  this.createAdditional()}
                <tr className="bg-info">
                  <td className="text-left">
                    <span>Suma :</span>
                  </td>
                  <td colSpan="2"></td>
                  <td >
                    <span>{this.summaryCost} zł </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
      </div>
    );
  }
}

export default connect()(Summary);
