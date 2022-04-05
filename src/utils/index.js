// 深拷贝
export const _deepClone = (task) => {
  // 判断参数是数组还是对象
  const targetObj = task.constructor === Array ? [] : {}
  for (const keys in task) {
    // 判断task是否是自身属性
    if (Object.prototype.hasOwnProperty.call(task, keys)) {
      // 判断是否引用类型
      if (task[keys] && typeof task[keys] === 'object') {
        // 防止错误代码
        targetObj[keys] = task.constructor === Array ? [] : {}
        // 递归调用嵌套引用类型
        targetObj[keys] = _deepClone(task[keys])
      } else {
        // 非引用类型直接赋值
        targetObj[keys] = task[keys]
      }
    }
  }
  return targetObj
}
