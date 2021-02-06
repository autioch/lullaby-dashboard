import { useState } from 'react';
import { useInterval } from '../../utils';
import './index.scss';

const CLOCK_UPDATE = 1000;
const PAD_LENGTH = 2;
const PAD_FILL = '0';

function formatPart(num) {
  return num.toString().padStart(PAD_LENGTH, PAD_FILL);
}

function getTime() {
  const date = new Date();
  const hours = formatPart(date.getHours());
  const minutes = formatPart(date.getMinutes());

  return `${hours}:${minutes}`;
}

export default function Clock() {
  const [timeText, setTimeText] = useState(getTime());

  useInterval(() => setTimeText(getTime()), CLOCK_UPDATE);

  return (
    <div className="c-clock">
      {timeText}
    </div>
  );
}
