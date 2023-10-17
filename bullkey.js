import schemakeyword from './models/schemakeyword.js';
import Queue from 'bull';
import schemaurlpost from './models/schemaurlpost.js';
import delay from 'delay';
const queueKeyWord = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')

const urlVdideo1 = [
    "#HCMCFILMFESTIVAL",
"#FilmFestival",
"#hiff2024",
"#welcometohiff",
"#LiênHoanPhim",
"#ChàoMừngĐếnHIFF",
"#PhépMàuĐiệnẢnh",
"#HIFF2024",
"#SaigonFilmScene",
"#HIFFSteeringBoard",
"#HCMCCultureSports",
"#lienhoanphimquoctethanhphohochiminh",
"#liênhoanphim",
"#lienhoanphim",
"#cinetour",
"#CineParty",
"#GiaoLưuĐiệnẢnh",
"HCMC INTERNATIONAL FILM FESTIVAL",
"HIFF",
"Liên hoan Phim Quốc tế Thành phố Hồ Chí Minh",
"Ho Chi Minh City International Film Festival",
"Liên hoan phim Quốc tế TPHCM HIFF 2024",
    "#KOCVIETNAM",
    "#KOCVIETNAM2023",
    "#DaichienKOC",
    "KOC Việt Nam",
    "KOC VietNam",
    "KOCVietNam",
    "Show KOC",
    "KOC Show",
    "KOC",
    "VCCorp",
    "#VCCorp",
    "Kenh 14",
    "Kenh14",
    "#Kenh14",
    "Admicro",
    "#Admicro",
    "chương trình thực tế",
    "show thực tế",
    "Reality Show",
    "xe hybrid",
     "toyota hybrid",
    "AIH", "BIDV", "HD bank",
    "vinfast", "vinpearl",
    "ahamove",
    "#ahamove",
        "Mvillage", "M-Village", "M Village", "#signaturebyMvillage",
    "cù lao xác sống phần 2",
    "bến phà xác sống",
    "cù lao time",
    "#benphaxacsong",
"#culaoxacsong",
" toyota",
"J and t",
"JT",
"JandT",
"J n T",
"JnT",
"#JnT",
"#jntexpressvietnam",
"#jntexpress",
"#jtexpressvn",
"#taychayjnt",
"#giaohangjt",
"Giao hàng tiết kiệm",
"GHTK",
"giaohangtietkiem",
"nhà Kiệm",
"Xfast",
"#bưucụcghtk",
"#nhakiem",
"#photghtk",
"Shopee Express",
"shopeeexpress",
"shopee express",
"shopee+sub keys",
"shopee ex",
"SE + sub keys",
"#shopeeExpress",
"#taychayshopeeexpress",
"spx",
"SPE",
"Viettel Post",
"viettelpost",
"vietel post",
"vietel pot",
"viettel+sub keys",
"vietel+sub keys",
"bưu chính viettel",
"vettel+sub keys",
"#viettelpostnhanh",
"viettel pos",
"#buucucviettelpost",
"#giao_hàng_viettel",
"#tẩychayviettelpost",
"#buuchinhViettel",
"Best Express",
"#BEST_Express",
"#bestexpress",
"#everywherewithyou",
"Best inc",
"Giao hàng best",
"Bet express",
"best+sub keys",
"#buucucbest",
"#photbestexpress",
"#bestinc",
"#bestincvietnam",
"BEST LOGISTICS TECHNOLOGY",
"VNpost",
"vn post",
"v n post",
"vietnam post",
"viet nam post",
"BƯU ĐIỆN VIỆT NAM",
"bưu điện",
"#buudienvietnam",
"#vnpost",
"#vietnampost",
"#phốtVNPost",
"#taychayvietnampost",
    "GHN Express",
"GHN",
"giaohangnhanh",
"#ghnexpress",
"#GHN",
"#giaohangnhanh",
"Tâm sự giao hàng cùng GHN",
"#trợgiúpgiảiđápkhiếunại",
"Lê Thị Trợ Giúp",
"Trần Văn Tâm Sự",
"#buucucGHN",
"#tamsugiaohangcungghn",
"#ghnhn",
"#GHNHCM",
"#GHN_phốt",
"#ghnlừađảo",
"#taychayghn",
"#ghnvotrachnhiem",
"#GHNlamhuhonghang",
"#taychaygiaohangnhanh",
"#ghnlàmănthiếutráchnhiệm",
"#ghntraohang",
"#ghnancap",
"#giaohangnhanhantrom",
"#phốtghn",
"#ghnrutruot",
"#Giao_hàng_nhanh_gian_lận",
"#giaohangnhanhgianlan",
"G.i.a.o H.a..n.g N.h.a.nh",
"tận tâm 100%",
"giao hang nhanh",
    "#comehomevietnam",
    "comehomevietnam",
    "Come Home vietnam",
    "Dbay Exchange",
    "First Option FX",
    "InfoFX",
    "Lion Brokers",
    "Merritrade",
    "Trust Markets",
    "Alpha",
    "ASX",
    "CH Markets",
    "DEX Investing",
    "Honor",
    "Tạp chí Trading",
    "TradeTIME",
    "Zeno Markets",
    "LPL TRADE",
    "global k",
    "globalk",
    "stradex",
    "IQX Trade",
    "AM Tradex",
    "Extrim",
    "Macro",
    "Londonex",
    "Info Finance",
    "#firstoptionfx",
    "#infofinance",
    "#infofx",
    "#trustmarkets",
    "First OptionFx",
    "InfoFinance",
    "#LionBrokers",
    "#stradex",
    "#globalk",
    "#amtradex",
    "#extrim",
    "#iqxtrade",
    "IQXTrade",
    "Macro Equities",
    "#macroequities",
    "#sanmacroequities",
    "#dbayexchange",
    "#dbay",
    "#merritrade",
    "#londonex",
    "#zenomarkets",
    "#tapchitrading",
    "NEO Trades",
    "Neotrades",
    "#neotrades",
    "#tradetime",
    "#asxmarkets",
    "alpha trading hub",
    "#alphatradinghub",
    "#ATH",
    "the brokers",
    "#thebrokers",
    "#chmarkets",
    "#dexinvesting",
    "#lpltrade",
    "#leapcm",
    "leap capital markets",
    "leap cm",
    "leapCM",
    "BT Markets",
    "btmarkets",
    "KAMA Capital",
    "kamacapital",
    "#btmarkets",
    "#kamacapital",
    "Up Trades",
    "uptrades",
    "jasfx",
    "#jasfx",
    "foxi markets",
    "foximarkets",
    "iswiss",
    "#iswiss",
    "i swiss",
    "honorfx",
    "#honorfx",
    "chmarkets.com",
    "chmarkets",
    "#MoMo",
    "ví momo",
    "#GiayChungNhanGenC",
    "#NgayKhongTienMat",
    "#MoMoBonBon",
    "#TrieuLyNuoc0Đ",
    "#SieuUngDungMoMo",
    "BIDV",
    "hd bank",
    "Ngân hàng Quốc tế",
    "ngôi sao phương nam",
    "NH quốc tế",
    "tân hiệp phát",
    "V.I.B",
    "VIB",
    "VIBBANK",
    "vnm",
    "Bột ăn dặm Organic",
    "bột ăn dặm vinamilk",
    "Diecerna",
    "dielac",
    "Dielac",
    "DielacGrowPlus",
    "DielacPedia",
    "Giấc mơ sữa Việt",
    "giacmosuaviet",
    "kem delight",
    "Kem Delight",
    "Kem Oze",
    "Kem Subo",
    "kem Twincows",
    "kem vinamilk",
    "kem yolo",
    "masan",
    "NgayTieuHoaTheGioi",
    "NgôiSaoPhươngNam",
    "Ngũ cốc B Fast",
    "Ngũ cốc Kachi",
    "nhóc kem",
    "nhockem",
    "ông thọ",
    "Optima",
    "Optimum",
    "Optimumgold",
    "Organic Gold",
    "ozela",
    "Su su",
    "sữa 9 loại hạt",
    "sữa a2",
    "sữa ADM",
    "sữa bịch vinamilk",
    "sữa chị liên",
    "sữa chua kefir",
    "sữa chua LoveYogurt",
    "sữa chua su su",
    "sữa chua susu",
    "sữa chua uống su su",
    "sữa chua vinamilk",
    "sữa đặc phương nam",
    "sữa đặc tài lộc",
    "sữa đặc vianmilk",
    "sữa đậu nành soya",
    "sữa flex",
    "sữa Green Farm",
    "sữa greenfarm",
    "Sữa hạt ngũ cốc B Fast",
    "sữa hero",
    "sữa MC",
    "sữa ông thọ",
    "sua optimum",
    "sữa Organic",
    "sữa platinum",
    "sua probi",
    "Sữa tắm La Petal",
    "Sữa Tổ Yến",
    "sữa tươi tổ yến",
    "sữa tươi vinamilk",
    "sữa Twincows",
    "Suachuauongmensong",
    "SuachuauongProbi",
    "SuachuaVinamilk",
    "suadactailoc",
    "SữaĐậuNànhHạnhNhân",
    "sữaflex",
    "SữaHero",
    "suamocchau",
    "suatuoivinamilk",
    "suatuoivnm",
    "suavinamilk",
    "suavnm",
    "SữaVNMTổyến",
    "Summer Sea",
    "sumo bbq",
    "Super nut",
    "superNut",
    "SuperSuSu",
    "Sure Diecerna",
    "Sure Prevent",
    "surediecerna",
    "Susu",
    "susuhero",
    "SuSuIQ",
    "susuvinamilk",
    "susuvnm",
    "ThankYouVinamilk",
    "vinamilk 100",
    "vinamilk organic",
    "vinamilk power",
    "Vinamilk",
    "vinamilkDiecerna",
    "VinamilkGiacMoSuaViet",
    "VinamilkGreekYoghurt",
    "vinamilkhappymilktea",
    "VinamilkHero",
    "vinamilkitduong",
    "vinamilkoptimum",
    "VinamilkOptimumGold",
    "vinamilkorganic",
    "VinamilkProbi",
    "vinamilksupernut",
    "vinamilksurediecerna",
    "vinamilksusu",
    "vinamilkvfresh",
    "vinamilkzori",
    "win mart",
    "yomilk",
    "#MoMo",
    "ví momo",
    "#GiayChungNhanGenC",
    "#NgayKhongTienMat",
    "#MoMoBonBon",
    "ShinhanFinance",
    "tài chính shinhan",
    "TrainghiemmoiGiatrimoi",
    "ShinhanFc",
    "trainghiemmoigiatrimoi",
    "Shinhan finance",
    "shin han finance",
    "#Shinhanfiance",
    "S.H finance",
    "SVFC",
"Ca Sĩ Mặt Nạ",
"The Masked Singer",
"TLC",
"led TLC",
"bóng đèn TLC",
"Downlight TLC",
"am tran TLC",
"op tran TLC",
"chieu pha TLC",
"led",
"bóng đèn",
"Downlight",
"am tran",
"op tran",
"chieu pha",
"led",
"bóng đèn",
"compact",
"doublewing",
"double wing",
"Downlight",
"am tran",
"op tran",
"chieu pha",
"led điện quang",
"bóng đèn điện quang",
"compact điện quang",
"doublewing điện quang",
"double wing điện quang",
"Downlight điện quang",
"am tran điện quang",
"op tran điện quang",
"chieu pha điện quang",
"điện quang",
"led rạng đông",
"bóng đèn rạng đông",
"Downlight rạng đông",
"am tran rạng đông",
"op tran rạng đông",
"chieu pha rạng đông",
"led",
"bóng đèn",
"Downlight",
"am tran",
"op tran",
"chieu pha",
"rạng đông",
"led điện quang",
"bóng đèn điện quang",
"compact điện quang",
"doublewing điện quang",
"double wing điện quang",
"Downlight điện quang",
"am tran điện quang",
"op tran điện quang",
"chieu pha điện quang",
"vianco",
"Đổi Bóng Sáng Đèn",
"Đổi Bóng-Sáng Đèn",
"Đổi Bóng - Sáng Đèn",
"HouseNHome",
"HOUSE n HOME",
"HOUSE ARE YOU?",
"HOUSE ARE YOU",
"#CaSĩMặtNạ",
"#CaSiMatNaMua2",
"#casimatna",
"#themaskedsingervietnam",
"#TheMaskedSinger",
"#masksinger",
"#MusicVieChannel",
"#VieON",
"#VieChannel",
"#TLC",
"#dienquang",
"#rangdong",
"#vianco",
"#viancolighting",
"#đènledvianco",
"#doibongsangden",
"#doibong_sangden",
"#HousenHome",
"#HouseAreYou",

"Dbay Exchange",
"First Option FX",
"InfoFX",
"Lion Brokers",
"Merritrade",
"Trust Markets",
"Alpha",
"ASX",
"CH Markets",
"DEX Investing",
"Honor",
"Tạp chí Trading",
"TradeTIME",
"Zeno Markets",
"LPL TRADE",
"global k",
"globalk",
"stradex",
"IQX Trade",
"AM Tradex",
"Extrim",
"Macro",
"Londonex",
"Info Finance",
"#firstoptionfx",
"#infofinance",
"#infofx",
"#trustmarkets",
"First OptionFx",
"InfoFinance",
"#LionBrokers",
"#stradex",
"#globalk",
"#amtradex",
"#extrim",
"#iqxtrade",
"IQXTrade",
"Macro Equities",
"#macroequities",
"#sanmacroequities",
"#dbayexchange",
"#dbay",
"#merritrade",
"#londonex",
"#zenomarkets",
"#tapchitrading",
"NEO Trades",
"Neotrades",
"#neotrades",
"#tradetime",
"#asxmarkets",
"alpha trading hub",
"#alphatradinghub",
"#ATH",
"the brokers",
"#thebrokers",
"#chmarkets",
"#dexinvesting",
"#lpltrade",
"#leapcm",
"leap capital markets",
"leap cm",
"leapCM",
"BT Markets",
"btmarkets",
"KAMA Capital",
"kamacapital",
"#MGVietNam",
"#btmarkets",
"#kamacapital",
"Up Trades",
"uptrades",
"jasfx",
"#jasfx",
"foxi markets",
"foximarkets",
"iswiss",
"#iswiss",
"i swiss",
"honorfx",
"#honorfx",
"chmarkets.com",
"chmarkets",
"ibmex",
"#ibmex",
"ibmex vietnam",
"sàn ibmex",
"#ibmexvietnam",
"ibmexvietnam",
"ibmex.com",

"#chikky",
"Chikky",
"Son nách Api",
"serum API",
"#serumapi",
"giao hàng nhanh",
"GHN",
"giaohangnhanh",
"giao hàng tiết kiệm",
"giaohangtietkiem",
"GHTK",
"J&T express",
"shopee express",
"best express",
"VNpost",
"vietnam post",
"viettel post",
"Đất rừng hoa nam",
"Đất rừng trung hoa"
]
console.log(urlVdideo1.length)
let addQueue1 = 0
for(let i=0;i<urlVdideo1.length;i++){
    const urlPost = await schemaurlpost.find({keyword:`${urlVdideo1[i]}`})
    console.log(urlPost.length)
// if(urlPost.length ==0){
        if(addQueue1<7){
            addQueue1++
            queueKeyWord.add({keyword:`${urlVdideo1[i]}`,addQueued:0})
            console.log({keyword:`${urlVdideo1[i]}`})
            await delay(10000)

        }else{
            queueKeyWord.add({keyword:`${urlVdideo1[i]}`,addQueued:0})
            console.log({keyword:`${urlVdideo1[i]}`,addQueued:0})
        }
       
}
// }

const urlVdideo = await schemakeyword.find({})
console.log(urlVdideo.length)
let addQueue = 0
for(let i=0;i<urlVdideo.length;i++){
    const urlPost = await schemaurlpost.find({keyword:`${urlVdideo[i].keyword}`})
    console.log(urlPost.length)
    // if(urlPost.length ==0 ){
        
        if(addQueue<7){
                        addQueue++
                        queueKeyWord.add({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
                        console.log({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
                        await delay(10000)
            
                    }else{
                        queueKeyWord.add({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
                        console.log({keyword:`${urlVdideo[i].keyword}`,addQueued:0})
                    }
    // } 

}


// await queueKeyWord.obliterate({ force: true });
