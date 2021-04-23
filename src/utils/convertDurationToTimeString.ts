export function convertDurationToTimeString(duration: number) {
  const hourInSeconds = 3600;
  const hours = Math.floor(duration / hourInSeconds);
  const minutes = Math.floor((duration % hourInSeconds) / 60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':');
  
  return timeString;
}