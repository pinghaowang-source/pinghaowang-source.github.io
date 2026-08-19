(() => {
  'use strict';

  const locales = {
    vi: {
      title: 'Quyền riêng tư & phân tích',
      intro: 'Cách SCOVION xử lý dữ liệu phân tích trang web, bao gồm bản ghi IP, và các lựa chọn dành cho bạn.',
      asideTitle: 'Phân tích trang web',
      asideCopy: 'Bạn có thể xem lại hoặc thay đổi lựa chọn phân tích của mình bất cứ lúc nào trên thiết bị này.',
      settingsLabel: 'Cài đặt phân tích',
      cards: [
        ['Dữ liệu chúng tôi thu thập', ['Chỉ sau khi bạn cho phép phân tích, dịch vụ phân tích bên thứ nhất của chúng tôi mới ghi lại trang hoặc sản phẩm đã xem, các liên kết và nút hành động đã chọn, ngôn ngữ trang web, loại thiết bị, tên miền của trang web giới thiệu, mã định danh phiên ngẫu nhiên, quốc gia ước tính và địa chỉ IP mà dịch vụ nhận được.', 'Thông qua hoạt động phân tích, chúng tôi không thu thập các trường trong biểu mẫu liên hệ, tên, địa chỉ email, số điện thoại, nội dung yêu cầu hoặc thông tin y tế.']],
        ['Mục đích sử dụng', ['Chúng tôi sử dụng các bản ghi này để ước tính số lượng khách truy cập, tìm hiểu những trang và sản phẩm hữu ích, tính tỷ lệ nhấp của từng trang, phát hiện hành vi lạm dụng kỹ thuật và cải thiện trải nghiệm trên trang web.']],
        ['Thời gian lưu giữ', ['Các bản ghi IP có thể nhận dạng và từng sự kiện phân tích được lưu giữ tối đa 30 ngày. Dữ liệu tổng hợp trang hằng ngày đã ẩn danh có thể được lưu giữ tối đa 13 tháng để chúng tôi so sánh hiệu quả hoạt động dài hạn của trang web.']],
        ['Quyền truy cập và bảo mật', ['Dữ liệu phân tích được xử lý qua hạ tầng Cloudflare được bảo vệ. Quyền truy cập chỉ dành cho quản trị viên được ủy quyền. Theo mặc định, địa chỉ IP được che trong bảng điều khiển; việc hiển thị địa chỉ đầy đủ là một thao tác riêng biệt và được ghi nhận để kiểm tra.']],
        ['Lựa chọn của bạn', ['Bạn có thể cho phép, từ chối hoặc thay đổi lựa chọn phân tích sau này trên thiết bị này. Chúng tôi cũng tôn trọng các tín hiệu quyền riêng tư được trình duyệt hỗ trợ. Việc từ chối phân tích không ảnh hưởng đến quyền truy cập trang web hoặc biểu mẫu liên hệ.']]
      ]
    },
    id: {
      title: 'Privasi & analitik',
      intro: 'Cara SCOVION menangani data analitik situs web, termasuk catatan IP, serta pilihan yang tersedia bagi Anda.',
      asideTitle: 'Analitik situs web',
      asideCopy: 'Anda dapat meninjau atau mengubah pilihan analitik kapan saja di perangkat ini.',
      settingsLabel: 'Pengaturan analitik',
      cards: [
        ['Data yang kami kumpulkan', ['Hanya setelah Anda mengizinkan analitik, layanan analitik pihak pertama kami mencatat halaman atau produk yang dilihat, tautan dan tombol tindakan yang dipilih, bahasa situs, kategori perangkat, domain situs web perujuk, pengenal sesi acak, perkiraan negara, dan alamat IP yang diterima oleh layanan.', 'Melalui analitik, kami tidak mengumpulkan kolom formulir kontak, nama, alamat email, nomor telepon, teks pertanyaan, atau informasi medis.']],
        ['Tujuan penggunaan', ['Kami menggunakan catatan ini untuk memperkirakan jumlah pengunjung, memahami halaman dan produk yang berguna, menghitung rasio klik-tayang halaman, mendeteksi penyalahgunaan teknis, dan meningkatkan pengalaman situs web.']],
        ['Masa penyimpanan', ['Catatan IP yang dapat diidentifikasi dan setiap peristiwa analitik disimpan hingga 30 hari. Agregat halaman harian yang anonim dapat disimpan hingga 13 bulan agar kami dapat membandingkan kinerja situs web dalam jangka panjang.']],
        ['Akses dan keamanan', ['Data analitik ditangani melalui infrastruktur Cloudflare yang terlindungi. Akses dibatasi bagi administrator yang berwenang. Alamat IP disamarkan secara default di dasbor; menampilkan alamat lengkap merupakan tindakan terpisah yang dicatat untuk audit.']],
        ['Pilihan Anda', ['Anda dapat mengizinkan, menolak, atau mengubah pilihan analitik di kemudian hari pada perangkat ini. Kami juga menghormati sinyal privasi browser yang didukung. Menolak analitik tidak memengaruhi akses ke situs web atau formulir kontak.']]
      ]
    },
    fil: {
      title: 'Privacy at analytics',
      intro: 'Kung paano pinangangasiwaan ng SCOVION ang data ng analytics sa website, kabilang ang mga tala ng IP, at ang mga pagpipiliang available sa iyo.',
      asideTitle: 'Analytics ng website',
      asideCopy: 'Maaari mong suriin o baguhin anumang oras ang iyong pagpili sa analytics sa device na ito.',
      settingsLabel: 'Mga setting ng analytics',
      cards: [
        ['Data na kinokolekta namin', ['Pagkatapos mo lamang payagan ang analytics, itatala ng aming first-party na serbisyo ng analytics ang pahina o produktong tiningnan, mga piniling link at action button, wika ng site, kategorya ng device, domain ng website na pinanggalingan, random na session identifier, tinatayang bansa, at IP address na natanggap ng serbisyo.', 'Hindi namin kinokolekta sa pamamagitan ng analytics ang mga field sa contact form, pangalan, email address, numero ng telepono, teksto ng pagtatanong, o impormasyong medikal.']],
        ['Bakit namin ito ginagamit', ['Ginagamit namin ang mga talang ito upang tantiyahin ang bilang ng mga bisita, maunawaan kung aling mga pahina at produkto ang kapaki-pakinabang, kalkulahin ang click-through rate ng pahina, matukoy ang teknikal na pang-aabuso, at mapahusay ang karanasan sa website.']],
        ['Panahon ng pagpapanatili', ['Ang makikilalang mga tala ng IP at bawat analytics event ay pinananatili nang hanggang 30 araw. Ang anonymous na pang-araw-araw na pinagsama-samang data ng pahina ay maaaring panatilihin nang hanggang 13 buwan upang maihambing namin ang pangmatagalang performance ng website.']],
        ['Access at seguridad', ['Pinangangasiwaan ang data ng analytics sa pamamagitan ng protektadong imprastraktura ng Cloudflare. Limitado ang access sa mga awtorisadong administrator. Naka-mask bilang default ang mga IP address sa dashboard; ang pagpapakita ng buong address ay isang hiwalay na pagkilos na itinatala para sa audit.']],
        ['Ang iyong pagpili', ['Maaari mong payagan, tanggihan, o baguhin sa ibang pagkakataon ang analytics sa device na ito. Iginagalang din namin ang mga suportadong signal ng privacy ng browser. Ang pagtanggi sa analytics ay hindi nakaaapekto sa pag-access sa website o contact form.']]
      ]
    },
    lo: {
      title: 'ຄວາມເປັນສ່ວນຕົວ ແລະ ການວິເຄາະ',
      intro: 'ວິທີທີ່ SCOVION ຈັດການຂໍ້ມູນການວິເຄາະເວັບໄຊຕ໌ ລວມທັງບັນທຶກ IP ແລະ ທາງເລືອກທີ່ມີໃຫ້ທ່ານ.',
      asideTitle: 'ການວິເຄາະເວັບໄຊຕ໌',
      asideCopy: 'ທ່ານສາມາດກວດເບິ່ງ ຫຼື ປ່ຽນຕົວເລືອກການວິເຄາະຂອງທ່ານໄດ້ທຸກເວລາໃນອຸປະກອນນີ້.',
      settingsLabel: 'ການຕັ້ງຄ່າການວິເຄາະ',
      cards: [
        ['ຂໍ້ມູນທີ່ພວກເຮົາເກັບ', ['ຫຼັງຈາກທ່ານອະນຸຍາດການວິເຄາະແລ້ວເທົ່ານັ້ນ ບໍລິການວິເຄາະຂອງພວກເຮົາເອງຈະບັນທຶກໜ້າເວັບ ຫຼື ຜະລິດຕະພັນທີ່ເບິ່ງ, ລິ້ງ ແລະ ປຸ່ມດຳເນີນການທີ່ເລືອກ, ພາສາຂອງເວັບໄຊຕ໌, ປະເພດອຸປະກອນ, ໂດເມນຂອງເວັບໄຊຕ໌ອ້າງອີງ, ຕົວລະບຸເຊດຊັນແບບສຸ່ມ, ປະເທດໂດຍປະມານ ແລະ ທີ່ຢູ່ IP ທີ່ບໍລິການໄດ້ຮັບ.', 'ພວກເຮົາບໍ່ເກັບຊ່ອງຂໍ້ມູນໃນແບບຟອມຕິດຕໍ່, ຊື່, ທີ່ຢູ່ອີເມວ, ເບີໂທລະສັບ, ຂໍ້ຄວາມສອບຖາມ ຫຼື ຂໍ້ມູນທາງການແພດຜ່ານການວິເຄາະ.']],
        ['ເຫດຜົນທີ່ພວກເຮົາໃຊ້', ['ພວກເຮົາໃຊ້ບັນທຶກເຫຼົ່ານີ້ເພື່ອປະເມີນຈຳນວນຜູ້ເຂົ້າຊົມ, ເຂົ້າໃຈວ່າໜ້າເວັບ ແລະ ຜະລິດຕະພັນໃດມີປະໂຫຍດ, ຄຳນວນອັດຕາການຄລິກຂອງໜ້າເວັບ, ກວດພົບການນຳໃຊ້ທາງເຕັກນິກທີ່ບໍ່ເໝາະສົມ ແລະ ປັບປຸງປະສົບການໃຊ້ເວັບໄຊຕ໌.']],
        ['ໄລຍະເວລາເກັບຮັກສາ', ['ບັນທຶກ IP ທີ່ສາມາດລະບຸຕົວໄດ້ ແລະ ເຫດການວິເຄາະແຕ່ລະລາຍການຈະຖືກເກັບໄວ້ບໍ່ເກີນ 30 ວັນ. ຂໍ້ມູນລວມລາຍວັນຂອງໜ້າເວັບແບບບໍ່ລະບຸຕົວຕົນອາດຈະຖືກເກັບໄວ້ບໍ່ເກີນ 13 ເດືອນ ເພື່ອປຽບທຽບປະສິດທິພາບເວັບໄຊຕ໌ໃນໄລຍະຍາວ.']],
        ['ການເຂົ້າເຖິງ ແລະ ຄວາມປອດໄພ', ['ຂໍ້ມູນການວິເຄາະຖືກຈັດການຜ່ານໂຄງລ່າງ Cloudflare ທີ່ໄດ້ຮັບການປົກປ້ອງ. ການເຂົ້າເຖິງຈຳກັດສະເພາະຜູ້ບໍລິຫານທີ່ໄດ້ຮັບອະນຸຍາດ. ທີ່ຢູ່ IP ຖືກປິດບັງໂດຍຄ່າເລີ່ມຕົ້ນໃນແດຊບອດ; ການເປີດເຜີຍທີ່ຢູ່ແບບເຕັມແມ່ນການດຳເນີນການແຍກຕ່າງຫາກທີ່ຖືກບັນທຶກເພື່ອການກວດສອບ.']],
        ['ທາງເລືອກຂອງທ່ານ', ['ທ່ານສາມາດອະນຸຍາດ, ປະຕິເສດ ຫຼື ປ່ຽນຕົວເລືອກການວິເຄາະໃນພາຍຫຼັງຢູ່ໃນອຸປະກອນນີ້. ພວກເຮົາຍັງເຄົາລົບສັນຍານຄວາມເປັນສ່ວນຕົວຂອງບຣາວເຊີທີ່ຮອງຮັບ. ການປະຕິເສດການວິເຄາະບໍ່ສົ່ງຜົນຕໍ່ການເຂົ້າເບິ່ງເວັບໄຊຕ໌ ຫຼື ແບບຟອມຕິດຕໍ່.']]
      ]
    },
    my: {
      title: 'ကိုယ်ရေးကိုယ်တာနှင့် ခွဲခြမ်းစိတ်ဖြာခြင်း',
      intro: 'IP မှတ်တမ်းများအပါအဝင် ဝဘ်ဆိုက်ခွဲခြမ်းစိတ်ဖြာမှုဒေတာကို SCOVION က မည်သို့ကိုင်တွယ်ပုံနှင့် သင်ရွေးချယ်နိုင်သည့် နည်းလမ်းများ။',
      asideTitle: 'ဝဘ်ဆိုက် ခွဲခြမ်းစိတ်ဖြာမှု',
      asideCopy: 'ဤစက်ပေါ်တွင် သင်၏ ခွဲခြမ်းစိတ်ဖြာမှုဆိုင်ရာ ရွေးချယ်မှုကို အချိန်မရွေး ပြန်လည်ကြည့်ရှုနိုင်သည် သို့မဟုတ် ပြောင်းလဲနိုင်သည်။',
      settingsLabel: 'ခွဲခြမ်းစိတ်ဖြာမှု ဆက်တင်များ',
      cards: [
        ['ကျွန်ုပ်တို့ စုဆောင်းသည့်အရာများ', ['သင်က ခွဲခြမ်းစိတ်ဖြာမှုကို ခွင့်ပြုပြီးမှသာ ကျွန်ုပ်တို့၏ ပထမပါတီ ခွဲခြမ်းစိတ်ဖြာမှုဝန်ဆောင်မှုက ကြည့်ရှုသည့် စာမျက်နှာ သို့မဟုတ် ထုတ်ကုန်၊ ရွေးချယ်သည့် လင့်ခ်များနှင့် လုပ်ဆောင်ချက်ခလုတ်များ၊ ဝဘ်ဆိုက်ဘာသာစကား၊ စက်အမျိုးအစား၊ ရည်ညွှန်းဝဘ်ဆိုက်၏ ဒိုမိန်း၊ ကျပန်း session identifier၊ ခန့်မှန်းနိုင်ငံနှင့် ဝန်ဆောင်မှုက လက်ခံရရှိသော IP လိပ်စာတို့ကို မှတ်တမ်းတင်ပါသည်။', 'ခွဲခြမ်းစိတ်ဖြာမှုမှတစ်ဆင့် ဆက်သွယ်ရန်ဖောင်ရှိ အကွက်များ၊ အမည်များ၊ အီးမေးလ်လိပ်စာများ၊ ဖုန်းနံပါတ်များ၊ စုံစမ်းမေးမြန်းစာသား သို့မဟုတ် ဆေးဘက်ဆိုင်ရာအချက်အလက်များကို ကျွန်ုပ်တို့ မစုဆောင်းပါ။']],
        ['အသုံးပြုရသည့်အကြောင်းရင်း', ['ဧည့်သည်အရေအတွက်ကို ခန့်မှန်းရန်၊ အသုံးဝင်သော စာမျက်နှာနှင့် ထုတ်ကုန်များကို နားလည်ရန်၊ စာမျက်နှာ click-through rate ကို တွက်ချက်ရန်၊ နည်းပညာဆိုင်ရာ အလွဲသုံးစားပြုမှုကို ဖော်ထုတ်ရန်နှင့် ဝဘ်ဆိုက်အသုံးပြုမှုအတွေ့အကြုံကို တိုးတက်စေရန် ဤမှတ်တမ်းများကို အသုံးပြုပါသည်။']],
        ['ထိန်းသိမ်းထားသည့်ကာလ', ['သတ်မှတ်ဖော်ထုတ်နိုင်သော IP မှတ်တမ်းများနှင့် ခွဲခြမ်းစိတ်ဖြာမှုဖြစ်ရပ်တစ်ခုချင်းကို 30 ရက်အထိ ထိန်းသိမ်းထားပါသည်။ အမည်မဖော်ထားသော နေ့စဉ်စာမျက်နှာ စုစုပေါင်းဒေတာကို ရေရှည်ဝဘ်ဆိုက်စွမ်းဆောင်ရည် နှိုင်းယှဉ်နိုင်ရန် 13 လအထိ ထိန်းသိမ်းထားနိုင်ပါသည်။']],
        ['ဝင်ရောက်ခွင့်နှင့် လုံခြုံရေး', ['ခွဲခြမ်းစိတ်ဖြာမှုဒေတာကို ကာကွယ်ထားသော Cloudflare အခြေခံအဆောက်အအုံမှတစ်ဆင့် ကိုင်တွယ်ပါသည်။ ဝင်ရောက်ခွင့်ကို အခွင့်အာဏာပေးထားသော စီမံခန့်ခွဲသူများအတွက်သာ ကန့်သတ်ထားပါသည်။ Dashboard တွင် IP လိပ်စာများကို ပုံမှန်အားဖြင့် ဖုံးကွယ်ထားပြီး လိပ်စာအပြည့်အစုံကို ဖော်ထုတ်ခြင်းသည် သီးခြား စာရင်းစစ်မှတ်တမ်းတင်ထားသော လုပ်ဆောင်ချက်တစ်ခုဖြစ်ပါသည်။']],
        ['သင်၏ရွေးချယ်မှု', ['ဤစက်ပေါ်တွင် ခွဲခြမ်းစိတ်ဖြာမှုကို ခွင့်ပြုနိုင်သည်၊ ငြင်းပယ်နိုင်သည် သို့မဟုတ် နောက်ပိုင်းတွင် ပြောင်းလဲနိုင်သည်။ ပံ့ပိုးထားသော browser ကိုယ်ရေးကိုယ်တာအချက်ပြမှုများကိုလည်း ကျွန်ုပ်တို့ လေးစားပါသည်။ ခွဲခြမ်းစိတ်ဖြာမှုကို ငြင်းပယ်ခြင်းသည် ဝဘ်ဆိုက် သို့မဟုတ် ဆက်သွယ်ရန်ဖောင်ကို အသုံးပြုခွင့်အပေါ် သက်ရောက်မှုမရှိပါ။']]
      ]
    },
    km: {
      title: 'ឯកជនភាព និងការវិភាគ',
      intro: 'របៀបដែល SCOVION គ្រប់គ្រងទិន្នន័យវិភាគគេហទំព័រ រួមទាំងកំណត់ត្រា IP និងជម្រើសដែលមានសម្រាប់អ្នក។',
      asideTitle: 'ការវិភាគគេហទំព័រ',
      asideCopy: 'អ្នកអាចពិនិត្យ ឬផ្លាស់ប្តូរជម្រើសវិភាគរបស់អ្នកបានគ្រប់ពេលនៅលើឧបករណ៍នេះ។',
      settingsLabel: 'ការកំណត់ការវិភាគ',
      cards: [
        ['ទិន្នន័យដែលយើងប្រមូល', ['បន្ទាប់ពីអ្នកអនុញ្ញាតការវិភាគប៉ុណ្ណោះ សេវាវិភាគភាគីទីមួយរបស់យើងនឹងកត់ត្រាទំព័រ ឬផលិតផលដែលបានមើល តំណ និងប៊ូតុងសកម្មភាពដែលបានជ្រើសរើស ភាសាគេហទំព័រ ប្រភេទឧបករណ៍ ដែននៃគេហទំព័រយោង លេខសម្គាល់សម័យចៃដន្យ ប្រទេសប្រហាក់ប្រហែល និងអាសយដ្ឋាន IP ដែលសេវាបានទទួល។', 'តាមរយៈការវិភាគ យើងមិនប្រមូលវាលក្នុងទម្រង់ទំនាក់ទំនង ឈ្មោះ អាសយដ្ឋានអ៊ីមែល លេខទូរស័ព្ទ អត្ថបទសាកសួរ ឬព័ត៌មានវេជ្ជសាស្ត្រទេ។']],
        ['មូលហេតុដែលយើងប្រើ', ['យើងប្រើកំណត់ត្រាទាំងនេះដើម្បីប៉ាន់ប្រមាណចំនួនអ្នកចូលមើល យល់ដឹងថាទំព័រ និងផលិតផលណាដែលមានប្រយោជន៍ គណនាអត្រាចុចរបស់ទំព័រ រកឃើញការប្រើប្រាស់បច្ចេកទេសខុសគោលបំណង និងកែលម្អបទពិសោធន៍គេហទំព័រ។']],
        ['រយៈពេលរក្សាទុក', ['កំណត់ត្រា IP ដែលអាចកំណត់អត្តសញ្ញាណបាន និងព្រឹត្តិការណ៍វិភាគនីមួយៗ ត្រូវបានរក្សាទុករហូតដល់ 30 ថ្ងៃ។ ទិន្នន័យសរុបទំព័រប្រចាំថ្ងៃដែលមិនបង្ហាញអត្តសញ្ញាណ អាចត្រូវបានរក្សាទុករហូតដល់ 13 ខែ ដើម្បីឱ្យយើងអាចប្រៀបធៀបប្រសិទ្ធភាពគេហទំព័ររយៈពេលវែង។']],
        ['ការចូលប្រើ និងសុវត្ថិភាព', ['ទិន្នន័យវិភាគត្រូវបានគ្រប់គ្រងតាមរយៈហេដ្ឋារចនាសម្ព័ន្ធ Cloudflare ដែលត្រូវបានការពារ។ ការចូលប្រើត្រូវបានកំណត់សម្រាប់តែអ្នកគ្រប់គ្រងដែលមានសិទ្ធិប៉ុណ្ណោះ។ អាសយដ្ឋាន IP ត្រូវបានបិទបាំងជាលំនាំដើមនៅក្នុងផ្ទាំងគ្រប់គ្រង; ការបង្ហាញអាសយដ្ឋានពេញលេញគឺជាសកម្មភាពដាច់ដោយឡែកដែលត្រូវបានកត់ត្រាសម្រាប់សវនកម្ម។']],
        ['ជម្រើសរបស់អ្នក', ['អ្នកអាចអនុញ្ញាត បដិសេធ ឬផ្លាស់ប្តូរជម្រើសវិភាគនៅពេលក្រោយនៅលើឧបករណ៍នេះ។ យើងក៏គោរពសញ្ញាឯកជនភាពរបស់កម្មវិធីរុករកដែលគាំទ្រផងដែរ។ ការបដិសេធការវិភាគមិនប៉ះពាល់ដល់ការចូលប្រើគេហទំព័រ ឬទម្រង់ទំនាក់ទំនងទេ។']]
      ]
    },
    tet: {
      title: 'Privasidade no analítika',
      intro: 'Oinsá SCOVION jere dadus analítika website nian, inklui rejistu IP, no opsaun ne’ebé disponivel ba Ita.',
      asideTitle: 'Analítika website nian',
      asideCopy: 'Ita bele haree fali ka troka Ita nia preferénsia analítika iha dispozitivu ida-ne’e bainhira de’it.',
      settingsLabel: 'Konfigurasaun analítika',
      cards: [
        ['Saida mak ami rekolla', ['Hafoin de’it Ita permite analítika, ami-nia servisu analítika parte-primeira rejista pájina ka produtu ne’ebé haree, link no asaun ne’ebé hili, lian website, kategoria dispozitivu, domíniu website referénsia, identifikadór sesaun aleatóriu, nasaun aproximada no enderesu IP ne’ebé servisu simu.', 'Ami la rekolla kampu formuláriu kontaktu, naran, enderesu email, númeru telefone, testu pergunta ka informasaun médika liuhosi analítika.']],
        ['Tansá ami uza', ['Ami uza rejistu sira-ne’e atu estima númeru vizitante, komprende pájina no produtu sira ne’ebé útil, kalkula taxa klik pájina, detekta abuzu tékniku no hadi’a esperiénsia website.']],
        ['Retensaun', ['Rejistu IP ne’ebé bele identifika no eventu analítika individuál rai to’o loron 30. Agregadu pájina loroloron anónimu bele rai to’o fulan 13 atu ami bele kompara desempenhu website ba tempu naruk.']],
        ['Asesu no seguransa', ['Dadus analítika jere liuhosi infraestrutura Cloudflare ne’ebé protejida. Asesu limitadu ba administradór autorizadu sira. Enderesu IP maskar ho padraun iha painél; hatudu enderesu kompletu mak asaun ketak ne’ebé rejista ba auditoria.']],
        ['Ita nia opsaun', ['Ita bele permite, rejeita ka troka analítika iha dispozitivu ida-ne’e iha tempu seluk. Ami mós respeita sinal privasidade browser ne’ebé suporta. Rejeita analítika la afeta asesu ba website ka formuláriu kontaktu.']]
      ]
    }
  };

  function buildSection(language, content) {
    const section = document.createElement('section');
    section.className = 'privacy-copy';
    section.dataset.privacyLanguage = language;
    section.dataset.title = content.title;
    section.dataset.intro = content.intro;
    section.dataset.asideTitle = content.asideTitle;
    section.dataset.asideCopy = content.asideCopy;
    section.dataset.settingsLabel = content.settingsLabel;
    section.hidden = true;

    content.cards.forEach(([heading, paragraphs], cardIndex) => {
      const article = document.createElement('article');
      article.className = 'privacy-card';
      const title = document.createElement('h2');
      title.textContent = heading;
      article.appendChild(title);

      paragraphs.forEach((paragraph, paragraphIndex) => {
        const body = document.createElement('p');
        if (cardIndex === 0 && paragraphIndex === 1) {
          const emphasis = document.createElement('strong');
          emphasis.textContent = paragraph;
          body.appendChild(emphasis);
        } else {
          body.textContent = paragraph;
        }
        article.appendChild(body);
      });
      section.appendChild(article);
    });
    return section;
  }

  function mount() {
    const layout = document.querySelector('.privacy-layout');
    if (!layout) return false;
    Object.entries(locales).forEach(([language, content]) => {
      if (!document.querySelector(`[data-privacy-language="${language}"]`)) {
        layout.appendChild(buildSection(language, content));
      }
    });
    return true;
  }

  globalThis.SCOVION_PRIVACY_ASEAN = Object.freeze({ locales, mount });
})();
