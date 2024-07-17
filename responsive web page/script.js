$(window).scroll(function(){

    var $window = $(window);
    var $body = $('body');
    var $contrainer = $('container');
    var scroll = $window.scrollTop() + ($window.height() /3);
    $container.each(function(){
        var $this = $(this);

        if($this.position().top <= scroll && $this.position().top + $this.height() > scroll){
            $body.removeclass(function(ind,css){
                return(css.match(/(^|\s)bg-\s+/g) || []).join(' ');

            })
            $body.addclass('bg-' + $(this).data('bg'));
        }
            
    })
}).scroll();