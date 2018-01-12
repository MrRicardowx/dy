$(function () {
    $('#dowebok').fullpage({
        navigation:true,//是否显示导航，默认为false
        navigationPosition: 'right',//导航小圆点的位置
    });

    // document.body.addEventListener("mousewheel", function(event) {
    //     let a={nub:0}
    //     if($('.active .s1' )){
    //         console.log($('.active .s1'))
    //     // $('.active .s1').html('11')
    //         $('.active .s1').animate({nub:22},{
    //             duration:3000,
    //             step:function (val) {
    //                 let a=Math.trunc(val)
    //                 $('.active .s1').html(a)
    //             }
    //         })
    //     }
    // });
    // let aa={nub:0}
    // $(aa).animate({nub:1000},{
    //     duration:1000,
    //     step:function (val) {
    //         console.log(val)
    //         $('div').html(val);
    //     }
    // })

})
//lazylode
//zepto.js