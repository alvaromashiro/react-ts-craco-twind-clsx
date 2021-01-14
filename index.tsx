import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import clsx from "clsx";
import { tw } from "twind";

interface AppProps {}
interface AppState {
  name: string;
}
type Size = "sm" | "md";

interface ButtonProps {
  size: Size;
}

const Button: React.FC<HTMLButtonElement & ButtonProps> = ({
  disabled = false,
  size = "md",
  className,
  children,
  ...props
}) => {
  const _className = clsx("test", tw`test`, className);
  console.log(_className);
  return <button className={_className}>{children}</button>;
};

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Button size="md" className="text-red-500 text-xl">
          asdsad
        </Button>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
