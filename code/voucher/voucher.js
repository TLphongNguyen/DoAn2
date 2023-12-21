const listBtnVoucher = document.querySelectorAll(".item-option__text") 
console.log(listBtnVoucher);

let listFood = [
  
]
let listDv = [
  
]
let listHot = [
  
]
let listTT = [
  
]
let listMore = [
  
]
let listBeatyful = [
  
]
let allVoucher = [

]
const serviceListitem = [
  allVoucher = [
    {
        img : '/img/voucher/all/all1.png',
        sale : 'Tặng áo thun',
        title : ' [Toàn quốc] Coolmate tặng 01 áo thun trị giá 199,000đ',
        description : ' Chi tiết chương trình Voucher tặng 01 áo thun trị giá 199,000đ cho tất cả hóa đơn từ 359,000đ trở lên tại Coolmate. Thời gian áp dụng:…'
    },
    {
        img : '/img/voucher/all/all2.png',
        sale : 'Tặng dịch vụ',
        title : ' [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ',
        description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…'
    },
    {
        img : '/img/voucher/amthuc/food3.png',
        sale : 'chỉ 1,000đ',
        title : '  [Hà Nội] Som Tum Thai giảm 100,000đ Món Thái ngon chuẩn vị  ',
        description : '  Chi tiết chương trình Voucher giảm 100,000đ cho hóa đơn từ 500,000đ khi sử dụng dịch vụ tại nhà hàng Som Tum Thai - chi nhánh Lotte…'
      },
      {
        img : '/img/voucher/dichvu/dichvu1.png',
        sale : 'Giảm tới 550,000đ',
        title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
        description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
      },
      {
        img : '/img/voucher/dichvu/dichvu2.png',
        sale : 'Tặng dịch vụ',
        title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
        description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
      },
      {
        img : '/img/voucher/hot/hot3.png',
        sale : 'Giảm đến 27% + Hoàn tiền',
        title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
        description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
      },
      {
        img : '/img/voucher/hot/hot1.png',
        sale : 'Giảm tới 550,000đ',
        title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
        description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
      },
      {
        img : '/img/voucher/thoitrang/thoitrang4.png',
        sale : 'Giảm tới 550,000đ',
        title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
        description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
      },
      {
        img : '/img/voucher/thoitrang/thoitrang1.png',
        sale : 'Tặng dịch vụ',
        title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
        description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
      },
  ],
  listFood = [
    {
      img : '/img/voucher/amthuc/food1.png',
      sale : 'chỉ 1,000đ',
      title : ' [Toàn quốc] Trà sen vàng Highlands Coffee size M chỉ 1,000đ ',
      description : ' Chi tiết chương trình Voucher mua Trà sen vàng size M chỉ 1,000đ áp dụng khi mua đơn bất kỳ từ 50,000đ trở lên. *Khách hàng có…'
    },
    {
      img : '/img/voucher/amthuc/food2.png',
      sale : 'Giảm 20,000đ',
      title : '  [Hà Nội – Nghệ An] Giảm 20,000đ đồ uống Phúc Long siêu chất ',
      description : '  Chi tiết chương trình Voucher giảm 20,000đ cho hóa đơn từ 55,000đ trở lên áp dụng tại 18 chi nhánh Phúc Long ở Hà Nội và Nghệ…'
    },
    {
      img : '/img/voucher/amthuc/food3.png',
      sale : 'chỉ 1,000đ',
      title : '  [Hà Nội] Som Tum Thai giảm 100,000đ Món Thái ngon chuẩn vị  ',
      description : '  Chi tiết chương trình Voucher giảm 100,000đ cho hóa đơn từ 500,000đ khi sử dụng dịch vụ tại nhà hàng Som Tum Thai - chi nhánh Lotte…'
    },
    {
      img : '/img/voucher/amthuc/food4.png',
      sale : 'chỉ 1,000đ',
      title : '  [TP. HCM] Phở 24 giảm 40,000đ ăn tại cửa hàng  ',
      description : '  Chi tiết chương trình Voucher giảm 40,000đ cho hóa đơn từ 150,000đ áp dụng khi ăn tại Cửa hàng Phở 24. Thời gian áp dụng: Từ 26/05/2023…'
    },
    {
      img : '/img/voucher/amthuc/food5.png',
      sale : 'chỉ 1,000đ',
      title : '  [Toàn quốc] Mua 02 tính tiền 01 tại Highlands Coffee  ',
      description : '  Chi tiết chương trình Voucher áp dụng khi mua combo 02 đồ uống Highlands: 01 ly cỡ lớn (Cà Phê Truyền Thống, Trà, Freeze và PhinDi'
    },
    {
      img : '/img/voucher/amthuc/food6.png',
      sale : 'chỉ 1,000đ',
      title : '  [Hà Nội] Botejyu giảm 50,000đ Ẩm thực Nhật Bản nổi tiếng ',
      description : '  Chi tiết chương trình Giảm 50,000đ cho hóa đơn từ 300,000đ trở lên tại nhà hàng Botejyu, thương hiệu Nhật Bản khởi sinh từ Osaka. Thời gian…'
    },
    {
      img : '/img/voucher/amthuc/food7.png',
      sale : 'chỉ 1,000đ',
      title : ' [Toàn quốc]  [Hà Nội] Nhà hàng Ruby giảm 20% Set Valentine’s Special Menu  ',
      description : '  Chi tiết chương trình Giảm 20% Set Valentine’s Special Menu tại Nhà hàng Ruby (Giá gốc: 2,500,000đ/set/02 người chỉ còn 2,000,000đ/set/02 người). Thời gian áp dụng: 14/02/2023. Cách…'
    },
    {
      img : '/img/voucher/amthuc/food8.png',
      sale : 'chỉ 1,000đ',
      title : ' [Toàn quốc] Trà sen vàng Highlands Coffee size M chỉ 1,000đ ',
      description : '  Chi tiết chương trình Voucher giảm 50% cho khách hàng khi mua Hạt cà phê Espresso Robusta của Milano Coffee gói 250g với giá 25,000đ. Thời gian…'
    },
  ],
  listDv = [
    {
      img : '/img/voucher/dichvu/dichvu1.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/dichvu/dichvu2.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/dichvu/dichvu3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
    {
      img : '/img/voucher/dichvu/dichvu1.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/dichvu/dichvu2.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/dichvu/dichvu3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
  ],
  listHot = [
    {
      img : '/img/voucher/hot/hot1.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/hot/hot2.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/hot/hot3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
    {
      img : '/img/voucher/hot/hot1.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/hot/hot2.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/hot/hot3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
  ],
  listTT = [
    {
      img : '/img/voucher/thoitrang/thoitrang1.png',
      sale : 'Giảm đến 12% + 2%',
      title : '   [Toàn quốc] DOJI giảm đến 12% + Độc quyền ưu đãi thêm 2% ',
      description : '   Chi tiết chương trình Voucher ưu đãi cho khách hàng khi mua Trang sức tại DOJI: - Giảm 10%: Trang sức kim cương, Trang sức Fashion, Trang…'
    },
    {
      img : '/img/voucher/thoitrang/thoitrang2.png',
      sale : 'Tặng dịch vụ',
      title : '    [Miền Bắc] Giảm 10% khi mua trang sức vàng PNJ và đồng hồ  ',
      description : '  Chi tiết chương trình Voucher giảm 10% tối đa 850,000đ khi mua trang sức Vàng PNJ/Platinum PNJ (không bao gồm trang sức Kim cương, trang sức Vỏ…  '
    },
    {
      img : '/img/voucher/thoitrang/thoitrang3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '    [Toàn quốc] DOJI giảm đến 25% Trang sức cao cấp   ',
      description : '    Chi tiết chương trình Giảm đến 25% khi mua Trang sức cao cấp DOJI: - Giảm 5% Trang sức mẫu mã Ý - Hàn Quốc, Trang sức…'
    },
    {
      img : '/img/voucher/thoitrang/thoitrang4.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/thoitrang/thoitrang1.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/thoitrang/thoitrang2.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
  ],
  listMore = [
    {
      img : '/img/voucher/more/more1.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/more/more2.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/more/more3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
    {
      img : '/img/voucher/more/more1.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/more/more2.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/more/more3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
  ],
  listBeatyful = [
    {
      img : '/img/voucher/dichvu/dichvu1.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/amthuc/food1.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/dichvu/dichvu3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
    {
      img : '/img/voucher/thoitrang/thoitrang3.png',
      sale : 'Giảm tới 550,000đ',
      title : '  [Toàn quốc] Giảm tới 550,000đ Học tiếng Anh ELSA Pro ',
      description : '  Chi tiết chương trình Voucher giảm giá áp dụng khi đăng ký khóa học ELSA Pro: - Khóa ELSA Pro Trọn đời chỉ còn 1,645,000đ (Nguyên giá:…'
    },
    {
      img : '/img/voucher/hot/hot2.png',
      sale : 'Tặng dịch vụ',
      title : '   [Toàn quốc] bTaskee tặng dịch vụ giúp việc tại nhà 01 giờ ',
      description : ' Chi tiết chương trình Voucher ưu đãi Tặng 01 giờ dịch vụ dọn nhà trên App bTaskee. *01 giờ dịch vụ có giá 80,000đ (bTaskee yêu cầu…   '
    },
    {
      img : '/img/voucher/dichvu/dichvu3.png',
      sale : 'Giảm đến 27% + Hoàn tiền',
      title : '   [Toàn quốc] GHTK giảm đến 27% + hoàn tiền tới 100,000đ  ',
      description : '   Chi tiết chương trình Voucher giảm phí giao hàng lên đến 27% và hoàn tiền về ví trong 24 giờ, áp dụng khi mua gói giao hàng:…'
    },
  ]

]
const listService = document.querySelector('.list-voucher__bottom')
function render(itemServices) {
  const itemService = itemServices.map((food) =>{
    return ` 
    <li class="item-voucher col m-3">
      <a href="#" class="voucher-img">
        <img src="${food.img}" alt="">
      </a>
      <span class="voucher-sale">${food.sale}</span>
      <a href="" class="title-link">
        ${food.title}
      
      </a>
      <p class="voucher-des">
        ${food.description}
      </p>
    </li>
    `
  })
  listService.innerHTML = itemService.join(" ")
  
  

}
listBtnVoucher.forEach((item,index) => {
    let itemServices = serviceListitem[index]
    item.onclick = () => {
        document.querySelector(".item-option__text.active").classList.remove("active");
        item.classList.add("active");
        render(itemServices)
    }
    render(serviceListitem[0])
})


