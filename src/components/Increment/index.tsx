import React from "react";

type Props = {
  limit: number;
  count: number;
  setCount: (value: number) => void;
  onFinish: (value: number) => void;
};

export default function Increment({ count, setCount, limit, onFinish }: Props) {
  const start = React.useMemo(() => new Date().getTime(), []);
  const [delay, setDelay] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => count < limit && setCount(count + 1), 20);
    if (count === limit) {
      const end = new Date().getTime();
      const delay = (end - start) / 1000;
      setDelay(delay);
      onFinish(delay);
    }

    return () => clearTimeout(timeout);
  }, [count, limit, onFinish, setCount, start]);

  return <>{count === limit && <span>{delay} sec</span>}</>;
}
