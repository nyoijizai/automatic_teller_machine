import { base } from '@/api/utils/base';
import { http } from '@/api/utils/request';

// 学生成绩档案表
function archive(studentNumber) {
 return http.get(
  `${base}/student/data/platform/student/archives/${studentNumber}`
 );
}

// 学生有效/原始成绩表
function transcript(data) {
 return http.get(`${base}/student/data/platform/student`, { params: data });
}

export {
 archive as queryTranscriptArchive,
 transcript as queryTranscript,
};
