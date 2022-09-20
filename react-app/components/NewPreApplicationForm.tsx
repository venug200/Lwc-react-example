import * as React from "react";
import {
  TextInput,
  Accordion,
  AccordionItem,
  Button,
  RadioButtonGroup,
  RadioButton,
  MultiSelect,
  Grid,
  Row,
  DatePicker,
  DatePickerInput,
  TextArea,
  Search,
  Link,
  Checkbox
} from "ng-carbon-components-react";

const plantTypes: { label: string }[] = [
  { label: "Biomass" },
  { label: "Energy storage" }
];

function NewPreApplicationForm() {
  return (
    <Grid>
      <Accordion>
        <AccordionItem
          title="Project details"
          className="form-section first-accordian-item"
        >
          <div className="mt-2r">
            <TextInput
              type="text"
              id="ProjectName"
              labelText="* Project Name"
              placeholder="Placeholder text"
            />
            <RadioButtonGroup
              legendText="* Distribution / Transmission connected"
              name="distribution-transmission-connected"
              orientation="vertical"
            >
              <RadioButton
                labelText="Distribution"
                value="Distribution"
                id="distribution"
              />
              <RadioButton
                labelText="Transmission"
                value="Transmission"
                id="transmission"
              />
            </RadioButtonGroup>
            <RadioButtonGroup
              legendText="* Connection type"
              name="connection-type"
              orientation="vertical"
            >
              <RadioButton
                labelText="Generation"
                value="Generation"
                id="generation"
              />
              <RadioButton labelText="Demand" value="Demand" id="demand" />
              <RadioButton
                labelText="Generation and Demand"
                value="Generation and Demand"
                id="generationAndDemand"
              />
            </RadioButtonGroup>
            <div className="bx--form-item display-block">
              <MultiSelect
                type="default"
                id="plantType"
                titleText="* Plant type"
                label="Select all that apply"
                multiSelectLabel="plant types selected"
                items={plantTypes}
              />
            </div>
            <div className="bx--col-lg-5 bx--no-gutter">
              <TextInput
                type="text"
                id="ProjectCapacity"
                labelText="* Project capacity (MW)"
                placeholder="0.000"
              />
            </div>
            {/* <DatePicker
              datePickerType="single"
              className="bx--col-lg-5 bx--no-gutter mb-2"
            >
              <DatePickerInput
                placeholder="dd/mm/yyyy"
                labelText="* Aspired connection date"
                id="aspiredConnectionDate"
              />
            </DatePicker> */}
            <TextArea
              id="headOfTermsAgreed"
              labelText="Land identified / Head of Terms Agreed"
              placeholder="Placeholder text"
              className="mb-2"
            />
            <TextArea
              id="planningConsentStatus"
              labelText="Planning consent status*"
              placeholder="Placeholder text"
            />
          </div>
        </AccordionItem>
        <AccordionItem
          title="Developer company details"
          className="form-section"
        >
          <div className="mt-2r">
            <p className="mb-2r">
              Please complete the below table, providing as much detail as
              possible. If you are unsure about any of the requirements, please
              contact us through our central connections email account.
            </p>
            <div className="bx--form-item">
              <Search
                placeholder="Search for company name or number"
                labelText="Developer company *"
                size="lg"
                className="mb-2"
              />
            </div>
            <div className="bx--form-item">
              <Search
                placeholder="Search for company name or number"
                labelText="Developer parent company *"
                size="lg"
                className="mb-2"
              />
            </div>
            <div className="bb-1">
              <TextInput
                type="text"
                id="developerCompanyWebsite"
                labelText="Developer company website"
              />
            </div>
            <Link href="add-contact-details" className="mt-2r">
              + Add contact details
            </Link>
          </div>
        </AccordionItem>
        <AccordionItem title="Site location" className="form-section">
          <div className="mt-2r">
            <div className="bx--form-item">
              <Search
                placeholder="Search for connection site"
                labelText="Connection site *"
                size="lg"
              />
              <div className="bx--text-area__label-wrapper mt-4">
                <div className="bx--label mb-2">
                  National Transmission System site
                </div>
              </div>
            </div>
            <div className="bb-1">
              <div className="bx--row w-100">
                <div className="bx--col-lg-5">
                  <TextInput
                    type="text"
                    id="siteLongitude"
                    labelText="Site longitude"
                  />
                </div>
                <div className="bx--col-lg-5 pl-0">
                  <TextInput
                    type="text"
                    id="siteLatitude"
                    labelText="Site latitude"
                  />
                </div>
              </div>
            </div>
            <Checkbox
              className="mt-2r"
              labelText="This connection point is a Grid Supply Point (GSP)"
              id="isGSP"
            />
          </div>
        </AccordionItem>
        <AccordionItem title="Notes" className="form-section">
          <div className="mt-2r">
            <p className="mb-2r">
              If you have any further information that may be useful to discuss
              in your pre-application meeting, please provide the details here.
              This could include any questions you wish to raise relating to
              fees, charging, etc.
            </p>
            <TextArea id="notes" labelText="Notes" placeholder="Type here..." />
          </div>
        </AccordionItem>
        <AccordionItem title="Terms of Reference" className="form-section">
          Lorem Ipsum
        </AccordionItem>
      </Accordion>
      <Row className="mt-2r mb-2r align-flex-end">
        <Button kind="secondary">Save Draft</Button>
        &nbsp;
        <Button>Submit</Button>
      </Row>
    </Grid>
  );
}

export default NewPreApplicationForm;
