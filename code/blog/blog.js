
  
let listCook = [];
let listShopping = [];
let listBaby = [];
let listTricks = [];
let listLife = [];
let listNewInfo = [];
    const listAll = [
        listAllitem = [
          {
            name : "Thác Yang Bay – Khu du lịch sinh thái yên ả giữa lòng Nha Trang",
            category : "TIN TỨC KHÁC",
            des : "Đến Nha Trang mà không muốn tắm biển hay muốn trải nghiệm một hình thức du lịch mới thì mời […]",
            img : "/img/blog/all/new3.png",
            date : "10/07/2023"
          },
          {
            name : "Cách làm trà mãng cầu xiêm giải nhiệt mùa hè cực dễ tại nhà",
            category : "BÍ QUYẾT NẤU ĂN",
            des : "Mãng cầu không chỉ là loại trái cây thơm ngon mà còn kết hợp với trà vô cùng hợp. Vị […]",
            img : "/img/blog/all/all4.png",
            date : "16/6/2023"
          },
          {
            name : "Ăn vải có nóng không? Bí kíp ăn vải không gây nóng",
            category : "SỨC KHỎE & ĐỜI SỐNG",
            des : "Mùa vải đã đến, thật không dễ dàng gì để có thể bỏ qua được vị thơm ngon của trái vải. Có nhiều tin đồn “vải là BHA tự nhiên” vì có tính nóng đẩy mụn mọc lên nhanh. Vậy ăn vải có nóng không? Có cách nào để ăn vải mà không nóng không? Cùng",
            img : "/img/blog/all/life1.png",
            date : "19/01/2023"
          },
        ],
        listCook = [
          
          {
            name : "Bí kíp làm món gỏi gà chôm chôm độc lạ, đổi gió bữa cơm gia đình",
            category : "BÍ QUYẾT NẤU ĂN",
            des : "Gỏi gà chôm chôm là món ăn khai vị ngon miệng, độc là ít ai biết đến. Đây sẽ là […]",
            img : "/img/blog/all/all3.png",
            date : "16/6/2023"
          },
          {
            name : "Cách làm trà mãng cầu xiêm giải nhiệt mùa hè cực dễ tại nhà",
            category : "BÍ QUYẾT NẤU ĂN",
            des : "Mãng cầu không chỉ là loại trái cây thơm ngon mà còn kết hợp với trà vô cùng hợp. Vị […]",
            img : "/img/blog/all/all4.png",
            date : "16/6/2023"
          },
          {
            name : "Cách làm gỏi gà măng cụt hot trend giải nhiệt mùa hè",
            category : "BÍ QUYẾT NẤU ĂN",
            des : "Gỏi gà măng cụt đang là món ăn làm điên đảo cộng đồng đam mê ẩm thực hiện nay. Vì […]",
            img : "/img/blog/all/all5.png",
            date : "1/9/2023"
          },
        ],
        listShopping = [
          {
            name : "Bí kíp săn vali giá 0 đồng cùng VinID, vui hè rộn ràng",
            category : "KINH NGHIỆM MUA SẮM",
            des : "Đi du lịch mà mang túi xách hay balo sẽ rất khó khăn, bất tiện khi di chuyển. Để thỏa...",
            img : "/img/blog/all/shoping2.png",
            date : "30/6/2023"
          },
          {
            name : "Bỏ túi cách săn voucher vé xem phim BHD cực dễ, ưu đãi cực hot",
            category : "KINH NGHIỆM MUA SẮM",
            des : "BHD Star Cineplex là rạp chiếu phim có không gian được đầu tư rất bài bản, chất lượng âm thanh, ",
            img : "/img/blog/all/shoping3.png",
            date : "21/6/2023"
          },
          {
            name : "Hướng dẫn cách chọn nho ngon ngọt, không tẩm hóa chất",
            category : "KINH NGHIỆM MUA SẮM",
            des : "Nho được ví là “siêu trái cây” bởi không chỉ ngon ngọt, thơm mát mà còn đem đến nhiều lợi",
            img : "/img/blog/all/shopping4.png",
            date : "21/6/2023"
          },
        ],
        listBaby = [
          {
            name : "Gợi ý quà Quốc tế Thiếu nhi ngày 1/6 đầy ý nghĩa cho bé",
            category : "MẸ & BÉ",
            des : "Quốc tế Thiếu nhi sắp đến, mà bạn không biết chọn món quà nào cho thành viên nhí nhà mình. […]",
            img : "/img/blog/all/baby2.png",
            date : "21/6/2023"
          },
          {
            name : "Tổng hợp những lời chúc Quốc tế Thiếu nhi 1/6 hay và ý nghĩa dành cho bé",
            category : "MẸ & BÉ",
            des : "Ngày Quốc Tế Thiếu Nhi 1/6 sắp đến rồi, nhân dịp này, VinID gợi ý cho bố mẹ 40 lời […]",
            img : "/img/blog/all/baby3.png",
            date : "30/05/2023"
          },
          {
            name : "Quốc tế Thiếu nhi đi đâu chơi? TOP 10 địa điểm đi chơi ngày 1/6 cực vui",
            category : "MẸ & BÉ",
            des : "Quốc tế thiếu nhi đi đâu chơi đang là từ khóa hot nhất trong thời điểm hiện tại khi mà […]",
            img : "/img/blog/all/baby4.png",
            date : "30/05/2023"
          },
        ],
        listTricks = [
          {
            name : "TOP 5 cách trang trí tết bằng mành tre siêu đẹp",
            category : "MẸO VẶT HAY",
            des : "Vào mỗi năm Tết đến, mành tre mang sự hoài niệm về ngày xưa luôn hiện diện trong mỗi khung […]",
            img : "/img/blog/all/trick2.png",
            date : "19/01/2023"
          },
          {
            name : "TOP 5 cách làm mẹt trang trí Tết siêu đẹp, tạo không gian ngập tràn sắc Xuân",
            category : "MẸO VẶT HAY",
            des : "Đa phần mọi người đều sẽ lựa chọn những cách trang trí Tết như: hoa tươi, câu đối, treo chữ […]",
            img : "/img/blog/all/trick3.png",
            date : "18/01/2023"
          },
          {
            name : "Bỏ túi các cách làm tháp kẹo ngày Tết siêu đẹp, rước tài lộc vào nhà",
            category : "MẸO VẶT HAY",
            des : "Bánh kẹo ngày Tết là thứ không thể thiếu bởi vì người Việt Nam ta đều có phong tục đi […]",
            img : "/img/blog/all/trick4.png",
            date : "19/01/2023"
          },
        ],
        listLife = [
          {
            name : "Bật mí bí mật “uống trà mãng cầu có giảm cân không?",
            category : "SỨC KHỎE & ĐỜI SỐNG",
            des : "Mãng cầu là một trong loại trái cây được yêu thích vào mùa hè, và là loại quả có thành […]",
            img : "/img/blog/all/life2.png",
            date : "21/06/2023"
          },
          {
            name : "Giải đáp: Ăn bơ giảm cân, đúng hay sai?",
            category : "SỨC KHỎE & ĐỜI SỐNG",
            des : "Bơ là một loại trái cây có vị béo đặc trưng, nhưng lại rất hay có mặt trong thực đơn […]",
            img : "/img/blog/all/life3.png",
            date : "21/06/2023"
          },
          {
            name : "Nhổ răng khôn bao nhiêu tiền? Chi phí nhổ răng khôn theo từng trường hợp",
            category : "SỨC KHỎE & ĐỜI SỐNG",
            des : "Răng khôn thường dễ bị mọc lệch, gây nhiễm trùng, đau nhức nếu không được vệ sinh kỹ. Những trường hợp này cần phải nhổ răng khôn",
            img : "/img/blog/all/life4.png",
            date : "19/07/2022"
          },

        ],
        listNewInfo = [
          {
            name : "Trải nghiệm cáp treo VinWonders Nha Trang – Tuyến cáp treo vượt biển dài nhất thế giới",
            category : "TIN TỨC KHÁC",
            des : "Hè này nếu đã lên kế hoạch đi bổ sung vitamin “Sea”, bạn nhất định phải trải nghiệm cảm giác […]",
            img : "/img/blog/all/new2.png",
            date : "10/07/2023"
          },
          {
            name : "Thác Yang Bay – Khu du lịch sinh thái yên ả giữa lòng Nha Trang",
            category : "TIN TỨC KHÁC",
            des : "Đến Nha Trang mà không muốn tắm biển hay muốn trải nghiệm một hình thức du lịch mới thì mời […]",
            img : "/img/blog/all/new3.png",
            date : "10/07/2023"
          },
          {
            name : "Cẩm nang du lịch Cù Lao Chàm dành cho người mới đến Hội An",
            category : "TIN TỨC KHÁC",
            des : "Cù Lao Chàm là một địa danh của Việt Nam đến nay còn giữ được nét hoang sơ của thiên […]",
            img : "/img/blog/all/new4.png",
            date : "05/07/2023"
          },
        ]

    ]

    const listBlogMore = document.querySelector(".list-blog__more")
    function renderBlogMore(items) {
      const itemBlogMore = items.map((item)=> {
        return `
        <li class="item-blog__more col m-4">
          <div class="gwap-img__more">
              <img src="${item.img}" alt="" class="img-blog__more">
          </div>
          <div class="info-blog__more">
              <div class="category-blog">
                  ${item.category}
              </div>
              <h3 class="title-blog more">
                  ${item.name}
              </h3>
              <div class="des-blog more">
                ${item.des}
              </div>
              <div class="date-blog__care black-text"> ${item.date}</div>
          </div>
        </li>          
        `
      })
      listBlogMore.innerHTML = itemBlogMore.join(' ')
    }
    const blogItems = document.querySelectorAll(".link-blog");
    const blogMain = document.querySelectorAll(".blog-main")
    
    blogItems.forEach((blogItem, index) => {
        let itemblog =  listAll[index]
        let itemMain = blogMain[index]
        blogItem.onclick = () => {
          document.querySelector(".blog-main.active").classList.remove("active")
          itemMain.classList.add("active")
          document.querySelector(".link-blog.active").classList.remove("active");
          blogItem.classList.add("active");
          renderBlogMore(itemblog);     
    
        }
        renderBlogMore(listAll[0]);
    })

    const allBlogs = [
      {
        name : "Thác Yang Bay – Khu du lịch sinh thái yên ả giữa lòng Nha Trang",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Đến Nha Trang mà không muốn tắm biển hay muốn trải nghiệm một hình thức du lịch mới thì mời […]",
        img : "/img/blog/all/new3.png",
        date : "10/07/2023"
      },
      {
        name : "Cách làm trà mãng cầu xiêm giải nhiệt mùa hè cực dễ tại nhà",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Mãng cầu không chỉ là loại trái cây thơm ngon mà còn kết hợp với trà vô cùng hợp. Vị […]",
        img : "/img/blog/all/all4.png",
        date : "16/6/2023"
      },
      {
        name : "Ăn vải có nóng không? Bí kíp ăn vải không gây nóng",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Mùa vải đã đến, thật không dễ dàng gì để có thể bỏ qua được vị thơm ngon của trái vải. Có nhiều tin đồn “vải là BHA tự nhiên” vì có tính nóng đẩy mụn mọc lên nhanh. Vậy ăn vải có nóng không? Có cách nào để ăn vải mà không nóng không? Cùng",
        img : "/img/blog/all/life1.png",
        date : "19/01/2023"
      },
      {
        name : "Bí kíp làm món gỏi gà chôm chôm độc lạ, đổi gió bữa cơm gia đình",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Gỏi gà chôm chôm là món ăn khai vị ngon miệng, độc là ít ai biết đến. Đây sẽ là […]",
        img : "/img/blog/all/all3.png",
        date : "16/6/2023"
      },
      {
        name : "Cách làm trà mãng cầu xiêm giải nhiệt mùa hè cực dễ tại nhà",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Mãng cầu không chỉ là loại trái cây thơm ngon mà còn kết hợp với trà vô cùng hợp. Vị […]",
        img : "/img/blog/all/all4.png",
        date : "16/6/2023"
      },
      {
        name : "Cách làm gỏi gà măng cụt hot trend giải nhiệt mùa hè",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Gỏi gà măng cụt đang là món ăn làm điên đảo cộng đồng đam mê ẩm thực hiện nay. Vì […]",
        img : "/img/blog/all/all5.png",
        date : "1/9/2023"
      },
      {
        name : "Bí kíp săn vali giá 0 đồng cùng VinID, vui hè rộn ràng",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Đi du lịch mà mang túi xách hay balo sẽ rất khó khăn, bất tiện khi di chuyển. Để thỏa...",
        img : "/img/blog/all/shoping2.png",
        date : "30/6/2023"
      },
      {
        name : "Bỏ túi cách săn voucher vé xem phim BHD cực dễ, ưu đãi cực hot",
        category : "BLOG - TIN TỨC KHÁC",
        des : "BHD Star Cineplex là rạp chiếu phim có không gian được đầu tư rất bài bản, chất lượng âm thanh, ",
        img : "/img/blog/all/shoping3.png",
        date : "21/6/2023"
      },
      {
        name : "Hướng dẫn cách chọn nho ngon ngọt, không tẩm hóa chất",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Nho được ví là “siêu trái cây” bởi không chỉ ngon ngọt, thơm mát mà còn đem đến nhiều lợi",
        img : "/img/blog/all/shopping4.png",
        date : "21/6/2023"
      },
      {
        name : "Gợi ý quà Quốc tế Thiếu nhi ngày 1/6 đầy ý nghĩa cho bé",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Quốc tế Thiếu nhi sắp đến, mà bạn không biết chọn món quà nào cho thành viên nhí nhà mình. […]",
        img : "/img/blog/all/baby2.png",
        date : "21/6/2023"
      },
      {
        name : "Tổng hợp những lời chúc Quốc tế Thiếu nhi 1/6 hay và ý nghĩa dành cho bé",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Ngày Quốc Tế Thiếu Nhi 1/6 sắp đến rồi, nhân dịp này, VinID gợi ý cho bố mẹ 40 lời […]",
        img : "/img/blog/all/baby3.png",
        date : "30/05/2023"
      },
      {
        name : "Quốc tế Thiếu nhi đi đâu chơi? TOP 10 địa điểm đi chơi ngày 1/6 cực vui",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Quốc tế thiếu nhi đi đâu chơi đang là từ khóa hot nhất trong thời điểm hiện tại khi mà […]",
        img : "/img/blog/all/baby4.png",
        date : "30/05/2023"
      },
      {
        name : "TOP 5 cách trang trí tết bằng mành tre siêu đẹp",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Vào mỗi năm Tết đến, mành tre mang sự hoài niệm về ngày xưa luôn hiện diện trong mỗi khung […]",
        img : "/img/blog/all/trick2.png",
        date : "19/01/2023"
      },
      {
        name : "TOP 5 cách làm mẹt trang trí Tết siêu đẹp, tạo không gian ngập tràn sắc Xuân",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Đa phần mọi người đều sẽ lựa chọn những cách trang trí Tết như: hoa tươi, câu đối, treo chữ […]",
        img : "/img/blog/all/trick3.png",
        date : "18/01/2023"
      },
      {
        name : "Bỏ túi các cách làm tháp kẹo ngày Tết siêu đẹp, rước tài lộc vào nhà",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Bánh kẹo ngày Tết là thứ không thể thiếu bởi vì người Việt Nam ta đều có phong tục đi […]",
        img : "/img/blog/all/trick4.png",
        date : "19/01/2023"
      },
      {
        name : "Bật mí bí mật “uống trà mãng cầu có giảm cân không?",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Mãng cầu là một trong loại trái cây được yêu thích vào mùa hè, và là loại quả có thành […]",
        img : "/img/blog/all/life2.png",
        date : "21/06/2023"
      },
      {
        name : "Giải đáp: Ăn bơ giảm cân, đúng hay sai?",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Bơ là một loại trái cây có vị béo đặc trưng, nhưng lại rất hay có mặt trong thực đơn […]",
        img : "/img/blog/all/life3.png",
        date : "21/06/2023"
      },
      {
        name : "Nhổ răng khôn bao nhiêu tiền? Chi phí nhổ răng khôn theo từng trường hợp",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Răng khôn thường dễ bị mọc lệch, gây nhiễm trùng, đau nhức nếu không được vệ sinh kỹ. Những trường hợp này cần phải nhổ răng khôn",
        img : "/img/blog/all/life4.png",
        date : "19/07/2022"
      },
      {
        name : "Trải nghiệm cáp treo VinWonders Nha Trang – Tuyến cáp treo vượt biển dài nhất thế giới",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Hè này nếu đã lên kế hoạch đi bổ sung vitamin “Sea”, bạn nhất định phải trải nghiệm cảm giác […]",
        img : "/img/blog/all/new2.png",
        date : "10/07/2023"
      },
      {
        name : "Thác Yang Bay – Khu du lịch sinh thái yên ả giữa lòng Nha Trang",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Đến Nha Trang mà không muốn tắm biển hay muốn trải nghiệm một hình thức du lịch mới thì mời […]",
        img : "/img/blog/all/new3.png",
        date : "10/07/2023"
      },
      {
        name : "Cẩm nang du lịch Cù Lao Chàm dành cho người mới đến Hội An",
        category : "BLOG - TIN TỨC KHÁC",
        des : "Cù Lao Chàm là một địa danh của Việt Nam đến nay còn giữ được nét hoang sơ của thiên […]",
        img : "/img/blog/all/new4.png",
        date : "05/07/2023"
      },

    ]
    const listAllBlog = document.querySelector(".list-blog__all")
    const itemAllBlog = allBlogs.map((item) => {
      return `
      <li class="item-blog__all col m-4">
          <div class="gwap-img__blog--care">
              <img src="${item.img}" alt="" class="img-blog__care">
          </div>
          <div class="category-blog__care">
              ${item.category}
          </div>
          <h3 class="title-blog__all">
              ${item.name}
          </h3>
          <div class="des-blog__all">
            ${item.des}
          </div>
          <div class="date-blog__care black-text">${item.date}</div>
      </li>
      
      `
    })
    const itemsPerPage = 9;
  let currentPage = 1;

  function renderBlogItems(startIndex, endIndex) {
    const slicedItems = itemAllBlog.slice(startIndex, endIndex);

    listAllBlog.innerHTML = slicedItems.join('');
  }

  function renderPagination() {
    const totalPages = Math.ceil(allBlogs.length / itemsPerPage);
    const paginationContainer = document.querySelector('.pagination');

    let paginationHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === 1 ? 'active' : '';
      paginationHTML += `<button class="page-number ${isActive}" data-page="${i}">${i}</button>`;
    }

    paginationContainer.innerHTML = paginationHTML;

    const pageButtons = document.querySelectorAll('.page-number');

    pageButtons.forEach((button) => {
      button.addEventListener('click', () => {
        currentPage = parseInt(button.dataset.page);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        renderBlogItems(startIndex, endIndex);
        
        document.querySelector(".page-number.active").classList.remove('active');
        
    
        // Thêm lớp "active" vào nút được nhấp
        button.classList.add('active');

      });
    });
    
  }
  const prevButton = document.querySelector('.prev-pagination');
  const nextButton = document.querySelector('.next-pagination');
  function updatePagination() {
    console.log(prevButton,nextButton);
  
    prevButton.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        updateActiveClass()
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        renderBlogItems(startIndex, endIndex);
      }
    };
  
    nextButton.onclick= () => {
      const totalPages = Math.ceil(allBlogs.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        updateActiveClass()
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        renderBlogItems(startIndex, endIndex);
      }
    };
    const pageButtons = document.querySelectorAll('.page-number');

    function updateActiveClass() {
      pageButtons.forEach((button) => {
        button.classList.remove('active');
        if (parseInt(button.dataset.page) === currentPage) {
          button.classList.add('active');
        }
      });
    }
}
  
  // Hiển thị ban đầu
  const startIndex = 0;
  const endIndex = itemsPerPage;
  renderBlogItems(startIndex, endIndex);
  renderPagination();
  updatePagination();

 const listBlogCare = [
  {
    name : "3 cách nấu canh chua cá hú ngon chuẩn vị miền Tây",
    category : "BÍ QUYẾT NẤU ĂN",
    des : "Canh chua là món canh quốc dân đặc biệt đối với người miền Nam, canh được kết hợp với nhiều […]",
    img : "/img/blog/care/care2.png",
    date : "11/04/2023"
  },
  {
    name : "[TỔNG HỢP] Khóa học Tiếng Anh online cho trẻ em được đánh giá tốt nhất hiện nay",
    category : "MẸ & BÉ",
    des : "Khóa học Tiếng Anh online cho trẻ em đang là vấn đề được rất nhiều bậc phụ huynh quan tâm, nhất là trong thời đại 4.0. Cùng VinID tham khảo bài viết sau đây để biết các khoá học Tiếng Anh đang được đánh giá tốt nhất hiện nay nhé.",
    img : "/img/blog/care/care3.png",
    date : "11/04/2023"
  },
  {
    name : "Bí kíp cách chọn dưa lê ngon ngọt, giòn thơm, thanh mát",
    category : "MẸO VẶT HAY",
    des : "Dưa lê có vị ngọt thanh, tươi mát tự nhiên nên được nhiều người tiêu dùng ưa thích lựa chọn […]",
    img : "/img/blog/care/care4.png",
    date : "11/04/2023"
  },
  {
    name : "Ăn mận có nổi mụn không? Một số mẹo hay giúp ăn mận mà không lo nổi mụn",
    category : "SỨC KHỎE & ĐỜI SỐNG",
    des : "Mận là đặc sản của rừng núi Tây Bắc với hương vị chua ngọt giòn giòn, chấm cùng muối tôm rất hấp dẫn. Vậy ăn mận có nổi mụn không? Tìm hiểu ngay câu trả lời trong bài viết này cùng VinID cũng như một số mẹo hay để ăn mận mà không lo nổi mụn, nóng trong nhé!",
    img : "/img/blog/care/care5.png",
    date : "11/04/2023"
  },
  {
    name : "Bật mí 13 mẹo khử mùi tủ lạnh đơn giản, hữu hiệu ngay tại nhà",
    category : "MẸO VẶT HAY",
    des : "ủ lạnh là vật bất ly thân trong mọi căn bếp gia đình, được sử dụng với tần suất liên tục. Tuy nhiên, sau quá trình sử dụng lâu dài, tủ lạnh thường bị ám mùi khó chịu bởi đồ ăn tươi sống hay những đồ ăn nặng mùi khó chịu. Đọc bài viết dưới đây của VinID để khám phá ngay những mẹo khử mùi tủ lạnh cực hữu hiệu!",
    img : "/img/blog/care/care6.png",
    date : "11/04/2023"
  },
  {
    name : "Trải nghiệm cáp treo VinWonders Nha Trang – Tuyến cáp treo vượt biển dài nhất thế giới",
    category : "TIN TỨC KHÁC",
    des : "Hè này nếu đã lên kế hoạch đi bổ sung vitamin “Sea”, bạn nhất định phải trải nghiệm cảm giác […]",
    img : "/img/blog/all/new2.png",
    date : "10/07/2023"
  },

 ]   

 const ulBlogCares = document.querySelector(".list-blog__care")
 const itemBlogCare = listBlogCare.map((item)=> {
    return `
    <li class="item-blog__care col m-4">
      <div class="gwap-img__blog--care">
          <img src="${item.img}" alt="" class="img-blog__care">
      </div>
      <div class="category-blog__care">
          ${item.category}
      </div>
      <h3 class="title-blog__care">
          ${item.name} 
      </h3>
      <div class="des-blog__care">
          ${item.des}
      </div>
      <div class="date-blog__care"> ${item.date}</div>
    </li>
    
    `
 })
 ulBlogCares.innerHTML = itemBlogCare.join(' ')
 const btnNext = document.querySelector(".next-btn__blog");
const btnPrev = document.querySelector(".prev-btn__blog"); 
const itemBlogWith = document.querySelector(".item-blog__care").offsetWidth;
const listBlogWith = document.querySelector(".list-blog__care");

btnNext.onclick = () => {
    listBlogWith.scrollLeft += itemBlogWith;
    console.log(listBlogWith.offsetWidth );
  };
  
  btnPrev.onclick = () => {
    listBlogWith.scrollLeft -= itemBlogWith;
  };
  