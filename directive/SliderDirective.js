app.directive('slider', ['$document', function($document) {
  return {
      restrict: 'AE',
      template: "<div id=slider class=slider><button id=pd-button class=pd-toggle-button ng-click=toggle()> {{toggleButton ? '>': '<'}} </button>	</div>",
      link: function(scope, element, attr) {
        var startX = 0, x = 0;

          element.css({
            position: 'relative',
            //transition: 'all 0.3s ease',
            float: 'right',
            right: '0px',
            width: '0px',       
            height: '100%',            
            border: '10px inset',
            cursor: 'col-resize',
            '-moz-box-shadow': '-4px 4px 10px black',
            '-webkit-box-shadow': '-4px 4px 10px black'             
        });
	  
	  	  
          angular.element(document.querySelector( '#pd-button' )).bind("click", function(e){
		  if (!scope.toggleButton) { // Make the hamburger OFF
			  x = 0;              
				  element.css({          
					right:  0 + 'px'
				  });
				  
				  angular.element(document.querySelector( '#pd-menu' )).css({
					display: 'none',
					right: 0 +  "px",
					width: 0 +   "px"					
				  });
		  } else { // Make the hamburger ON
			  x = -200;
			  element.css({          
				right:  200 + 'px'
			  });
			  
			  angular.element(document.querySelector( '#pd-menu' )).css({
                //transition: 'all 0.3s ease',
				display: 'block',
				right: 0 +  "px",
				width: 200 +   "px"                  
			  });
		  }
       });
	  

        element.on('mousedown', function(event) {            
            // Prevent default dragging of selected content
            event.preventDefault();
            startX = event.pageX - x;      
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {        
            x = event.pageX - startX;
                element.css({                
                right:  -x + 'px'
            });	

            angular.element(document.querySelector( '#pd-menu' )).css({
                display: 'block',
                right: 0 +  "px",
                width: - x +   "px"
            });
        }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);