// import dayjs from "dayjs";
// import duration from "dayjs/plugin/duration";
// import { differenceInMilliseconds } from 'date-fns';

// dayjs.extend(duration);

// export const TIME_OFFLINE = 10;


export const calculateCurrentDate = () => {

  // const date = new Date();
  const date: String = new Date(Date.now()).toString();
  const year = new Date(Date.now()).getFullYear();
  const month = new Date(Date.now()).getMonth() + 1;
  const day = new Date(Date.now()).getDate().toString();
  const hour = new Date(Date.now()).getHours();
  const minutes = new Date(Date.now()).getMinutes();

  return {
    now: date,
    day: Number(day) < 10 ? '0' + day?.toString() : day?.toString(),
    month: month < 10 ? '0' + month?.toString() : month?.toString(),
    year: year?.toString(),
    hourFull: `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`,
    hour: hour < 10 ? '0' + hour : hour,
    minutes: minutes < 10 ? '0' + minutes : minutes,
  }
}

// export {
//   calculateCurrentDate,

// };
