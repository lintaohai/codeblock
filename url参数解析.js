/**
 * 截取URL参数
 * @param {string} url
 * @returns {Object}
 */
 export function param2Obj(url: string) {
    const search: string = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
        '"}'
    )
  }