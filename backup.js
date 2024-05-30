// import Queue from 'bull';
// import cookie from './cookiedefault.json' assert { type: 'json' }
// import cookie2 from './cookiedefault2.json' assert { type: 'json' }
// const queueKeyWord = new Queue('queueKeyWord','redis://127.0.0.1:6379')
// const queueDetailUrl = new Queue('queueDetailUrl','redis://127.0.0.1:6379')
// const queueHasTag = new Queue('queueHasTag','redis://127.0.0.1:6379')
// const queueKeyWordApi = new Queue('queueKeyWordApi','redis://127.0.0.1:6379')
// const queueKeyWordApi1 = new Queue('queueKeyWordApi1','redis://127.0.0.1:6379')

// console.log(await queueDetailUrl.count())
// console.log(await queueKeyWord.count())
// console.log(await queueHasTag.count())
// console.log(await queueKeyWordApi.count())
// console.log(await queueKeyWordApi1.count())

// cookie.map((x)=>{console.log(x.length)})
// console.log(await queueDetailUrl.count())
// console.log(await queueKeyWord.count())
// console.log(await queueHasTag.count())
// console.log(await queueKeyWordApi.count())
// console.log(await queueKeyWordApi1.count())
// cookie2.map((x)=>{console.log(x.length)})
import fs from 'fs'
const listcookie = [
   "user1498424263930|@K4C7NzxNAm1v|toon90amalyar@hotmail.com|VG9uOE931754|msToken=3CE2G9wCp1iUGmg7wr2tAwdBdnYHauoIxqefwEoh9fK2x1iJzNFSZswKmo0OQAiiPTbX5jI0fU2raN82zMQVu8f-6b0IZfay2mGmDHLmUB75DGCK2nJVJGabZr1B;msToken=dHcHFPV46y9BriFDIUtvPkTLOMwd2h7y9b09ImtcQed0biLFJkhfDl3IoRTGp6qycU0lDF6gUXbC1HmW7gpkTf-JmzBtFGPonOrjbAK6AnjtPo8czpnBWYGwWxds;bm_sv=1302CC2D28CF1BE9672E28E9D03C7DCD~YAAQdFA7Fy28uX6PAQAAMefXiBe0rpvZYZMyzJxNTYN7CrGlhlzytjmApjEkPDHulrh9hBYnXudqjfoidYwzEEui16OIXosyrHb40fkIaKevZspHi5rvAs9ZJT25+hQD4CFKYUBIdXzlHcQTpnEQwfXXFQ0MoE6AHcTH2SasD6jmFNEPnHVM/ugtN2qcEAznX2FFn/HKK05krZTYRGZijhyjf87BZ51MEVMetYhpILadnPvOq7yY/V7lF+wfKTq+~1;tt_chain_token=dL8Q6zLBjUIcKhIZDUFUHA==;sid_ucp_v1=1.0.0-KGU5NjQxYWVhZTg4ZjI5MDE1NGFhNjU1OTFlNGNlNjE3MmE5MTBkNzMKIAiFiK_o4pL8hGYQw-GnsAYYswsgDDDC4aewBjgBQOsHEAMaBm1hbGl2YSIgNjM2MjIxOWIxMTNmNDFkZDZlOTA5MTQ1MTdhMWEzOGU;sessionid_ss=6362219b113f41dd6e90914517a1a38e;tt-target-idc-sign=BpDkZ9aoDZ6FvxWLrLlgdOfu0meuMQCCOUPnAJ0QPr4wDdmv7oh7YuKUfbsOQwXlOQSrYJs7FSWNhAOBHcpHx6eVClW7JJ7Pa1IvXhQqDA05r8iEMBtNgPtqJgrO_gSzQHOA3CnhE8ra2Npf3zKXoRfBe7PvBviOnhg4sGD68CiABWUeVJGtJSupizyF9fCXLUHRGnZrVMWt0ZdZJ09gDbm5UAz4nXjHRchRnlgFVkwIe7QmIc9s4RC7oMPDdayrtNTsKbIVL2rOyv07gI8Sr4Q10OlZgxUz92xOBAfDXMDK-_HXY6TXl4QVLLwPDhAT07TEWGfO3ZmqLwS_4GdbivU_rERoXhZOTv4eJMfwY4kIegZ90BD5JDcQ7t6tLTD8K8hSI8QtWDhEW_vDenm-ffSiwiYL1s2FvQa1cEqGaGcB7UXf4AeZCkkQ3DBE9_kFgqv0JiXu2NXWDCtWxjZdJCyaLSWAMQu1xFXeCRRfNY8TPfVBVi_Ky6AGEHBOV34m;ak_bmsc=A80A2AD17ABAB5E600B49402562AB05A~000000000000000000000000000000~YAAQdFA7Fxi8uX6PAQAAbJ3XiBfFlSMFNwgjJtBT49G5XuF2X3VdOi3KjdyB8rY81JBJm0spIykF0Ot6ZzvmR/nPpsgoWpKzzSCHGnae0MqwZB2osXEGnLEDeNAf32eaRAqC+aPxgNRvKDnXoir6Jmdzxbikflm/d5jWsBYj38p002JUpdMsLDEmxnQsfJJF2wgHaHrXXCDc8nxQnsGQ2SOUIvdsaCZhqa1TSeY/pQXUFatAqBW70vccMgr6FY9VkZXLCI7ALmyL5bFfw5qxXWVP3utWdHLazrvU9snfnVBcVMnE5nq0+2xcXOMup5TgGI8sFm/ZmyWfBKf/k0G8MXEe8wvZzovvTMNCqLl3fMchiEb5oEnXp2ERrSYISM4yAQHeFte3kUyX;store-country-code-src=uid;cmpl_token=AgQQAPOFF-RO0rY3HjGlOR08_GhpPNBdv5AOYNDFaA;store-country-code=vn;ttwid=1%7ChGgUg9g56ljHiL_mYEKc2TrVCdXxzX4b_ZFeHMGGUJA%7C1715987803%7Cb706558331c24e282d6b20adf203752bed274f20c45a42f5532df2e956b5b0fd;tt_csrf_token=ynzTV2fK-FK6GWoGbHT62T5lVMZ-2k-7l-Vc;store-idc=alisg;sid_tt=6362219b113f41dd6e90914517a1a38e;sessionid=6362219b113f41dd6e90914517a1a38e;uid_tt_ss=e6461ae6c46dfbe4ed0bc5ffd32d2fd052bce888a2c7eff715621e621e3b9c5f;last_login_method=email;uid_tt=e6461ae6c46dfbe4ed0bc5ffd32d2fd052bce888a2c7eff715621e621e3b9c5f;ssid_ucp_v1=1.0.0-KGU5NjQxYWVhZTg4ZjI5MDE1NGFhNjU1OTFlNGNlNjE3MmE5MTBkNzMKIAiFiK_o4pL8hGYQw-GnsAYYswsgDDDC4aewBjgBQOsHEAMaBm1hbGl2YSIgNjM2MjIxOWIxMTNmNDFkZDZlOTA5MTQ1MTdhMWEzOGU;odin_tt=ef6f8800a26197a427f6dbfcd4a91f9f249c898acb937e8b7fac3d74c9472d12b84ae99a0726afbfc1930450b20934e1f7a3dcd422368ea142c8483b2470d594299c2be6bbc82f36ab0f325cbf1a1775;passport_csrf_token_default=b1898b43b814fa7c69eb542bc06446cb;sid_guard=6362219b113f41dd6e90914517a1a38e%7C1711927491%7C15552000%7CFri%2C+27-Sep-2024+23%3A24%3A51+GMT;tt-target-idc=alisg;tiktok_webapp_theme=light;passport_csrf_token=b1898b43b814fa7c69eb542bc06446cb;multi_sids=7352672394450551813%3A6362219b113f41dd6e90914517a1a38e;passport_fe_beating_status=true;perf_feed_cache={%22expireTimestamp%22:1716159600000%2C%22itemIds%22:[%227341745995736222994%22%2C%227368475414932606215%22%2C%227365025452974492935%22]};s_v_web_id=verify_lug5d1ym_UaO4jhFN_vVUT_4Rr6_AgPu_y4ro3enaB8QN;"

]
var name1 = []
var value = []
for(let i=0;i<1;i++){
    const a = listcookie[0].split("|")
    const b= a.slice(4,100000000000)
    const c = b[0].split(';')
    c.map((x)=>{
        const k = x.indexOf('=')
        const e = x.slice(0,k).trim()
        const f = x.slice(k+1).trim()
        name1.push(e)
        value.push(f)
    })
    let result = {};
    name1.forEach((key, i) => result[key] = value[i]);
    let cookiePattern =   [
        {
            "domain": ".tiktok.com",
            "expirationDate": 1717050987.984794,
            "hostOnly": false,
            "httpOnly": false,
            "name": "bm_sv",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["bm_sv"],
            "id": 3
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1722227785.767184,
            "hostOnly": false,
            "httpOnly": true,
            "name": "cmpl_token",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["cmpl_token"],
            "id": 4
        },
    
        {
            "domain": ".tiktok.com",
            "expirationDate": 1717907799.983367,
            "hostOnly": false,
            "httpOnly": false,
            "name": "msToken",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["msToken"],
            "id": 6
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1722227785.767161,
            "hostOnly": false,
            "httpOnly": true,
            "name": "multi_sids",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["multi_sids"],
            "id": 7
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1748579790.199883,
            "hostOnly": false,
            "httpOnly": true,
            "name": "odin_tt",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": result["odin_tt"],
            "id": 8
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1722070558.602823,
            "hostOnly": false,
            "httpOnly": false,
            "name": "passport_csrf_token",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["passport_csrf_token"],
            "id": 9
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1722070558.602979,
            "hostOnly": false,
            "httpOnly": false,
            "name": "passport_csrf_token_default",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": result["passport_csrf_token_default"],
            "id": 10
        },
        {
            "domain": ".tiktok.com",
            "hostOnly": false,
            "httpOnly": false,
            "name": "s_v_web_id",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": true,
            "storeId": "0",
            "value": result["s_v_web_id"],
            "id": 11
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.767235,
            "hostOnly": false,
            "httpOnly": true,
            "name": "sessionid",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["sessionid"],
            "id": 12
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.767242,
            "hostOnly": false,
            "httpOnly": true,
            "name": "sessionid_ss",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["sessionid_ss"],
            "id": 13
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1748147785.767203,
            "hostOnly": false,
            "httpOnly": true,
            "name": "sid_guard",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["sid_guard"],
            "id": 14
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.767226,
            "hostOnly": false,
            "httpOnly": true,
            "name": "sid_tt",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["sid_tt"],
            "id": 15
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.767249,
            "hostOnly": false,
            "httpOnly": true,
            "name": "sid_ucp_v1",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["sid_ucp_v1"],
            "id": 16
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.767257,
            "hostOnly": false,
            "httpOnly": true,
            "name": "ssid_ucp_v1",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": ["ssid_ucp_v1"],
            "id": 17
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.815676,
            "hostOnly": false,
            "httpOnly": true,
            "name": "store-country-code",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": result["store-country-code"],
            "id": 18
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.815693,
            "hostOnly": false,
            "httpOnly": true,
            "name": "store-country-code-src",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": result["store-country-code-src"],
            "id": 19
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.815608,
            "hostOnly": false,
            "httpOnly": true,
            "name": "store-idc",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": result["store-idc"],
            "id": 20
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595787.984732,
            "hostOnly": false,
            "httpOnly": true,
            "name": "tt_chain_token",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["tt_chain_token"],
            "id": 21
        },
        
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.815703,
            "hostOnly": false,
            "httpOnly": true,
            "name": "tt-target-idc",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": result["tt-target-idc"],
            "id": 23
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1748579786.405847,
            "hostOnly": false,
            "httpOnly": true,
            "name": "tt-target-idc-sign",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": result["tt-target-idc-sign"],
            "id": 24
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1748579788.500055,
            "hostOnly": false,
            "httpOnly": true,
            "name": "ttwid",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["ttwid"],
            "id": 25
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.767211,
            "hostOnly": false,
            "httpOnly": true,
            "name": "uid_tt",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["uid_tt"],
            "id": 26
        },
        {
            "domain": ".tiktok.com",
            "expirationDate": 1732595785.767217,
            "hostOnly": false,
            "httpOnly": true,
            "name": "uid_tt_ss",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": result["uid_tt_ss"],
            "id": 27
        },
        {
            "domain": ".www.tiktok.com",
            "hostOnly": false,
            "httpOnly": false,
            "name": "passport_fe_beating_status",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": true,
            "storeId": "0",
            "value": result["passport_fe_beating_status"],
            "id": 28
        },
        {
            "domain": "www.tiktok.com",
            "expirationDate": 1724819799,
            "hostOnly": true,
            "httpOnly": false,
            "name": "msToken",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": result["msToken"],
            "id": 33
        }
    ]
    fs.writeFile('conca.json',JSON.stringify(cookiePattern),(error)=>{
        console.log(error)
    })
    console.log(cookiePattern)
}
