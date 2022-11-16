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

export function delDepartmentById(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'delete'
  })
}
export function addDepartment(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}
