var ArticleAdd = function(){
	
	
	var initImageFile = function(){
		
		$('#imageFile').fileupload({
	        url:basePath+"/fileupload",
	        type:'POST',
	        maxFileSize:5000000,
	        acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,
 			dataType : 'text',
			autoUpload:true,
			pasteZone:null,
			add: function (e, data) {
			    $('#imageViewer').attr('src', ctx+'/scripts/jQuery-File-Upload/img/loading.gif');
			    //alert("befor submit");
                data.submit();
            },
            send:function(e, data) {
                //alert(data.files.length);
                return true;
            },
            done: function (e, data) {
            	//alert(data);
            	//alert(data.jqXHR.responseText);
            	//console.info(data);
            	//alert(data.result);
            	//console.info(data.result);
                if(data.result != null && data.result != "") {
                    $('#imageViewer').attr('src', fileUrlPrefix + data.result);
                    $('#image').val(data.result);
                }
                else {
                    $('#imageViewer').attr('src','#');
                }
                //alert(JSON.stringify(data.result));
                //alert(data.result.error);
            },
            success: function(result, textStatus, jqXHR){
            	//alert("aa");
            	//alert(result);
            	//console.info(jqXHR);
            },
            always:function(e, data) {
                //$('#iconViewer').attr('src','#');
                //alert("always data.result:" + data.result);
                //alert("always data.textStatus:" + data.textStatus);
                //alert(JSON.stringify(data));
                
            },
            fail: function(e, data) {
                $('#imageViewer').attr('src','#');
                //alert("fail data.errorThrown:" + data.errorThrown);
                //alert("fail data.textStatus:" + data.textStatus);
                //alert("fail e:" + JSON.stringify(e.toString()));
                //alert(JSON.stringify(data));
            },
            progressall:function(e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                //alert("progress:" + progress + "%");
            }
            
		});
		
	};
	
	var commentArray = [];
	
	/**
	 * 添加评论
	 */
	var handComment = function(){
		if($("#commenter").val() == null || $("#commenter").val().length == 0){
			return;
		}
		var comment = {
			user : $("#commenter").val(),
			content : $("#commentContent").val()
		};
		commentArray.push(comment);
		$("#commentModal").modal('hide');
		
		$("#commenter").val('');
		$("#commentContent").val('');
		
	};
	
    return {
        //main function to initiate the module
        init: function () {
        	initImageFile();
        	
        	$("#articleform").submit(function(){
        		 selectAllOptions($('#circleList')[0]);
        		 $("#commentJson").val(JSON.stringify(commentArray));
        	});
        	
        	$("#btnSaveComment").click(function(){
        		handComment();
        	});
        	
        }

    };	
	
}();
