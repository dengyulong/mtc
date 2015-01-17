var ArticleEdit = function(){
	
	
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
	
	/**
	 * 修改文章审阅为已审
	 */
	var handReview = function(){
		var url = basePath+"/review";
		$.ajax({
			url: url,
			type: "POST",
			data : {
				articleId: $('#id').val()
			},
			success: function(result){
				history.go(-1);
			},
			dataType : "json"
		});
		
	};
	
	/**
	 * 添加评论
	 */
	var handComment = function(){
		var url = basePath+"/comment/add";
		$.ajax({
			url: url,
			type: "POST",
			data : {
				articleId: $('#id').val(),
				commenter: $("#commenter").val(),
				commentContent: $("#commentContent").val()
			},
			success: function(result){
				if (result.error == 0) {
					$("#commenter").val("");
					$("#commentContent").val("");
					$.messager.alert('提示', '操作成功', 'info');
				}else{
					$.messager.alert('提示', '操作失败', 'error');
				}
			},
			dataType : "json"
		});
	};
	
    return {
        //main function to initiate the module
        init: function () {
        	initImageFile();
        	
        	$("#btnSave").click(function(){
        		selectAllOptions($('#circleList')[0]);
        		$("#articleform").submit();
        	});
        	
        	
    		$("#btnReview").click(function(){
    			handReview();
    		});
    		
    		$("#btnComment").click(function(){
    			handComment();
    		});
        	
        }

    };	
	
}();
