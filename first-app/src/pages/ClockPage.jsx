import { useEffect, useState } from "react";
import * as DateFns from "date-fns";
import Layout from "../components/layout/Layout";

function getTimes(date) {
  return {
    hours: DateFns.getHours(date),
    minutes: DateFns.getMinutes(date),
    seconds: DateFns.getSeconds(date),
  };
}

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

function ClockPage() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1 * 1000);
  }, [date]);

  const { hours, minutes, seconds } = getTimes(date);

  return (
    <Layout>
      <h1>This is the Clock</h1>
      <h1>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </h1>
    </Layout>
  );
}

export default ClockPage;
