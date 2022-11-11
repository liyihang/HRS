import request from '@/utils/request'
/**
 * @params none
 * @returns data
 */
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}
