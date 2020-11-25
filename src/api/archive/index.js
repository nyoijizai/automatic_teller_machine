/**
 * 成绩单接口
 */

import { base } from '@/api/base';
import request from '@/utils/http';

// 成绩档案查询
function archive(studentNumber) {
	return request.get(
		`${base}/api/student/data/platform/student/archives/${studentNumber}`
	);
}

// 成绩查询
function report(value) {
	return request.get(`${base}/api/student/data/platform/student?type=${value}`);
}

export { archive as queryReportArchive, report as queryReportCard };
