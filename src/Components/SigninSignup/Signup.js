import React from "react";
import RegistrationType from "./RegistrationType";
import { BgSwitch } from "./SwitchContext";
import RegisterCitizen from "./RegisterCitizen";
import RegisterOrganization from "./RegisterOraganization";
import RegisterLawer from "./RegisterLawyer";

class Signup extends React.Component {
  static contextType= BgSwitch;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let type= this.context;
    
    let type1= type.selected.type1? '':type.isDisplay;
    let type2= type.selected.type2? '':type.isDisplay;
    let type3= type.selected.type3? '':type.isDisplay;
    let typeBg1= type.selected.type1? type.BgColor.backgroundColor:'';
    let typeBg2= type.selected.type2? type.BgColor.backgroundColor:'';
    let typeBg3= type.selected.type3? type.BgColor.backgroundColor:'';
   
  


    return (
      <>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent: "center"}}>
          <div onClick={type.actionType1}  >
          <RegistrationType registrationType="Citizen" style={typeBg1} />
          </div>
          <div onClick={type.actionType2} >
            <RegistrationType registrationType="Organization" style={typeBg2}/>
          </div>
          
          <div onClick={type.actionType3} >
          <RegistrationType registrationType="Lawyer"  style={typeBg3}/>
          </div>
        </div>
        <div style={{display:type1,}}>
          <RegisterCitizen/>
        </div>
        <div style={{display:type2}}>
          <RegisterOrganization/>
        </div>
        <div style={{display:type3}}>
          <RegisterLawer/>
        </div>
        
      </>
    );
  }
}

export default Signup;
