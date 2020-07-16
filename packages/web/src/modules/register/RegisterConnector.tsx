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
        {({submit})=> <RegisterView submit={submit}/>}
      </RegisterController>
    )
  }
}