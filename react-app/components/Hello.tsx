import * as React from "react";
// import {
//   TextInput,
//   Checkbox,
//   Button,
//   Link,
//   Form
// } from "ng-carbon-components-react";
import * as NGComponents from "ng-carbon-components-react";
import Banner from "./Banner";
import TrafficLightProgressBar from "./TrafficLightProgressBar";
import NewPreApplicationForm from "./NewPreApplicationForm";

export const Hello = () => {
  return (
    <div
      className="bx--grid bx--grid--no-gutter"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Banner
        navigationItems={[
          { text: "Home", link: "/home" },
          { text: "Applications", link: "/applications" },
          { text: "New pre-application", link: "/pre-application/create" }
        ]}
        heading="APP-123456"
        description="Please complete the below table, providing as much detail as possible. If you are unsure about any of the requirements, please contact us through our central connections email account."
      />
      <div className="bx--grid">
        <div className="bx--row form-content">
          <div className="bx--col-lg-3">
            <TrafficLightProgressBar />
          </div>
          <div className="bx--col-lg-6">
            <NewPreApplicationForm />
          </div>
        </div>
      </div>
    </div>

    // <div className="bx--grid" style={{ backgroundColor: "#ffffff" }}>
    //   <div className="bx--row">
    //     <div
    //       id="background_img_container"
    //       className="bx--col align-fit-to-height"
    //     >
    //       <img
    //         id="background_img"
    //         className="auth-form-bg align-fit-to-height"
    //         src="https://w0.peakpx.com/wallpaper/203/1010/HD-wallpaper-forest-flora-forest-vithurshan-dark-europe-faded-green-leaf-mood-moody-sri-lanka-vithurshan-jpeg-wood.jpg"
    //         alt="Background"
    //       />
    //     </div>
    //     <div
    //       id="auth-form"
    //       className="bx--col display-flex align-center-horizontal align-center-vertical"
    //     >
    //       <div className="bx--col-lg-6">
    //         <Form>
    //           <div className="bx--row auth-form-heading align-center-vertical mb-48 text-center">
    //             Connections Platform
    //           </div>
    //           <div className="bx--row align-center-vertical mb-n28">
    //             <TextInput
    //               type="text"
    //               id="Email"
    //               labelText="Email"
    //               placeholder="Placeholder text"
    //               required
    //             />
    //           </div>
    //           <div className="bx--row align-center-vertical mb-n20">
    //             <TextInput
    //               type="password"
    //               id="Password"
    //               labelText="Password"
    //               placeholder="Placeholder text"
    //               required
    //             />
    //           </div>
    //           <div className="bx--row align-flex-end mb-24">
    //             <Link href="forgot-password">Forgot password?</Link>
    //           </div>
    //           <div className="bx--row align-flex-start mb-24">
    //             <Checkbox labelText="Remember me" id="remember_me" />
    //           </div>
    //           <div className="bx--row align-center-vertical mb-16">
    //             <Button
    //               className="w-100 field-button"
    //               size="field"
    //               type="submit"
    //               disabled={false}
    //             >
    //               Sign in
    //             </Button>
    //           </div>
    //           <div className="bx--row align-center-vertical mb-24">
    //             <Button
    //               className="w-100 field-button"
    //               size="field"
    //               kind="secondary"
    //               type="button"
    //             >
    //               Register new account
    //             </Button>
    //           </div>
    //           <div className="bx--row align-center-vertical">
    //             <Link href="forgot-password">Need help?</Link>
    //           </div>
    //         </Form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
