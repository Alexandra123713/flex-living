import styled from "styled-components";
import linkedinIcon from "../../assets/eva_linkedin-fill.svg";
import facebookIcon from "../../assets/eva_facebook-fill.svg";
import twitterIcon from "../../assets/eva_twitter-fill.svg";

export const IconsCopyright = () => {
  return (
    <div>
      <Contact>Contact number: 02033074477</Contact>
      <Icons>
        <img src={linkedinIcon} />
        <img src={facebookIcon} />
        <img src={twitterIcon} />
      </Icons>
      <Copyright>© 2021 Flex Living</Copyright>
    </div>
  );
};

const Contact = styled.div`
  color: #181a18;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 20px;
`;
const Icons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;
const Copyright = styled.div`
  color: #181a18;
  font-weight: 400;
  font-size: 16px;
`;
