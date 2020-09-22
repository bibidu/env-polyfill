function check () {}

if (check.name === 'check') {
    console.log('[envPolyfill]')

    // window.navigator.userAgent = 'wbutown/9.16.5'
    Object.defineProperty(navigator, 'userAgent', {
        value: 'wbutown/9.16.5',
        writable: false
    });

    WBUTOWN = {
        invoke (name, info, cb) {
            cb('1')
        },
        action: {
            setTitle () {},
            getUserInfo (a, cb) {
                cb(JSON.stringify(getMockHeaders()))
            },
            isLogin (cb) {
                cb('0')
            },
            toast (msg) {
                console.warn('[protocol:toast]' + msg)
            },
            setWeblog () {},
            deviceEvent () {},
            detachEvent () {},
            extendBtn () {},
            share () {},
        }
    }
}

function getMockHeaders () {
    return {
        'uid': '72557883849732',
        '58idfa': 'A65E3CD3-01A0-4C12-8D89-DFFA66B396AD',
        'dlat': '39.99323220538888',
        'ua': 'iPhone 6 Plus_iOS 12.4.1',
        'lon': '116.5055655924479',
        'platform': 'iphone',
        'dlon': '116.48869425058888',
        '58openudid': '824F19D7-A481-41D7-B2E8-754437B538E2',
        'vlat': '31.476479',
        'vlon': '92.052064',
        nop: '',
        apn: 'WIFI',
        f: '58',
        channelid: '50000',
        vlocalid: '542400000000',
        townlocalid: '542400000000',
        bundle: 'com.wbutown.iphone',
        version: '9.7.0',
        uuid: '7b5a0c47-ac62-4727-8e28-09f26f96b6da',
        cimei: '0f607264fc6318a92b9e13c65db7cd3c',
        machine: 'iPhone7,1',
        id58: '100563086132026',
        osv: '12.4.1',
        productorid: '32',
        cid: '9618',
        r: '2148_1242',
        '58ua': 'wbutown',
        os: 'ios',
        openudid: '3d4333b22ed7259fb14a20b53fd35199b743a60b',
        lat: '39.98740152994792',
        wbuversion: '9.7.0',
        coordinatetype: '0',
        uniqueid: '9f0fb9767ef99748bb45203248b662cb',
        nettype: 'WIFI',
        imei: '860204045084636',
        ppu: 'UID=72557883849732&UN=meom2edph&TT=83f79de5381899c0a743703f141fd389&PBODY=XI2Q0j2DOc8Sme2_Ca' +
          'tlXIAJa85bY30bq--422kDzb2kg3hRKgDiP6TzvWNaNWiCWbFMeRnahaRdkndxhtEVsZ4zP8ugU9UU_nZB06gx_8eZm1OtS' +
          'l9mA3P38ITj6ZJEjT-O_Vu8JRxGnTsmgCa_Goebmw3GyxXPI4XWrq8YUvw&VER=1',
    }
}
