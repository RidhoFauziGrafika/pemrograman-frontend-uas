import StyledAlert from "./Alert.styled";

function Alert(props) {
  const { children } = props;

  return (
    <StyledAlert>
      <span>{props.children}</span>
    </StyledAlert>
  );
}

export default Alert;
