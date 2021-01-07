/**
 * 学籍 & 获奖认证接口
 */

import { base } from '@/api/utils/base';
import { http } from '@/api/utils/request';

// 学籍证明
function education() {
 return http.get(`${base}/welcome/print/queryStudentSchoolRoll`);
}

// 荣誉证明
function scholarship() {
 return http.get(`${base}/welcome/print/queryStudentAward`);
}

export { education as IdentifyEducation, scholarship as IdentifyScholarship };
