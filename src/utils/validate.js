/*  手机号码 */
export function isvalidMobile (str) {
  const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
  return reg.test(str)
}
/*  固定电话 */
export function isvalidPhone (str) {
  const reg = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/
  return reg.test(str)
}
