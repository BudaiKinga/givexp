export function fnIsMobile() {
  return localStorage.getItem("isMobile") === "true";
}

export const prependMobile = (className) => {
  return fnIsMobile() ? "mobile" + className : className;
};
