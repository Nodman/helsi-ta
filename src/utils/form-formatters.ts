const UA_CODE = "+38";

export const phoneFormatter = (value: string | void) => {
  if (!value) {
    return UA_CODE;
  }

  const body = value
    .replace(UA_CODE, "")
    .trim()
    .replace(/[^\d-()\s]/, "")
    .replace(/^(\d\d\d)/, "($1)")
    .replace(/^(\(\d\d\d)\s?\d/, "$1)")
    .replace(/^(\(\d\d\d\))\s?(\d\d\d)/, "$1 $2")
    .replace(/^(\(\d\d\d\)\s\d\d\d)[-\s]?(\d\d?)/, "$1-$2")
    .replace(/^(\(\d\d\d\)\s\d\d\d-\d\d)[-\s]?(\d\d?)/, "$1-$2")
    .slice(0, 15);

  return `${UA_CODE} ${body}`;
};
