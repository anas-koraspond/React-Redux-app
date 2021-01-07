import React from "react";
import { connect } from "react-redux";
import RenderCards from "./renderCards.js";
import { addItem, deleteItem } from "../actions";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.accordionContent = [];
  }
  savechange(event) {
    const id = event.currentTarget.id;
    let bool = true;
    if (this.props.category in this.props.check) {
      if (this.props.category === "Dodatkowe wyposażenie") {
        const key = this.props.category;
        if (id in this.props.check[key]) {
          this.props.dispatch(deleteItem(this.props.category, id));
          bool = false;
        } else
          this.props.dispatch(
            addItem(this.props.data[id - 1], this.props.category)
          );
      } else {
        if (this.props.check[this.props.category].id.toString() === id) {
          this.props.dispatch(deleteItem(this.props.category));
          bool = false;
        } else
          this.props.dispatch(
            addItem(this.props.data[id - 1], this.props.category)
          );
      }
    } else
      this.props.dispatch(
        addItem(this.props.data[id - 1], this.props.category)
      );

    this.accordionContent.forEach((element) => {
      
      if(element != null)
      {
      if (this.props.category === "Dodatkowe wyposażenie") {
        if (element.id === id) element.style.backgroundColor = "red";
        if (bool === false && element.id === id)
          element.style.backgroundColor = "white";
      } else {
        if (element.id === id && bool) element.style.backgroundColor = "red";
        else element.style.backgroundColor = "white";
      }
    }});
    
  }
  componentDidUpdate() {
    this.accordionContent.forEach((element) => {
      if(element != null)
      {
      if (!(this.props.category in this.props.check))
    
        element.style.backgroundColor = "white";
      else {
        if (this.props.category === "Dodatkowe wyposażenie") {
          if (element.id in this.props.check[this.props.category])
            element.style.backgroundColor = "red";
          else element.style.backgroundColor = "white";
        } else {
          if (
            this.props.check[this.props.category].id.toString() === element.id
          )
            element.style.backgroundColor = "red";
          else element.style.backgroundColor = "white";
        }
      }
    }});

  }
  
  renderCards() {
    let table = [];
    this.props.data.forEach((element) => {
      table.push(
        <button
          className="option-buttons"
          style={{ backgroundColor: "white" }}
          onClick={this.savechange.bind(this)}
          key={element.id}
          id={element.id}
          ref={(ref) => (this.accordionContent[element.id] = ref)}
        >
          <RenderCards data={element} />
        </button>
      );
    });

    return table;
  }
  render() {
    return (
      <div className="conteiner">
        <div className=" d-flex justify-content-around flex-wrap flex-row">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default connect()(Container);
