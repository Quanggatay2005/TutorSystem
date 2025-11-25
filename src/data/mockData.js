// src/data/mockData.js
export const mockData = {
  // ... (giữ nguyên currentUser) ...

  tutors: [
    {
      id: "TUT001",
      // --- DỮ LIỆU TỪ DATACORE (READ-ONLY) ---
      name: "TS. Trần Minh B",
      faculty: "Khoa học và Kỹ thuật Máy tính", // Khoa
      major: "Khoa học Máy tính", // Ngành
      rating: 4.8,
      isVerified: true, // Cờ đánh dấu đã xác thực qua DataCore

      // --- DỮ LIỆU DO TUTOR TỰ CẤU HÌNH ---
      subjects: ["Cấu trúc dữ liệu", "Giải thuật"],
      targetStudents: "Sinh viên năm 1, 2 cần cải thiện tư duy logic",
      availableTime: ["Sáng Thứ 2", "Chiều Thứ 4"],
      avatar: "https://i.pravatar.cc/150?u=TUT001"
    },
    {
      id: "TUT002",
      name: "Nguyễn Văn C (K2020)",
      faculty: "Điện - Điện tử",
      major: "Viễn thông",
      rating: 4.5,
      isVerified: true,

      subjects: ["Mạch điện tử", "Tín hiệu số"],
      targetStudents: "Ôn thi cuối kỳ cấp tốc",
      availableTime: ["Tối Thứ 3, 5, 7"],
      avatar: "https://i.pravatar.cc/150?u=TUT002"
    },
    {
      id: "TUT003",
      // --- KHOA HỌC ỨNG DỤNG ---
      name: "ThS. Lê Văn Dũng",
      faculty: "Khoa học ứng dụng",
      major: "Toán ứng dụng",
      rating: 4.9,
      isVerified: true,
      subjects: ["Giải tích 1", "Giải tích 2"],
      targetStudents: "Sinh viên năm nhất mất gốc Toán, cần lấy lại căn bản",
      availableTime: ["Sáng Thứ 2, 4, 6"],
      avatar: "https://i.pravatar.cc/150?u=TUT003"
    },
    {
      id: "TUT004",
      // --- KỸ THUẬT HÓA HỌC ---
      name: "TS. Phạm Thị Hương",
      faculty: "Kỹ thuật hóa học",
      major: "Công nghệ Hóa học",
      rating: 4.7,
      isVerified: true,
      subjects: ["Hóa hữu cơ"],
      targetStudents: "Sinh viên cần ôn thi giữa kỳ và cuối kỳ cấp tốc",
      availableTime: ["Chiều Thứ 3, 5"],
      avatar: "https://i.pravatar.cc/150?u=TUT004"
    },
    {
      id: "TUT005",
      // --- KỸ THUẬT XÂY DỰNG ---
      name: "Nguyễn Văn Hùng (K2019)",
      faculty: "Kỹ thuật xây dựng",
      major: "Xây dựng Dân dụng",
      rating: 4.5,
      isVerified: true,
      subjects: ["Kết cấu thép"],
      targetStudents: "Hỗ trợ sửa đồ án môn học và bài tập lớn",
      availableTime: ["Tối Thứ 2, 4, 6, CN"],
      avatar: "https://i.pravatar.cc/150?u=TUT005"
    },
    {
      id: "TUT006",
      // --- KHOA HỌC ỨNG DỤNG ---
      name: "TS. Hoàng Minh Trí",
      faculty: "Khoa học ứng dụng",
      major: "Vật lý kỹ thuật",
      rating: 4.2,
      isVerified: true,
      subjects: ["Xác suất thống kê"],
      targetStudents: "Hướng dẫn sử dụng R và xử lý số liệu thống kê",
      availableTime: ["Sáng Thứ 7, CN"],
      avatar: "https://i.pravatar.cc/150?u=TUT006"
    },
    {
      id: "TUT007",
      // --- KỸ THUẬT HÓA HỌC ---
      name: "Trần Ngọc Lan (K2020)",
      faculty: "Kỹ thuật hóa học",
      major: "Hóa Lý",
      rating: 4.8,
      isVerified: true,
      subjects: ["Hóa lý", "Hóa keo"],
      targetStudents: "Trao đổi bài tập nâng cao, săn học bổng",
      availableTime: ["Chiều Thứ 2, 6"],
      avatar: "https://i.pravatar.cc/150?u=TUT007"
    },
    {
      id: "TUT008",
      // --- KỸ THUẬT XÂY DỰNG ---
      name: "ThS. Đặng Quốc Bảo",
      faculty: "Kỹ thuật xây dựng",
      major: "Cơ kỹ thuật",
      rating: 4.6,
      isVerified: true,
      subjects: ["Cơ lưu chất"],
      targetStudents: "Sinh viên nợ môn cần qua môn chắc chắn",
      availableTime: ["Tối Thứ 3, 5, 7"],
      avatar: "https://i.pravatar.cc/150?u=TUT008"
    },
    {
      id: "TUT009",
      // --- KHOA HỌC ỨNG DỤNG ---
      name: "Phan Thị Kim (K2021)",
      faculty: "Khoa học ứng dụng",
      major: "Toán Tin",
      rating: 4.4,
      isVerified: true,
      subjects: ["Giải tích 1", "Xác suất thống kê"],
      targetStudents: "Nhóm học tập nhỏ (3-5 người), dạy kèm chi tiết",
      availableTime: ["Chiều Thứ 4, Chiều CN"],
      avatar: "https://i.pravatar.cc/150?u=TUT009"
    },
    {
      id: "TUT010",
      // --- KỸ THUẬT HÓA HỌC ---
      name: "TS. Vũ Văn Lâm",
      faculty: "Kỹ thuật hóa học",
      major: "Kỹ thuật Hóa học",
      rating: 4.9,
      isVerified: true,
      subjects: ["Hóa keo", "Hóa hữu cơ"],
      targetStudents: "Định hướng nghiên cứu khoa học và đồ án tốt nghiệp",
      availableTime: ["Sáng Thứ 3, 5"],
      avatar: "https://i.pravatar.cc/150?u=TUT010"
    },
    {
      id: "TUT011",
      // --- KỸ THUẬT XÂY DỰNG ---
      name: "Lê Thị Mai (K2020)",
      faculty: "Kỹ thuật xây dựng",
      major: "Kỹ thuật Công trình biển",
      rating: 4.3,
      isVerified: true,
      subjects: ["Cơ lưu chất", "Kết cấu thép"],
      targetStudents: "Giải đề thi các năm cũ",
      availableTime: ["Tối Thứ 2, 4"],
      avatar: "https://i.pravatar.cc/150?u=TUT011"
    },
    {
      id: "TUT012",
      // --- KHOA HỌC ỨNG DỤNG ---
      name: "Bùi Văn Nam",
      faculty: "Khoa học ứng dụng",
      major: "Cơ kỹ thuật",
      rating: 4.0,
      isVerified: true,
      subjects: ["Giải tích 2"],
      targetStudents: "Hỗ trợ giải đáp thắc mắc online nhanh chóng",
      availableTime: ["Linh hoạt các buổi tối"],
      avatar: "https://i.pravatar.cc/150?u=TUT012"
    },
    // --- KHOA HỌC VÀ KỸ THUẬT MÁY TÍNH (CSE) ---
    {
      id: "TUT013",
      name: "Nguyễn Hoàng Nam (K2021)",
      faculty: "Khoa học và Kỹ thuật Máy tính",
      major: "Khoa học Máy tính",
      rating: 4.6,
      isVerified: true,
      subjects: ["Nhập môn Lập trình (C/C++)", "Cấu trúc rời rạc"],
      targetStudents: "Sinh viên năm nhất chưa từng code, cần qua môn Lập trình",
      availableTime: ["Tối Thứ 3, 5, 7"],
      avatar: "https://i.pravatar.cc/150?u=TUT013"
    },
    {
      id: "TUT014",
      name: "ThS. Phạm Thanh Hằng",
      faculty: "Khoa học và Kỹ thuật Máy tính",
      major: "Hệ thống thông tin",
      rating: 4.9,
      isVerified: true,
      subjects: ["Cơ sở dữ liệu", "Phân tích thiết kế hệ thống"],
      targetStudents: "Hỗ trợ làm đồ án môn học, chuẩn hóa database",
      availableTime: ["Sáng Thứ 7, Chiều CN"],
      avatar: "https://i.pravatar.cc/150?u=TUT014"
    },
    {
      id: "TUT015",
      name: "Lê Quốc Việt (K2019)",
      faculty: "Khoa học và Kỹ thuật Máy tính",
      major: "Kỹ thuật phần mềm",
      rating: 4.7,
      isVerified: true,
      subjects: ["Lập trình Web", "Công nghệ phần mềm"],
      targetStudents: "Review code ReactJS/NodeJS, định hướng thực tập",
      availableTime: ["Chiều Thứ 2, 4, 6"],
      avatar: "https://i.pravatar.cc/150?u=TUT015"
    },

    // --- ĐIỆN - ĐIỆN TỬ (EEE) ---
    {
      id: "TUT016",
      name: "Trần Văn Hậu (K2020)",
      faculty: "Điện - Điện tử",
      major: "Kỹ thuật Điện tử - Viễn thông",
      rating: 4.5,
      isVerified: true,
      subjects: ["Mạch điện 1", "Mạch điện 2"],
      targetStudents: "Sinh viên mất gốc định luật Kirchhoff, Thevenin",
      availableTime: ["Tối Thứ 2, 4, 6"],
      avatar: "https://i.pravatar.cc/150?u=TUT016"
    },
    {
      id: "TUT017",
      name: "TS. Đỗ Thị Thu",
      faculty: "Điện - Điện tử",
      major: "Điều khiển và Tự động hóa",
      rating: 4.8,
      isVerified: true,
      subjects: ["Lý thuyết điều khiển tự động", "Vi xử lý"],
      targetStudents: "Hướng dẫn giải bài tập lớn Matlab/Simulink",
      availableTime: ["Sáng Thứ 3, 5"],
      avatar: "https://i.pravatar.cc/150?u=TUT017"
    },
    {
      id: "TUT018",
      name: "Võ Minh Khôi (K2021)",
      faculty: "Điện - Điện tử",
      major: "Kỹ thuật Điện",
      rating: 4.3,
      isVerified: true,
      subjects: ["Cung cấp điện", "Máy điện"],
      targetStudents: "Ôn thi cuối kỳ, giải đề thi các năm trước",
      availableTime: ["Chiều Thứ 7, Tối CN"],
      avatar: "https://i.pravatar.cc/150?u=TUT018"
    }
    // Bạn có thể copy thêm nhiều tutor khác
  ]
};