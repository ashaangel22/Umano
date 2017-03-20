
$(document).ready(function() {
	//$(".custom").parallax();
	//$(".crafting").parallax();
	//$(".mission").parallax();
    
    var controller = new ScrollMagic.Controller();
    
	$("#scene").parallax({
		// scalarX: 0
	});

	$("#scene-two").parallax({
		// scalarX: 0
	});

	$("#scene-three").parallax({
		// scalarX: 0
	});
    
    tl = new TimelineMax({yoyo:true});

    tl.from(".step1", 4, {drawSVG:0, ease:Power1.easeInOut})
    
    var step1 = new ScrollMagic.Scene({
        triggerElement: "#step1",
    })
        .addTo(controller)
        .setTween(tl);
    
    tl2 = new TimelineMax({yoyo:true});

    tl2.from(".path", 4, {drawSVG:0, ease:Power1.easeInOut})
    
    var step2 = new ScrollMagic.Scene({
        triggerElement: "#step2",
    })
        .addTo(controller)
        .setTween(tl2);
    
    tl3 = new TimelineMax({yoyo:true});

    tl3.from(".step2", 4, {drawSVG:0, ease:Power1.easeInOut})
    
    var step3 = new ScrollMagic.Scene({
        triggerElement: "#step3",
    })
        .addTo(controller)
        .setTween(tl3);
    
    tl4 = new TimelineMax({yoyo:true});

    tl4.from(".step4", 4, {drawSVG:0, ease:Power1.easeInOut})
    
    var step4 = new ScrollMagic.Scene({
        triggerElement: "#step4",
    })
        .addTo(controller)
        .setTween(tl4);
    
    tl5 = new TimelineMax({yoyo:true});

    tl5.from(".st0", 4, {drawSVG:0, ease:Power1.easeInOut})
    
    var step4 = new ScrollMagic.Scene({
        triggerElement: "#step5",
    })
        .addTo(controller)
        .setTween(tl5);
    



});