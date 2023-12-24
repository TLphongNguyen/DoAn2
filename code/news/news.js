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
  const listAllBlog = document.querySelector(".list-new__more")
  const itemAllBlog = allBlogs.map((item) => {
    return `
        <li class="blog-main active">
            <div class="gwap-new__more col m-6">
                <img src="${item.img}" alt="" class="img-new__more">
            </div>
            <div class="info-new__more">
                <div class="category-new__more">${item.category}</div>
                <h2 class="title-new__more">
                    ${item.name}
                </h2>
                <div class="des-new__more">
                    ${item.des}
                </div>
                <div class="date-new__more">
                    ${item.date}
                </div>
            </div>
        </li>
    
    `
  })
  const itemsPerPage = 4;
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
const startIndex = 0;
const endIndex = itemsPerPage;
renderBlogItems(startIndex, endIndex);
renderPagination();
updatePagination();

const blogItems = document.querySelectorAll(".link-blog");
    const blogMain = document.querySelectorAll(".blog-main")
    
    blogItems.forEach((blogItem, index) => {

        blogItem.onclick = () => {

          
          document.querySelector(".link-blog.active").classList.remove("active");
          blogItem.classList.add("active");
            
    
        }
       
    })