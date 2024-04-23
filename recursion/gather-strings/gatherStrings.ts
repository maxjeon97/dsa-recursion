/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  let strings: string[] = [];

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object" && Object.prototype.toString.call(obj[key]) === '[object Object]') {
      strings.push(...gatherStrings(obj[key]));

    }
  }
  return strings;
}

export { gatherStrings };
//