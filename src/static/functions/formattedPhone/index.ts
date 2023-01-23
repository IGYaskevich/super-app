export const formattedPhone = (phone: string) => {
  const checkPhone =
    /([\d]+?)??([\d]{1,3}?)??([\d]{1,3}?)??([\d]{2})??([\d]{2})$/;
  const res = phone
    .replace(/[^0-9]/g, "")
    .replace(checkPhone, (all, a, b, c, d, e) => {
      return (
        (a ? "+" + a + " (" : "") +
        (b ? b + ") " : "") +
        (c ? c + "-" : "") +
        (d ? d + "-" : "") +
        e
      );
    });

  return res ? res : phone;
};
