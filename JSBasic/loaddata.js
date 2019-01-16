    var getdata = document.getElementById("retrievedata");
    // Khởi tạo một biến để trỏ vào file HTML
    var btn = document.getElementById("btn");
    // Khởi tạo một biến btn để khi click vào thì sẽ ra các nội dung trong file json
    btn.addEventListener("click", function()
    {
    // Đính kèm sự kiện khi nhấn vào nút "click".
        var request = new XMLHttpRequest();
    // Khởi tạo Object Request, thiết lập một sự kết nối với file data, gửi và nhận data.
    request.open('GET', 'data.json');
    // Cài đặt thông tin Request với GET và lấy dữ liệu từ server còn POST là đưa dữ liệu lên server.ư
    // Với data.json là file muốn lấy dữ liệu về.
    // Sumary: Đến file data.json và lấy dữ liệu về.
    request.onload = function()
    {
    // Thể hiện data đã làm gì ở đây, ĐƯỢC LOAD.
        var ourData = JSON.parse(request.responseText);
    // Khởi tạo một biến ourData và gắn request vào ourData đồng thời CHUYỂN ĐỐI TƯỢNG VĂN BẢN THÀNH ĐỐI TƯỢNG JAVASCRIPT. 
        let point = ourData.datajson;
    // Khởi tạo thêm một biến point để trỏ tới, vì k thể trỏ cùng 1 lúc 3 nhân tố.
        renderHTML(point);
    }
    request.send();
    });

    function renderHTML(data)
    {
        var htmlString = "";

        for(i = 0; i < data.length; i++)
        {
            htmlString += "<p>" + data[i].name + "<br>" + data[i].mean +".</p>"
        }
        getdata.insertAdjacentHTML('beforeend', htmlString);
    }
    
    