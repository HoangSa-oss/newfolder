import Queue from 'bull';
import schemaurlpost from './models/schemaurlpost.js';
import schemaurlpost1 from './models/schemaurlpost1.js';
import delay from 'delay';
const queueKeyWord = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')

  

const urlVdideo = [
    
    "#BetagenVietnam",
    "#chacmiendich",
    "#GoodmorningBetagen",
    "#Suauonglenmen",
    "#11tỷđồng",
    "#1thẻcào7cơhội",
    "#AbbottGrowGold",
    "#Anlene900g",
    "#AnleneLuaChonHangDau",
    "#AnleneNhanHieuSo1",
    "#anlongme",
    "#BacsiPhamLeDuy",
    "#bekhoelanhchac",
    "#BenBiHon",
    "#BeNhanhMeNhay",
    "#Betagen",
    "#BộĐôiHoànHảo",
    "#BungCuoiDoiTuoi",
    "#BụngÊmThêmSángTrí",
    "#CanNganDieuNang",
    "#CaoLớnThôngMinh",
    "#chaccannang",
    "#chacchieucao",
    "#CheckinTuLanhTuoiSac",
    "#chienbinhkunsaodo",
    "#chuantinhkhiet",
    "#ChungMinhLamSang",
    "#CoffeeShow",
    "#ColosBabyGoldD3K2",
    "#ConThôngMinh",
    "#cungcontruongthanhcungconhanhphuc",
    "#cungkun",
    "#cungkunlamviectotmoingay",
    "#cungkunvandongmoingay",
    "#ĐạmQuýA2",
    "#đạmquýnewzealand",
    "#Đề_Kháng_Đủ_Khỏe",
    "#Dekhang2lop",
    "#ĐềKhángKhỏe",
    "#DielacGrowPlus",
    "#DinhDuongChoNhaVoDich",
    "#DinhDuongHangDau",
    "#dinhduongvuottroi",
    "#diunhe",
    "#EmBungEmGiac",
    "#EnfaEnspire",
    "#EnsureGold",
    "#FamiGreenSoy",
    "#FFWSSEASpring2024",
    "#Giaimadekhang",
    "#GianHangTuoiTho",
    "#GiuTraiDatXanh",
    "#hoathinhKun",
    "#hoathinhthieunhi",
    "#hoathinhtiengviet",
    "#hoathinhvuinhon",
    "#Hoff_nền_tảng_sức_khoẻ_mai_sau",
    "#IQcaohon",
    "#itduong",
    "#KhoeDepTramPhan",
    "#KhoeDepViDau",
    "#Kun100SuaTuoi",
    "#kundongdien",
    "#kungiaicuucayluamachthan",
    "#kunluamachthan",
    "#kunmarathon",
    "#kunviectot",
    "#Lactoferrin",
    "#LofBaVi",
    "#LofBaViChinhGoc",
    "#LofMalto",
    "#LờiThươngGửiĐIỂMTỰASỐ1",
    "#Maltodongdiensantruong",
    "#matbungbe",
    "#Miendichkhoe",
    "#MILOmoingay",
    "#MILOVietNam",
    "#Mới_Bao_Khỏe",
    "#Monhanchaingay",
    "#MotCamGiacRatYomost",
    "#MuaHeVuiSo1",
    "#MuaNuViSănThưởng",
    "#NapNangLuong",
    "#Napnangluonggiutraidatxanh",
    "#NapNangLuongYo",
    "#Nhelongkhonglongvong",
    "#NướcRauCủQuả",
    "#NutifoodGrowPLUS",
    "#NutifoodSweden",
    "#nutifoodswedengrowplus",
    "#NutrilearnConnect",
    "#NuViPower",
    "#OptimumGold",
    "#Probiitduong",
    "#PurityAward",
    "#QuysuaVuoncaoVietNam",
    "#S26Ultima3",
    "#SANBAOBOITHANKY",
    "#sangtaocungVinamilk",
    "#sanquakun",
    "#SauGioHocDenGioYo",
    "#Scanmamalto",
    "#SimilacVietnam",
    "#Suachuauongtuthucvat",
    "#SuaChuaVinamilkMoiNgay",
    "#SuaKUN",
    "#SuaKUNChoEm",
    "#SuamatchuanNhat",
    "#SuaOngTho",
    "#suathachkunkun",
    "#SuaTraiCayLofMalto",
    "#SuaTraiCayMALTO",
    "#suatuoi100",
    "#SuaTuoiGiaTot",
    "#Suatuoihutchankhong",
    "#SuSuHero",
    "#SuyDinhDuong",
    "#Tặng100gKhoemanhtubentrong",
    "#TangCuongSucKhoe",
    "#TangTocDoKetNoiNaoBo",
    "#ThanhNhe",
    "#ThếGiớiNuVi",
    "#Themcanbangcuocsong",
    "#ThuThachBenBiHon",
    "#Tichdiemdoiniemvui",
    "#Tichdiemdoiqua",
    "#tieuhoatot",
    "#TìnhCảm",
    "#trangtraibonhakun",
    "#trungngayquaxin",
    "#tuoimoingay",
    "#vatmoingay",
    "#vebungmat",
    "#vinamilk",
    "#VinamilkChungtayvicongdong",
    "#VinamilkColosGold",
    "#VinamilkeShop",
    "#VinamilkRewards",
    "#VinamilkShopandMore",
    "#Vovevigiac",
    "#VuiSongMoiNgay",
    "#WebtrethoBabyFair",
    "#YoSchooltour",
    "#YourFireYourHonor",
    

]
console.log(urlVdideo.length)
let addQueue = 0
for(let j=0;j<1;j++){
    for(let i=0;i<urlVdideo.length;i++){
        const urlPost = await schemaurlpost1.find({keyword:`${urlVdideo[i]}`})
        console.log(urlPost.length)
    // if(urlPost.length ==0){
            if(addQueue<0){
                addQueue++
                queueKeyWord.add({keyword:`${urlVdideo[i]}`,addQueued:0})
                console.log({keyword:`${urlVdideo[i]}123`})
                await delay(10000)
    
            }else{
                queueKeyWord.add({keyword:`${urlVdideo[i]}`,addQueued:0})
                console.log({keyword:`${urlVdideo[i]}`,addQueued:0})
            }
           
    // }
    }
}


// const urlVdideo = await schemakeyword.find({})
// console.log(urlVdideo.length)
// let addQueue = 0
// for(let i=0;i<urlVdideo.length;i++){
//     const urlPost = await schemaurlpost.find({keyword:`${urlVdideo[i].keyword}`})
//     console.log(urlPost.length)
//     if(urlPost.length ==0 ){
        
//         if(addQueue<7){
//                         addQueue++
//                         queueKeyWord.add({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
//                         console.log({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
//                         await delay(10000)
            
//                     }else{
//                         queueKeyWord.add({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
//                         console.log({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
//                     }
//     } 

// }


// await queueKeyWord.obliterate({ force: true });
// 