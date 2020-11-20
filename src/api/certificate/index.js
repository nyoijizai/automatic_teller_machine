/**
 * 学籍 & 获奖认证接口
 */

import { base } from '@/api/base';
import request from '@/utils/http';

// 学籍证明
function education() {
	return request.get(`${base}/api/welcome/print/queryStudentSchoolRoll`);
}

// 荣誉证明
function scholarship() {
	return request.get(`${base}/api/welcome/print/queryStudentAward`);
}

export { education as IdentifyEducation, scholarship as IdentifyScholarship };
