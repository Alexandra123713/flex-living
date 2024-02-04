import styled from "styled-components";
import { useState } from "react";
import Calendar from "./Calendar";

const Div = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
  cursor: pointer;
`;

const MoveIn = styled.div`
  display: flex;
  gap: 8px;
`;

const MoveOut = styled.div`
  display: flex;
  gap: 12px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const Text = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #181a18;
`;

const CalendarWrapper = styled.div`
  display: ${(props) => (props.showcalendar ? "flex" : "none")};
  position: absolute;
  bottom: -106%;
  left: -100%;
  transform: translate(-50%, 50%);
`;

const Check = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  console.log(showCalendar);

  const handleCheckClick = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <Div>
      <MoveIn onClick={handleCheckClick}>
        <Icon src="../src/assets/eva_calendar-fill.svg" />
        <Text>Move-in</Text>
      </MoveIn>
      <MoveOut onClick={handleCheckClick}>
        <Icon src="../src/assets/eva_arrow-forward-fill.svg" />
        <Text>Move-out</Text>
      </MoveOut>
      <CalendarWrapper showcalendar={showCalendar}>
        <Calendar />
      </CalendarWrapper>
    </Div>
  );
};

export default Check;
