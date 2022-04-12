import React from "react";
import styled from "styled-components";

type ToggleTabProps = {
  names: string[];
  id: string;
};
type TabProps = {
  name: string;
  index: number;
  id: string;
  activeIndex: number;
  lastIndex: number;
};

type RadioInputProps = {
  index: number;
  isActive: boolean;
  lastIndex: number;
};

const colors = {
  emerald: {
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
  },
};

const Label = styled.label<RadioInputProps>`
  background-color: ${(props) => (props.isActive ? colors.emerald[400] : colors.emerald[200])};
  font-size: 20px;
  padding: 10px 15px;
  border-top: 1px solid ${colors.emerald[400]};
  border-bottom: 1px solid ${colors.emerald[400]};
  border-right: ${(props) => (props.index === props.lastIndex ? `1px solid ${colors.emerald[400]}` : "none")};
  border-left: ${(props) => (props.index === 0 ? `1px solid ${colors.emerald[400]}` : "none")};
  user-select: none;
  border-radius: ${(props) =>
    props.index === 0 ? "0.25rem 0 0 0.25rem" : props.index === props.lastIndex ? "0 0.25rem 0.25rem 0" : "0"};
  &:hover {
    background-color: ${(props) => (props.isActive ? colors.emerald[400] : colors.emerald[300])};
  }
`;

const TabGroup = styled.div`
  display: flex;
`;

const RadioInput = styled.input`
  display: none;
`;

const Tab = (props: TabProps) => {
  const { name, index, id, activeIndex, lastIndex } = props;
  return (
    <>
      <RadioInput
        id={`toggle-tab-${index}`}
        name={id}
        value={index}
        type="radio"
        defaultChecked={activeIndex === index}
      />
      <Label isActive={activeIndex === index} index={index} lastIndex={lastIndex} htmlFor={`toggle-tab-${index}`}>
        {name}
      </Label>
    </>
  );
};

const ToggleTab = (props: ToggleTabProps) => {
  const { names, id } = props;
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveIndex(parseInt(e.target.value));
  };
  return (
    <TabGroup onChange={handleChange}>
      {names.map((name, index) => (
        <Tab key={index} name="Tab01" id={id} index={index} activeIndex={activeIndex} lastIndex={names.length - 1} />
      ))}
    </TabGroup>
  );
};

export default ToggleTab;
