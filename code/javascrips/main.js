

const imgItems = document.querySelectorAll('.img-item')
const gwapImg = document.querySelector('.list-img')
const dot = document.querySelectorAll('.dotItem')
const btnNext = document.querySelector('.button-next')
const btnPrev = document.querySelector('.button-prev')


let lengItem = imgItems.length-1;







// slider



btnNext.onclick = () => {
  
  if(slinerNumber + 1 > lengItem) {
    slinerNumber = 0
  }else {
    slinerNumber = slinerNumber + 1
    
  }
  reLoadSliner();
  
}
const AutoSliner = setInterval(() => {
  btnNext.click();
},6000)
btnPrev.onclick = () => {
  
  if(slinerNumber - 1 < lengItem) {
    slinerNumber = 0
  }else {
    slinerNumber = slinerNumber -1
    
  }
  reLoadSliner();
  
}
let slinerNumber = 0
function reLoadSliner() {
  let checkLetf = imgItems[slinerNumber].offsetLeft
  gwapImg.style.left = -checkLetf + "px"
  let dotActive = document.querySelector('.dotItem.dotItem-active')
  dotActive.classList.remove('dotItem-active')
  dot[slinerNumber].classList.add('dotItem-active')
  clearInterval(AutoSliner)
  
  
  setInterval(AutoSliner,6000)

  

}
dot.forEach((li, index) => {
  li.addEventListener('click', ()=> {
    slinerNumber = index;
    reLoadSliner();

  })
})

const statics = [
  {
    img: '/img/icon/icon1.png',
    number : '11.000.000+',
    info : 'khách hàng tin dùng',
    des : 'Cung cấp nhiều tiện ích cho cuộc sống hằng ngày của người Việt.'  
  },
  {
    img: '/img/icon/icon2.png',
    number : '100.000+',
    info : 'khách hàng tin dùng',
    des : 'Thanh toán không tiền mặt nhanh chóng, bảo mật tại nhiều điểm thanh toán trong cả nước.'  
  },
  {
    img: '/img/icon/icon3.png',
    number :'' ,
    info : 'Tích & tiêu điểm dễ dàng',
    des : 'Tích và tiêu điểm VinID khi đi siêu thị, bệnh viện, du lịch, mua sắm tại các đối tác của VinID.'  
  },
  {
    img: '/img/icon/icon4.png',
    number : '',
    info : 'Chuyển tiền miễn phí',
    des : 'Chuyển và nhận tiền miễn phí mọi lúc mọi nơi.'  
  },
  {
    img: '/img/icon/icon5.png',
    number : '',
    info : 'Hàng ngàn voucher miễn phí',
    des : 'Đáp ứng mọi nhu cầu ăn uống, mua sắm, giải trí của khách hàng.'  
  }
]
const listStatic = document.querySelector('.static-list')
const htmls = statics.map((static)=> {
  return `
      <li class="static-item">
        <img src="${static.img}" alt="" class="static-icon">
        <div class="static-decr">
            <div class="static-number">${static.number}</div>
            <div class="static-info">${static.info}</div>

        </div>
        <div class = "icon-static"></div>
      </li>
  `
})
listStatic.innerHTML = htmls.join(" ")


const services = [
  {
    img: "/img/service/img1.png",
    title :'Tích và tiêu điểm',
    icon: "/img/service/icon1.png",
    description :' Dễ dàng tích và tiêu điểm tại hệ thống VinMart, VinMart+ và nhiều đối tác của VinID'

  },
  {
    img: "/img/service/img2.png",
    title :'Ví điện tử',
    icon: "/img/service/icon2.png",
    description :' Miễn phí chuyển/ nhận tiền mọi lúc mọi nơi, an toàn bảo mật đạt chuẩn quốc tế.'

  },
  {
    img: "/img/service/img3.png",
    title :'Mua sắm trực tuyến',
    icon: "/img/service/icon3.png",
    description :' Đi chợ, mua sắm, đặt đồ ăn uống online và nhận hàng tiện lợi ngay tại nhà.'

  },
  {
    img: "/img/service/img4.png",
    title :'Voucher - Đổi thưởng',
    icon: "/img/service/icon4.png",
    description :' Hàng ngàn voucher ăn uống, mua sắm, giải trí,… miễn phí hoặc đổi bằng điểm VinID.'

  },
  {
    img: "/img/service/img5.png",
    title :'Thanh toán hóa đơn',
    icon: "/img/service/icon5.png",
    description :' Không sợ trễ hạn, thanh toán hoá đơn điện nước, internet ngay tại nhà với tính năng thanh toán tự động.'

  },
  {
    img: "/img/service/img6.png",
    title :'Giải trí',
    icon: "/img/service/icon6.png",
    description :' Hàng loạt sự kiện giải trí, âm nhạc và thể thao độc quyển. Mua vé trên app khỏi lo xếp hàng.'

  },
  {
    img: "/img/service/img7.png",
    title :'Thanh toán điện thoại',
    icon: "/img/service/icon7.png",
    description :' Cài đặt tính năng nạp tiền điện thoại tự động để không bỏ lỡ khuyến mãi nhà mạng.'

  },
  {
    img: "/img/service/img8.png",
    title :'Hoạt động cộng đồng',
    icon: "/img/service/icon8.png",
    description :' Chung tay vì cộng đồng với nhiều hoạt động thiết thực và đa dạng hình thức quyên góp.'

  },
  
]
const serviceList = document.querySelector(".sliner-list")
const serviceItem = services.map((service,index) => {
  return `
    <li class="sliner-item">
        <div class="sliner-banner">
            <img src="${service.img}" alt="" class="banner-img">
        </div>
        <div class="sliner-inner">
            <div class="sliner-icon">
                <img src="${service.icon}" alt="">
            </div>
            <div class="sliner-content">
                <h3 class="content-title">${service.title}</h3>
                <p class="sliner-text">${service.description}</p>
            </div>
        </div>
    </li>
  `
})
serviceList.innerHTML = serviceItem.join(' ')


let serviceIndex = 0
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
const serviceListitem = [
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




const listService = document.querySelector('.list-voucher')
function render(itemServices) {
  const itemService = itemServices.map((food) =>{
    return ` 
    <li class="item-voucher">
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
  console.log(itemService)
  

}
// render lai list item
const listCategory = document.querySelectorAll('.item-category')
listCategory.forEach((itemcategory,index) => {
  console.log(index)
  let itemServices = serviceListitem[index]
  itemcategory.onclick = () => {
  console.log("new ",index)

    document.querySelector('.item-category.active-item').classList.remove('active-item');
    itemcategory.classList.add('active-item')
    render(itemServices)
  }
  console.log(itemServices)
  render(serviceListitem[0])
  
})

const prevService = document.querySelector('.prev-btn')
const nextService = document.querySelector('.next-btn')
const listForm = document.querySelector('.list-voucher')
const widthItem = document.querySelector('.item-voucher').offsetWidth +20
  nextService.onclick = () => {
        listForm.scrollLeft += widthItem;
        checkAndResetScroll();
    };

    prevService.onclick = () => {
        listForm.scrollLeft -= widthItem;
        checkAndResetScroll();
    };

    function checkAndResetScroll() {
        if (listForm.scrollLeft >= listForm.scrollWidth - listForm.offsetWidth) {
            // Nếu đang cuộn tới cuối, reset về phần tử đầu tiên
            listForm.scrollLeft = 0;
        } else if (listForm.scrollLeft <= 0) {
            // Nếu đang cuộn tới đầu, reset về phần tử cuối cùng
            listForm.scrollLeft = listForm.scrollWidth - listForm.offsetWidth;
        }
    }








//mobile







     


