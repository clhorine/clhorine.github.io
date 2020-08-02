$(document).ready(function(){
	$('.arrow').on('click', function(){
		$('.menu').addClass('show')
	});
	$('.exit').on('click', function(){
		$('.menu').removeClass('show')
	});


	//RANDOM IMAGE ON LOAD
        $.randomImage = {
            defaults: {
                //you can change these defaults to your own preferences.
                path: 'homepage/', //change this to the path of your images
                myImages: ['textboxad.jpg', 'uum.jpg', ] //put image names in this bracket. ex: 'harold.jpg', 'maude.jpg', 'etc'
            }
        };
        
        $.fn.extend({
            randomImage:function(config) {
                var config = $.extend({}, $.randomImage.defaults, config);
                
                return this.each(function() {
                    var imageNames = config.myImages,
                    //get size of array, randomize a number from this
                    // use this number as the array index
                    imageNamesSize = imageNames.length,
                    lotteryNumber = Math.floor(Math.random()*imageNamesSize),
                    winnerImage = imageNames[lotteryNumber],
                    fullPath = config.path + winnerImage;
                    
                    //put this image into DOM at class of randomImage
                    // alt tag will be image filename.
                    $(this).attr({
                        src: fullPath,
                        alt: winnerImage
                    });
                });
            }
        });
    
        $('img:first').randomImage();
    });

