var filters = {
    course: $('#course-select').val(),
    language: $('#language-select').val(),
    location: $('#location-select').val(),
    type: $('#type-select').val()
  };
  $('.course').each(function() {
    var course = $(this);
    var variants = course.find('.variant');
  
    // Find variants that match the selected filters
    var matchingVariants = variants.filter(function() {
      var variant = $(this);
      return (variant.data('language') == filters.language &&
              variant.data('location') == filters.location &&
              variant.data('type') == filters.type);
    });
  
    // Show matching variants
    matchingVariants.show();
  
    // Hide non-matching variants
    variants.not(matchingVariants).hide();
  });
  function getFilterString(course, matchingFilters) {
    var filters = ['language', 'location', 'type'];
    var filterString = '';
  
    // Add matching filters to string
    for (var i = 0; i < filters.length; i++) {
      var filter = filters[i];
      if (matchingFilters.indexOf(filter) > -1) {
        filterString += filter + ', ';
      }
    }
  
    // Add non-matching filters to string
    for (var i = 0; i < filters.length; i++) {
      var filter = filters[i];
      if (matchingFilters.indexOf(filter) == -1) {
        filterString += 'no ' + filter + ', ';
      }
    }
  
    // Remove trailing comma and space
    filterString = filterString.slice(0, -2);
  
    return filterString;
  }
  $('.course').each(function() {
    var course = $(this);
    var variants = course.find('.variant');
  
    // Find variants that match the selected filters
    var matchingVariants = variants.filter(function() {
      var variant = $(variant.data('language') == filters.language &&
      variant.data('location') == filters.location &&
      variant.data('type') == filters.type);
      });
      
      // Show matching variants
      matchingVariants.show();
      
      // Hide non-matching variants
      variants.not(matchingVariants).hide();
      
      // Get array of matching filters
      var matchingFilters = [];
      for (var i = 0; i < filters.length; i++) {
      var filter = filters[i];
      if (matchingVariants.filter('[data-' + filter + '="' + filters[filter] + '"]').length > 0) {
      matchingFilters.push(filter);
      }
      }
      
      // Set filter string
      var filterString = getFilterString(course, matchingFilters);
      course.find('.filter-info').text(filterString);
      });
        