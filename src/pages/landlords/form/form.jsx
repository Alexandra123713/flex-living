import styled from "styled-components";
import { Formik, Field, Form } from "formik";

import bcgImage from "../../../assets/bcg_image__form.png";
import { FormSelect } from "./form-select";
import { locationData } from "../../../constants";
import { regions } from "./constants";
import { Button } from "../../../components/Button";

export const LandloardsForm = () => {
  return (
    <>
      <BcgImage>
        <FormBox>
          <Title>Earn more from your property, do less</Title>
          <Description>
            Find out if your property meets our criteria
          </Description>
          <Formik
            initialValues={{
              name: "",
              email: "",
              number: "",
              city: "",
              area: "",
              bedrooms: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));

              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ setFieldValue, values }) => {
              return (
                <StyledForm>
                  <StyledField
                    id="name"
                    name="name"
                    placeholder="Name *"
                    type="text"
                  />
                  <StyledField
                    id="email"
                    name="email"
                    placeholder="Email *"
                    type="email"
                  />
                  <StyledField
                    id="number"
                    name="number"
                    placeholder="Phone number *"
                    type="tel"
                  />
                  <Details>Property details</Details>
                  <DetailsContainer>
                    <FormSelect
                      id="city"
                      name="city"
                      placeholder="City *"
                      options={locationData.map((data) => ({
                        value: data.location,
                        label: data.location,
                      }))}
                      value={values.city}
                      onChange={(value) => setFieldValue("city", value)}
                    />
                    <FormSelect
                      id="area"
                      name="area"
                      placeholder="Area *"
                      options={regions[values.city.value] || []}
                      value={values.area}
                      onChange={(value) => setFieldValue("area", value)}
                    />
                  </DetailsContainer>
                  <FormSelect
                    id="bedrooms"
                    name="bedrooms"
                    placeholder="# of bedrooms *"
                    options={[
                      { value: 1, label: "1 bedroom" },
                      { value: 2, label: "2 bedrooms" },
                      { value: 3, label: "3 bedrooms" },
                      { value: 4, label: "4 bedrooms" },
                      { value: 5, label: "5 bedrooms" },
                    ]}
                    value={values.bedrooms}
                    onChange={(value) => setFieldValue("bedrooms", value)}
                  />
                  <SubmitButton type="submit" text="Submit" />
                </StyledForm>
              );
            }}
          </Formik>
        </FormBox>
      </BcgImage>
    </>
  );
};

const SubmitButton = styled(Button)`
  width: 158px;
  align-self: center;
`;

const StyledField = styled(Field)`
  border-radius: 12px;
  padding: 16px 20px;
  background: #fff;
  border: none;
  &::placeholder {
    color: #49735a;
    font-weight: 400;
    font-size: 18px;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 35px;
`;

const BcgImage = styled.div`
  margin: auto;
  margin-bottom: 140px;
  height: 820px;
  background: url(${bcgImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const FormBox = styled.div`
  border-radius: 30px;
  padding: 32px 20px;
  width: 650px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 60px;
  right: 80px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 52px;
  text-align: center;
  margin-bottom: 16px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`;

const Details = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
