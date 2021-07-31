import React, {Component} from 'react';
import Select from 'react-select';
import { Customh2, DropdownStyle, dropdownStyle, Dropdownh1, DropdownBtn } from './DropdownComponents';

const crustOptions = [
    { value: 'THIN', label: 'Thin'},
    { value: 'NORMAL', label: 'Normal'}
    
  ];
  const flavorOptions = [
    { value: 'CHEESE', label: 'Cheese'},
    { value: 'BEEF-NORMAL', label: 'Beef'},
    { value: 'CHICKEN-FAJITA', label: 'Chicken Fajita'}
  ];
  const sizeOptions = [
    { value: 'S', label: 'Small'},
    { value: 'M', label: 'Medium'},
    { value: 'L', label: 'Large'}
  ];
  const tableOptions = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
  ]


class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          token: "",
          Size: '',
          Crust: '',
          Flavor: '',
          Order_Id: 0,
    
        }
        //this.myRef = React.createRef();
        
    }

    getAccess() {
        // Simple POST request with a JSON body using fetch
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
    
      handleChange = Crust => {
        this.setState({Crust}, () => console.log("option selected:", this.state.Crust.value));
      };
      handleChangeSize = Size => {
        this.setState({Size}, () => console.log("option selected:", this.state.Size.value));
      };
      handleChangeFlavor = Flavor => {
        this.setState({Flavor}, () => console.log("option selected:", this.state.Flavor.value));
      };
    

    // submitHandler = e => {
    //     e.preventDefault()
    //     console.log(this.state)
    // }

    render () {
        const { Crust, Flavor, Size, Table_No} = this.state;
        const { token } = this.state;
        console.log("token", token.access_token);
        return (
            <>

            {/* <Dropdownh1>Make Your Own Pizza</Dropdownh1>
          <Customh2>Choose Pizza Size</Customh2>
          <DropdownStyle>
            <Select 
                
                value={Size}
                options={sizeOptions}
                />
          </DropdownStyle>
            
          <Customh2>Choose Pizza Crust</Customh2>
          <DropdownStyle>
            <Select 
                
                value = {Crust}
                options={crustOptions}
                onChange={this.handleChange}
                
                />
          </DropdownStyle>

          <Customh2>Choose Pizza Flavor</Customh2>
            <DropdownStyle>
              <Select 
                
                value = {Flavor}
                options={flavorOptions}
                />
            </DropdownStyle>
          <Customh2>Choose Your Table Number</Customh2> */}
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
              onChange={this.handleChangeFlavor}
              options={tableOptions}/>
            </DropdownStyle>
          <DropdownBtn type="submit">Submit</DropdownBtn>
            </>

            
        )
    }
}

export default Dropdown