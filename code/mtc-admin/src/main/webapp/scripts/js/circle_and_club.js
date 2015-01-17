var CircleAndClub = function() {
	

	var initContent = function() {

	};
	
	
	
    return {
        //main function to initiate the module
        init: function () {
        	
        	initContent();
          	
        	
 		   $("#tabClubs").click(function(){
			   //已经加载过
			   if($('#tab_3_2 div').length != 0){
				   return;
			   }
			   
			   $.ajax({
					url : basePath+"/manager/clubs",
					type : "GET",
					data : {},
					success: function(success){
						$("#tab_3_2").append(success);
					}
				   
			   });
			   
		   });
        	
        }

    };	

}();