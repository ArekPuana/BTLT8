$(function() {
  $("#muave").click(function() {
    // Lấy dữ liệu từ form
    let ngayChieu = $("#ngaychieu").val();
    let phim = $("#phim").val();
    let suatChieu = $("#suatchieu").val();
    let phongChieu = $("#phongchieu").val();
    let choNgoi = $("#cho").val();

    // Kiểm tra nhập đầy đủ
    if (!ngayChieu || phim === "Phim" || suatChieu === "Suất chiếu" || phongChieu === "Phòng chiếu") {
      alert("⚠️ Vui lòng chọn đầy đủ thông tin trước khi mua vé!");
      return;
    }

    // Lấy giá suất chiếu
    let giaCoBan = 0;
    if (suatChieu.includes("9h")) giaCoBan = 45000;
    else if (suatChieu.includes("13h")) giaCoBan = 45000;
    else if (suatChieu.includes("17h")) giaCoBan = 55000;
    else if (suatChieu.includes("22h")) giaCoBan = 35000;

    // Lấy hệ số phòng chiếu
    let heSo = 1;
    if (phongChieu.includes("Đồng")) heSo = 1.0;
    else if (phongChieu.includes("Bạc")) heSo = 1.2;
    else if (phongChieu.includes("Vàng")) heSo = 1.5;
    else if (phongChieu.includes("Kim Cương")) heSo = 2.0;

    // Tính giá vé cho ghế
    let giaVe = giaCoBan * heSo;

    // In ra kết quả trong span#result
    let html = `
		<table border="1" cellpadding="5" style="margin-top:10px;">
        <caption><b>Thông tin vé</b></caption>
        <tr><td>Ngày chiếu</td><td>${ngayChieu}</td></tr>
        <tr><td>Phim</td><td>${phim}</td></tr>
        <tr><td>Suất chiếu</td><td>${suatChieu.split("│")[0]}</td></tr>
        <tr><td>Phòng chiếu</td><td>${phongChieu.split("│")[0]}</td></tr>
        <tr><td>Ghế</td><td>${choNgoi}</td></tr>
        <tr><td>Giá vé</td><td>${giaVe.toLocaleString()} đ</td></tr>
      </table>
    `;

    $("#result").html(html);
  });
});
