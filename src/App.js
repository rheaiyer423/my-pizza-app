import React, { Component, useRef, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroBtn, SectionTwo} from './StyleComponents';
import Navbar from './components/Navbar';
import {GlobalStyle} from './globalStyles';
import Select from 'react-select';
import { Customh2, DropdownStyle, Dropdownh1, DropdownBtn } from './DropdownComponents';

const crustOptions = [
  { value: 'THIN', label: 'Thin'},
  { value: 'NORMAL', label: 'Normal'},
  { value: 'Cracker Crust', label: 'Cracker Crust'},
  { value: 'Thin Crust', label: 'Thin Crust'},
  { value: 'Thick Crust Pizza', label: 'Thick Crust Pizza'},
  { value: 'Stuffed Crust', label: 'Stuffed Crust'},
  
];
const flavorOptions = [
  { value: 'CHEESE', label: 'Cheese'},
  { value: 'BEEF-NORMAL', label: 'Beef'},
  { value: 'Marinara', label: 'Marinara'},
  { value: 'Garlic Parmesan', label: 'Garlic Parmesan'},
  { value: 'BBQ', label: 'BBQ'}

];
const sizeOptions = [
  { value: 'S', label: 'Small'},
  { value: 'M', label: 'Medium'},
  { value: 'L', label: 'Large'}
];
const tableOptions = [
  { value: 1, label: '1'},
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' }
];

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      token: "",
      Size: '',
      Crust: '',
      Flavor: '',
      Order_Id: 0,

    }
    this.myRef = React.createRef(); // for smooth scrolling in ui
    
  } // end constructor

  // get access token for api and call the get function
  componentDidMount(){
    this.getAccess()
    this.getData()
  }

  // change handlers 
  handleChange = Crust => {
    this.setState({Crust}, () => console.log("option selected:", this.state.Crust.value));
  };
  handleChangeSize = Size => {
    this.setState({Size}, () => console.log("option selected:", this.state.Size.value));
  };
  handleChangeFlavor = Flavor => {
    this.setState({Flavor}, () => console.log("option selected:", this.state.Flavor.value));
  };
  handleChangeTable = Table => {
    this.setState({Table}, () => console.log("option selected:", this.state.Table.value));
  };
  
  // smooth page scroll
  executeScroll = () => this.myRef.current.scrollIntoView({behavior: 'smooth'})

  //  POST request to auth endpoint with a JSON body using fetch 
  getAccess() {
    
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'password': 'test',
          'username': 'test'
        })
    };
    fetch('https://order-pizza-api.herokuapp.com/api/auth', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({token: data}));
  }

  getData() {
    fetch('https://order-pizza-api.herokuapp.com/api/orders')
        .then(response => response.json())
        .then(data => console.log(data));
  }

  /* Issues with sending POST request to API:
      - Authorization is defined and is reading the right access code
      - 
  
  
  
  */ 
  postData() {

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        var min = 1;
        var max = 100;
        var rand =  min + (Math.random() * (max-min));

        if(rand <=50) {
          resolve("Success");
        }
        else {
          reject("failure");
        }
        
      }, 300);

    });
    return myPromise;
  }

    // const { token } = this.state;
    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Request-Headers, Access-Control-Allow-Methods, Origin, X-Requested-With, Content-Type, Accept, **Authorization**',
    //     'Access-Control-Allow-Origin': 'http://localhost:3000/',
    //     'Access-Control-Allow-Credentials': 'true',
    //     //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //     //'Access-Control-Request-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //     'Authorization':  'Bearer ' + token.access_token,
    //     'Access-Control-Request-Method': 'GET, POST, PUT, DELETE, OPTIONS',
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
        
    //   },
    //   body: JSON.stringify({
    //     // Crust: this.state.Crust.value,
    //     // Flavor: this.state.Flavor.value,
    //     // Size: this.state.Size.value,
    //     // Table_No: this.state.Table_No,

    //     "Crust": "THIN",
    //     "Flavor": "BEEF-NORMAL",
    //     "Size": "S",
    //     "Table_No": 5,
    //   }),
    //   credentials: 'include',
    //   // referrerPolicy: 'unsafe-url'
    //   //mode: 'cors'
    // };
    
    // fetch('https://order-pizza-api.herokuapp.com/api/orders', requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log(data));
  

  render() {
    
    const { Crust, Size, Flavor, Table_No } = this.state;
    const { token } = this.state;
    console.log("token", token.access_token);
    return (
      <Router>
        <GlobalStyle />

        <HeroContainer>
          <Navbar />
          <HeroContent>
            <HeroItems>
              <HeroH1>Customize your own pizza!</HeroH1>
              <HeroBtn onClick={() => {this.getData(); this.executeScroll();}}>Order Now</HeroBtn>
            </HeroItems>
          </HeroContent>
        </HeroContainer>

        <SectionTwo ref={this.myRef}>
          <Dropdownh1>Make Your Own Pizza</Dropdownh1>
          
          <Customh2>Choose Pizza Size</Customh2>
          <DropdownStyle>
            <Select value={Size} 
                onChange={this.handleChangeSize}
                options={sizeOptions}/>
          </DropdownStyle>
            
          <Customh2>Choose Pizza Crust</Customh2>
          <DropdownStyle>
            <Select value={Crust}
                onChange={this.handleChange}
                options={crustOptions}/>
          </DropdownStyle>

          <Customh2>Choose Pizza Flavor</Customh2>
            <DropdownStyle>
              <Select value={Flavor}
              onChange={this.handleChangeFlavor}
              options={flavorOptions}/>
            </DropdownStyle>
          <Customh2>Choose Your Table Number</Customh2>
          <DropdownStyle>
              <Select value={Table_No}
              onChange={this.handleChangeTable}
              options={tableOptions}/>
            </DropdownStyle>
          
          <DropdownBtn onClick={() => {this.postData()}}>Submit</DropdownBtn>
        </SectionTwo>

      

      </Router>
      
    );
  }
}
export default App;