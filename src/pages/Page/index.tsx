import React from "react";
import Counter from "../../components/Counter";

const counterNumber = 100;
const countLimit = 500;

export default function Page() {
  const delays = React.useMemo<number[]>(() => [], []);
  const [delay, setDelay] = React.useState(0);

  const addDelay = React.useCallback((delay: number) => {
    delays.push(delay);

    if (delays.length === counterNumber) {
      setDelay(delays.sort((d1, d2) => d2 - d1)[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <span style={{ visibility: delay ? "visible" : "hidden" }}>{delay}</span>
      {Array(counterNumber)
        .fill({})
        .map((_, index) => (
          <Counter key={index} limit={countLimit} onFinish={addDelay} />
        ))}
    </>
  );
}
