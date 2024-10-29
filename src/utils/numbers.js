export const onlyNumbers = $event => {
  let regex = new RegExp("^[0-9]+$");
  let key = String.fromCharCode(
    $event.key ? $event.which : $event.key
  );
  if (!regex.test(key)) {
    $event.preventDefault();
  }
};
