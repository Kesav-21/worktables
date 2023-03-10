import React, { Component } from "react";
import details from "../data/details";
class Filter extends Component{
    constructor(props){
        super(props);
        this.state={
            details:details,
        }
    }
    
    render(){
        return(
            <div className="filters-input">
                <h4>Teams</h4>
                <div>
                <input type="checkbox" name="table1" onChange={this.props.handleFilter}/>Team1
                <input type="checkbox" name="table2" onChange={this.props.handleFilter}/>Team2
                <input type="checkbox" name="table3" onChange={this.props.handleFilter}/>Team3
                <input type="checkbox" name="table4" onChange={this.props.handleFilter}/>Team4
                <input type="checkbox" name="table5" onChange={this.props.handleFilter}/>Team5
                <input type="checkbox" name="table6" onChange={this.props.handleFilter}/>Team6
                </div>
            </div>
        )
    }
}

export default Filter;