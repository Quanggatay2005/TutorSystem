// src/data/mockData.js
export const mockData = {
  // ... (giữ nguyên currentUser) ...
  students: [
    {
      id: "STU001",
      username: "ngoc.nguyen",
      password: "123456", 
      email: "ngoc.nguyen@hcmut.edu.vn",
      fullName: "Nguyễn Ánh Ngọc",
      faculty: "Khoa học và Kỹ thuật Máy tính",
      major: "Khoa học Máy tính",
      yearOfStudy: 2,
      avatar: "https://i.pravatar.cc/150?u=STU001",
      favoriteSubjects: ["Cấu trúc dữ liệu", "Giải thuật", "Giải tích 1"],
    },{
       id: "stu002",
      username: "hoa.pham",
      password: "123456",
      email: "hoa.pham@hcmut.edu.vn",
      fullName: "Phạm Văn Hòa",
      faculty: "Khoa học và Kỹ thuật Máy tính",
      major: "Kỹ thuật máy tính",
      yearOfStudy: 1,
      favoriteSubjects: ["Giải tích 1", "Xác suất thống kê"],
      avatar: "https://i.pravatar.cc/150?u=STU002"
    },{
      id: "STU003",
      username: "minh.tran",
      password: "123456",
      email: "minh.tran@hcmut.edu.vn",
      fullName: "Trần Hữu Minh",
      faculty: "Khoa học ứng dụng",
      major: "Toán ứng dụng",
      yearOfStudy: 2,
      favoriteSubjects: ["Giải tích 1", "Giải tích 2", "Xác suất thống kê"],
      avatar: "https://i.pravatar.cc/150?u=STU003"
    },{
      id: "STU004",
      username: "linh.hoang",
      password: "123456",
      email: "linh.hoang@hcmut.edu.vn",
      fullName: "Hoàng Thị Linh",
      faculty: "Kỹ thuật hóa học",
      major: "Công nghệ Hóa học",
      yearOfStudy: 3,
      favoriteSubjects: ["Hóa hữu cơ", "Hóa lý", "Hóa keo"],
      avatar: "https://i.pravatar.cc/150?u=STU004"
    },{
      id: "STU005",
      username: "hung.nguyen",
      password: "123456",
      email: "hung.nguyen@hcmut.edu.vn",
      fullName: "Nguyễn Văn Hùng",
      faculty: "Kỹ thuật xây dựng",
      major: "Xây dựng Dân dụng",
      yearOfStudy: 2,
      favoriteSubjects: ["Kết cấu thép", "Cơ lưu chất"],
      avatar: "https://i.pravatar.cc/150?u=STU005"
    },{
      id: "STU006",
      username: "phuong.dang",
      password: "123456",
      email: "phuong.dang@hcmut.edu.vn",
      fullName: "Đặng Thị Phương",
      faculty: "Điện - Điện tử",
      major: "Viễn thông",
      yearOfStudy: 1,
      favoriteSubjects: ["Mạch điện tử", "Tín hiệu số"],
      avatar: "https://i.pravatar.cc/150?u=STU006"
    },{
      id: "STU007",
      username: "quang.vo",
      password: "123456",
      email: "quang.vo@hcmut.edu.vn",
      fullName: "Võ Quang Huy",
      faculty: "Khoa học và Kỹ thuật Máy tính",
      major: "Kỹ thuật phần mềm",
      yearOfStudy: 1,
      favoriteSubjects: ["Lập trình Web", "Cơ sở dữ liệu", "Công nghệ phần mềm"],
      avatar: "https://i.pravatar.cc/150?u=STU007"
    },{
      id: "STU008",
      username: "thao.le",
      password: "123456",
      email: "thao.le@hcmut.edu.vn",
      fullName: "Lê Thị Thảo",
      faculty: "Khoa học ứng dụng",
      major: "Vật lý kỹ thuật",
      yearOfStudy: 2,
      favoriteSubjects: ["Xác suất thống kê", "Giải tích 2"],
      avatar: "https://i.pravatar.cc/150?u=STU008"
    },{
      id: "STU009",
      username: "kiet.bui",
      password: "123456", 
      email: "kiet.bui@hcmut.edu.vn",
      fullName: "Bùi Quang Anh Kiệt",
      faculty: "Khoa học và Kỹ thuật Máy tính",
      major: "Khoa học Máy tính",
      yearOfStudy: 2,
      avatar: "https://i.pravatar.cc/150?u=STU009",
      favoriteSubjects: ["Giải thuật", "Xác suất thống kê"],
    }
  ],

  library_data: [
    {
      id: "DOC001",
      title: "Giáo trình Giải tích 1 - Chương 1",
      type: "document",
      subject: "Giải tích 1",
      thumbnail: "https://placehold.co/300x400/3B82F6/FFFFFF?text=Gi%E1%BA%A3i+T%C3%ADch+1&font=montserrat",
      author: "ThS. Lê Văn Dũng",
      tags: ["Giải tích", "Giáo trình", "Khoa học ứng dụng"]
    },
    {
      id: "VID001",
      title: "Bài giảng Xác suất thống kê - Phần mô tả cơ bản",
      type: "video",
      subject: "Xác suất thống kê",
      thumbnail: "https://placehold.co/300x400/10B981/FFFFFF?text=X%C3%A1c+su%E1%BA%A5t+Th%E1%BB%A9c+Th%E1%BB%8B&font=montserrat",
      author: "TS. Hoàng Minh Trí",
      tags: ["Xác suất thống kê", "Bài giảng", "Khoa học ứng dụng"]
    },
    {
      id: "DOC002",
      title: "Sổ tay Cấu trúc dữ liệu - Từ cơ bản đến nâng cao",
      type: "document",
      subject: "Cấu trúc dữ liệu",
      thumbnail: "https://placehold.co/300x400/F59E0B/FFFFFF?text=C%E1%BA%BAu+tr%C3%BAc+d%E1%BB%AF+li%E1%BB%87u&font=montserrat",
      author: "TS. Trần Minh B",
      tags: ["Khoa học máy tính", "Giáo trình", "Lập trình"]
    },
    {
      id: "ART001",
      title: "Phân tích thuật toán: Case study và bài tập",
      type: "article",
      subject: "Giải thuật",
      thumbnail: "https://placehold.co/300x400/F97316/FFFFFF?text=Gi%E1%BA%A3i+thu%E1%BA%ADt&font=montserrat",
      author: "TS. Trần Minh B",
      tags: ["Khoa học máy tính", "Bài tập", "Tài liệu tham khảo"]
    },
    {
      id: "DOC003",
      title: "Cơ sở dữ liệu - Tài liệu tổng hợp",
      type: "document",
      subject: "Cơ sở dữ liệu",
      thumbnail: "https://placehold.co/300x400/7C3AED/FFFFFF?text=C%C6%A1+s%E1%BB%AF+d%E1%BB%AF+li%E1%BB%87u&font=montserrat",
      author: "ThS. Phạm Thanh Hằng",
      tags: ["Hệ thống thông tin", "Giáo trình", "Tài liệu tham khảo"]
    },
    {
      id: "VID002",
      title: "Lập trình Web: Xây dựng SPA với React",
      type: "video",
      subject: "Lập trình Web",
      thumbnail: "https://placehold.co/300x400/EF4444/FFFFFF?text=L%E1%BA%ADp+tr%C3%ACnh+Web&font=montserrat",
      author: "Lê Quốc Việt",
      tags: ["Kỹ thuật phần mềm", "Bài giảng", "Thực hành"]
    },
    {
      id: "DOC004",
      title: "Mạch điện tử - Bài tập có lời giải",
      type: "document",
      subject: "Mạch điện tử",
      thumbnail: "https://placehold.co/300x400/06B6D4/FFFFFF?text=M%E1%BA%ADch+%C4%91i%E1%BB%87n+t%E1%BB%A9&font=montserrat",
      author: "Nguyễn Văn C (K2020)",
      tags: ["Điện - Điện tử", "Bài tập", "Tài liệu tham khảo"]
    },
    {
      id: "ART002",
      title: "Hóa hữu cơ: Tổng hợp phản ứng cơ bản",
      type: "article",
      subject: "Hóa hữu cơ",
      thumbnail: "https://placehold.co/300x400/F43F5E/FFFFFF?text=H%C3%B3a+h%E1%BB%A3i+c%C6%A1&font=montserrat",
      author: "TS. Phạm Thị Hương",
      tags: ["Kỹ thuật hóa học", "Bài giảng", "Tài liệu tham khảo"]
    },
    {
      id: "DOC005",
      title: "Kết cấu thép - Hướng dẫn thiết kế và phân tích",
      type: "document",
      subject: "Kết cấu thép",
      thumbnail: "https://placehold.co/300x400/64748B/FFFFFF?text=K%E1%BA%BFt+c%E1%BA%A5u+th%C3%A9p&font=montserrat",
      author: "Nguyễn Văn Hùng (K2019)",
      tags: ["Kỹ thuật xây dựng", "Giáo trình", "Tài liệu tham khảo"]
    },
    {
      id: "OTH001",
      title: "Tổng hợp tài nguyên học tập chung",
      type: "other",
      subject: "Tổng quan",
      thumbnail: "https://placehold.co/300x400/94A3B8/FFFFFF?text=T%E1%BB%95ng+quan+h%E1%BB%8Dc+t%E1%BA%A1p&font=montserrat",
      author: "Bộ sưu tập TutorSystem",
      tags: ["Tổng hợp", "Tài liệu", "Học tập"]
    }
  ],

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
    },
    // Bạn có thể copy thêm nhiều tutor khác
    {
      id: "TUT019",
      // --- DỮ LIỆU TỪ DATACORE (READ-ONLY) ---
      name: "Trương Phước Tiến",
      faculty: "Khoa học ứng dụng", // Khoa
      major: "Toán Ứng Dụng", // Ngành
      rating: 0.0,
      isVerified: true, // Cờ đánh dấu đã xác thực qua DataCore

      // --- DỮ LIỆU DO TUTOR TỰ CẤU HÌNH ---
      subjects: ["Đại số tuyến tính", "Giải tích"],
      targetStudents: "Sinh viên năm 2 cần cải thiện GPA",
      availableTime: ["Sáng Chủ Nhật", "Chiều Thứ 4"],
      avatar: "https://i.pravatar.cc/150?u=TUT019"
    },
  ],

  users: [
    {
      id: "U001",
      name: "Trần Minh Tuấn",
      following: []
    }
  ]
};