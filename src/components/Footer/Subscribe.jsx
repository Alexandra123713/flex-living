import React from "react";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";

export const Subscribe = () => (
  <div>
    <StayUp>Stay up to date</StayUp>
    <StayUp>Be the first to know about our newest apartments</StayUp>
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <StyledForm>
        <StyledField
          id="email"
          name="email"
          placeholder="Email adress"
          type="email"
        />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </StyledForm>
    </Formik>
  </div>
);

const StayUp = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 20px;
  &:first-child {
    font-weight: 700;
    margin-bottom: 8px;
  }
`;

const SubscribeButton = styled.button`
  border-radius: 40px;
  background: #064749;
  border: none;
  padding: 12px 40px;
  color: #fff;
  font-size: 18px;
  width: 158px;
  height: 48px;
`;
const StyledField = styled(Field)`
  border-radius: 12px;
  padding: 12px 40px;
  background: #f2f0f2;
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
`;
