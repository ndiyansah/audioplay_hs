import styled from "styled-components";

const BaseSticky = styled.div`
  position: fixed;
  ${(p) => (p.position === "top" ? "top: 0" : "bottom: 0")};
  list-style-type: none;
  display: inline-block;
  border-width: 1px 0px 0px;
  font-weight: 600;
  line-height: 13px;
  text-align: center;
  vertical-align: middle;
  transition: all 0.35s ease 0s;
  text-decoration: none;
  width: 100%;
  max-width: 460px;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
  padding: 10px;
  font-size: 1em;
  border-top-style: solid;
  margin: 0px;
  background-color: #212527;
  box-shadow: ${(p) => (p.shadow ? "0px 0 10px rgba(0, 0, 0, 0.2)" : "")};
`;

export const Sticky = ({ position, children, shadow = true }) => {
  return (
    <BaseSticky position={position} shadow={shadow}>
      {children}
    </BaseSticky>
  );
};

export default Sticky;
