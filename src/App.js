import React, { Component } from 'react';
import './App.css';
import {AccordionData} from './AccordionData';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      listOfCountries: [],
      isDataLoading: false,
    }
    this.onClickRefresh = this.onClickRefresh.bind(this);
  }

  fetchListOfCountries(){
    // Sets Loading indicator to true
    this.setState({isDataLoading:true});
    // Fetch API Data and set to state
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(data => {
        this.setState(
          { 
            listOfCountries: data.Countries,
            isDataLoading:false
        });
      })
  }

  componentDidMount(){
    this.fetchListOfCountries();
  }

  onClickRefresh(){
    this.fetchListOfCountries();
  }
  
  render() {
    // Sort list based on TotalConfirmed count
    let sortedCountries= this.state.listOfCountries.sort(function (a, b) {
      return b.TotalConfirmed - a.TotalConfirmed;
    })
    // Slicing for top 10 countries
    sortedCountries=sortedCountries.slice(0, 10);
    const Loading = (
      <div className="fa fa-spinner fa-spin"></div>
      );
    
      const content = this.state.isDataLoading 
        ? Loading
        : 
          (sortedCountries.map((country) => (
          <AccordionData
            country={country}
          />
        )));

    return (
      <div className="App">
        <h1 className="title">
          List of Top 10 Covid 19 Countries
        </h1>
        <div className="accordion-icon">
          <div className="fa fa-refresh refresh" onClick={this.onClickRefresh}></div>
          <div className="layout"> 
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
