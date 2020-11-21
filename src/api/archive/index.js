/**
 * 成绩单接口
 */

import { base } from '@/api/base';
import request from '@/utils/http';

// 成绩查询
function report(value) {
	return request.get(`${base}/api/student/data/platform/student?type=${value}`);
}

export { report as queryReportCard };
