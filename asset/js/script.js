$(document).ready(function(){
    //PLAYER MOVEMENT
    var pressed = false;
          
    setInterval(function() { 
        collision(); 
    }, 1);
          
    $(document).keydown(function(e) {
        //collision();
        if(!pressed){
            width = $(this).width();
            height = $(this).height();
            switch (e.which) {
                case 37:
                    $('#player').stop().animate({
                        left: '-=' + width
                    }, 2000); //left arrow key
                    break;
                case 38:
                    $('#player').stop().animate({
                        top: '-=' + height
                    }, 2000); //up arrow key
                    break;
                case 39:
                    $('#player').css("background-image", "url(asset/img/ship_movement.png)").stop().animate({
                        left: '+=' + width
                    }, 2000); //right arrow key
                    break;
                case 40:
                    $('#player').stop().animate({
                        top: '+=' + height
                    }, 2000); //bottom arrow key
                    break;
            }
        }
        
        pressed = true;

    }).keyup(function(){
        $('#player').css("background-image", "url(asset/img/ship.png)").stop();
        //collision();
        pressed = false;
    });

    function collision(){
        //ON HIT COLLISION
        $('.hitObj').each(function(){
            if(recthit('#player',$(this))){
              $(this).css({backgroundColor:'yellow'});
              $('#player').css({top:'50%',left:'20px'}).stop();
            }
        });
    }

    //PLAYER COLISION
    function recthit(player, collision){

        var player = $(player);
        var collision = $(collision);

        var x1 = player.offset().left;
        var y1 = player.offset().top;
        var h1 = player.outerHeight(true);
        var w1 = player.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = collision.offset().left;
        var y2 = collision.offset().top;
        var h2 = collision.outerHeight(true);
        var w2 = collision.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    
        /* var r1 = $(player);
        var r2 = $(collision);
        
        var r1x = r1.offset().left;
        var r1w = r1.width();
        var r1y = r1.offset().top;
        var r1h = r1.height();
        
        var r2x = r2.offset().left;
        var r2w = r2.width();
        var r2y = r2.offset().top;
        var r2h = r2.height();
        
        if( r1y+r1h < r2y || r1y > r2y+r2h || r1x > r2x+r2w || r1x+r1w < r2x ){
            return false;
        }else{
            return true;   
        } */
        
    }//end function 
    
});