import React from "react";
import Countdown from "react-countdown";

export default function Timer() {
  const Achiements = () => <h1>Вы дождались 10 секунд</h1>;

  return (
    <Countdown date="2022-12-29T00:00:00">
      <Achiements />
    </Countdown>
  );
}
