export const addDashes = (e) => {
  let f = e.target;
  const f_val = f.value.replace(/\D[^\.]/g, "");
  if (e.target.value.length === 10) {
    f.value =
      f_val.slice(0, 3) + "-" + f_val.slice(3, 6) + "-" + f_val.slice(6);
    return f;
  }
};
