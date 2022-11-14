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
    url: `/company/departments/${id}`,
    method: 'delete'
  })
}
