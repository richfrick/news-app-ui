export function convertCommentCountstoIntArray(arr: string[]) {
  return arr.map((e) => {
    const num = e.match(/\d+/);
    return num ? parseInt(num[0], 10) : 0;
  });
}

export function convertDateStringToTimeInMins(arr: string[]) {
  return arr.map((e) => {
    const regexMatch = e.match(/(?<=on ).*$/);
    const timeConversion = regexMatch ? regexMatch[0] : null;

    return timeConversion
      ? new Date(timeConversion.replace(' at ', ' ')).getTime()
      : 0;
  });
}
