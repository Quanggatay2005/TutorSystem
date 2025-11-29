import { mockData } from '../data/mockData';

export function LoginSSOService({ username, password }) {
  return new Promise((resolve, reject) => {
    // Giả lập request async
    setTimeout(() => {
      // Tìm student có username + password khớp
      const user = mockData.students.find(
        (stu) => stu.username === username && stu.password === password
      );
      // Nếu có user trong mock data trả về thành công, 
      if (user) {
        resolve({
          success: true,
          user: {
            id: user.id,
            username: user.username,
            fullName: user.fullName,
            avatar: user.avatar,
            faculty: user.faculty,
            major: user.major,
            yearOfStudy: user.yearOfStudy,
          },
          token: 'fakeJwthdakkcorttoken', // bạn có thể tạo token mock
        });
      } else {
        reject({ success: false, message: 'Sai username hoặc password' });
      }
    }, 500); // giả lập delay
  });
}
