var total = document.querySelectorAll('#heart');
var el;

let burstFunction= function(){
    var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
    timeline = new mojs.Timeline(),
    
    // tweens for the animation:

    // burst animation
        tween1 = new mojs.Burst({
            parent: el,
      radius:   { 0: 100 },
      angle:    { 0: 45 },
      y: -10,
      count:    10,
       radius:       100,
      children: {
        shape:        'circle',
        radius:       30,
        fill:         [ 'red', 'white' ],
        strokeWidth:  15,
        duration:     500,
      }
        });
        tween2 = new mojs.Tween({
            duration : 900,
            onUpdate: function(progress) {
                var scaleProgress = scaleCurve(progress);
                el.style.WebkitTransform = el.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
            }
        });
        tween3 = new mojs.Burst({
              parent: el,
              radius:   { 0: 100 },
              angle:    { 0: -45 },
              y: -10,
              count:    10,
              radius:       125,
        children: {
              shape:        'circle',
              radius:       30,
              fill:         [ 'white', 'red' ],
              strokeWidth:  15,
              duration:     400,
              }
        });
    
    // add tweens to timeline:
    timeline.add(tween1, tween2, tween3);
    timeline.play();
}
$( document ).ready(function() {
        $( ".button1" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[0];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button2" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[1];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button3" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[2];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button4" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[3];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button5" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[4];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button6" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[5];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button7" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[6];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button8" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[7];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button9" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[8];
            burstFunction();
            $(this).addClass('active');
        }
    });
    $( ".button10" ).click(function() {
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
           
        }else{
            el=total[9];
            burstFunction();
            $(this).addClass('active');
        }
    });
});
