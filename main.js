let s = skrollr.init({
    // section: 0, 100, 150, 200 (100, 50, 50)
    // bar: 0, 100, 150 (100, 50)
		constants: {
			box: '150p'
		},
	});


$('[data-fancybox="individual"]').fancybox({
  caption : function(instance,item) {
    return $(this).closest('figure').find('figcaption').html();
  }
});

$('[data-fancybox="family"]').fancybox({
  caption : function(instance,item) {
    return $(this).closest('figure').find('figcaption').html();
  }
});

$('[data-fancybox="community"]').fancybox({
  caption : function(instance,item) {
    return $(this).closest('figure').find('figcaption').html();
  }
});

$('[data-fancybox="culture"]').fancybox({
  caption : function(instance,item) {
    return $(this).closest('figure').find('figcaption').html();
  }
});

$('[data-fancybox="politics"]').fancybox({
  caption : function(instance,item) {
    return $(this).closest('figure').find('figcaption').html();
  }
});
