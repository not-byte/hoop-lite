export default (time: Date): string[] => {
  if (!time) {
    return [
      '00',
      '00',
    ]
  }

  const currentTime = new Date();
  const timeDifference = time.getTime() - currentTime.getTime();

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  return [
    hours < 10 ? `0${hours}` : `${hours}`,
    minutes < 10 ? `0${minutes}` : `${minutes}`
  ]
}