import Title from "./Title";

const Header = (props) => {
  return (
    <header>
      <Title name={props.name}></Title>
    </header>
  );
};

export default Header;
