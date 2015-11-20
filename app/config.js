require.config({
    baseUrl : '',
    waitSeconds : 20,
    paths : {
        /* Javascript Lib */
        avalon : 'vender/avalon/dist/avalon.mobile.shim.min',
        mmState : 'vender/mmRouter/mmState',
        mmPromise : 'vender/mmRouter/mmPromise',
        mmRouter : 'vender/mmRouter/mmRouter',
        mmHistory : 'vender/mmRouter/mmHistory',
        css : 'vender/css/css',
        sm : 'vender/sm/sm',
        smExtend : 'vender/sm/sm-extend',

        /* Css Lib */
        smCss : 'vender/sm/sm.css',
        smExtendCss : 'vender/sm/sm-extend.css'
    },
    priority: ['css'],
    shim : {
        avalon : { exports : 'avalon' },
        mmState : { deps : ['avalon'] }
    }
});
