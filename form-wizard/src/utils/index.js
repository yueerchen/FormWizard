export function isEmailValid(email) {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  if (!pattern.test(email)) {
    return false;
  }
  return true;
}

export function isPhoneValid(phone) {
  if (phone.trim() == "") {
    return true;
  }
  const pattern = new RegExp(
    /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/
  );
  if (!pattern.test(phone)) {
    return false;
  }
  return true;
}

export function isPostcodeValid(postcode) {
  const pattern = new RegExp(/(^0(2|8|9){1}[0-9]{2})|(^[1-9]{1}[0-9]{3})$/);
  if (!pattern.test(postcode)) {
    return false;
  }
  return true;
}

export function isStreetNumberValid(stNumber) {
  const pattern = new RegExp(/^\d*\d*$/);
  if (!pattern.test(stNumber)) {
    return false;
  }
  return true;
}
