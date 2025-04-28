"use client";

import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useEffect, useState } from "react";

type Props = {
  targetDate: Date | number;
};

export default function Countdown({ targetDate }: Props) {
  const getInitialSeconds = () =>
    Math.max(0, Math.floor((+targetDate - Date.now()) / 1000));
  const [remaining, setRemaining] = useState(getInitialSeconds);

  useEffect(() => {
    setRemaining(getInitialSeconds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  useEffect(() => {
    if (remaining <= 0) return;
    const interval = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [remaining]);

  const days = Math.floor(remaining / 86400);
  const hh = Math.floor((remaining % 86400) / 3600);
  const mm = Math.floor((remaining % 3600) / 60);
  const ss = remaining % 60;

  return (
    <NumberFlowGroup>
      <div style={{ fontVariantNumeric: "tabular-nums" }}>
        {days > 0 && (
          <>
            <NumberFlow
              trend={-1}
              value={days}
              format={{ minimumIntegerDigits: 2 }}
            />
            <NumberFlow
              prefix=":"
              trend={-1}
              value={hh}
              format={{ minimumIntegerDigits: 2 }}
            />
          </>
        )}
        {!days && (
          <NumberFlow
            trend={-1}
            value={hh}
            format={{ minimumIntegerDigits: 2 }}
          />
        )}
        <NumberFlow
          prefix=":"
          trend={-1}
          value={mm}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <NumberFlow
          prefix=":"
          trend={-1}
          value={ss}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
      </div>
    </NumberFlowGroup>
  );
}
