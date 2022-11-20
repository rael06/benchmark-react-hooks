import React from "react";
import Count from "../Count";
import Increment from "../Increment";

type Props = {
  limit: number;
  onFinish: (delay: number) => void;
};

export default function Counter({ limit, onFinish }: Props) {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ display: "flex" }}>
      <Count value={count} />
      <Increment
        count={count}
        setCount={setCount}
        limit={limit}
        onFinish={onFinish}
      />
    </div>
  );
}
