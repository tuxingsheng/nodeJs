require(['config'],function(){
    require(['avalon'],function(avalon){
        avalon.ready(function(){
            var app = avalon.define({
                $id : 'app',
                $initialize : function(){  }
            });
            avalon.scan();
            app.$initialize();
        });
    });
});

