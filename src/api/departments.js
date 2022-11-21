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
/**
 *
 * @param {*} id
 * @returns
 */
export function delDepartmentById(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'delete'
  })
}
/**
 *
 * @param {*} data
 * @returns
 */
export function addDepartment(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}

export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}
