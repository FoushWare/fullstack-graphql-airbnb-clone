import * as React from "react";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@abb/controller";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
 

  render() {
    return(
      <RegisterController>
        {({submit}:{submit:any})=> <RegisterView submit={submit}/>}
      </RegisterController>
    )
  }
}