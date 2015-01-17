var GoodsAdd = function(){
	
	
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
                    $('#logo').val(data.result);
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
            	//alert("ee");
            	//console.info(data);
                //$('#imageViewer').attr('src','#');
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

	var handAdd = function(){
		
		var isNew = false;
		var isHot = false;
		var isBest = false;
		if($('#isNew').attr('checked') == 'checked'){
			isNew = true;
		}

		if($('#isHot').attr('checked') == 'checked'){
			isHot = true;
		}
		
		if($('#isBest').attr('checked') == 'checked'){
			isBest = true;
		}	
		
		
		$.ajax({
			url : basePath + "/shop/goods/add",
			type : "POST",
			data : {
				goodsTypeId : $("#goodsTypeId").val(),
				goodsName : $("#goodsName").val(),
				goodsSn : $("#goodsSn").val(),
				price : $("#price").val(),
				logo : $("#logo").val(),
				storePlace : $("#storePlace").val(),
				weight : $("#weight").val(),
				store : $("#store").val(),
				score : $("#score").val(),
				isNew : isNew,
				isHot : isHot,
				isBest : isBest,
				supply : $("#supply").val(),
				introduction : $("#introduction").val(),
				remark: $("#remark").val(),
				circle : $("#circle").val()
			},
			dataType : "json",
			success: function(result){
				window.location.href = basePath + "/shop/goodsType/to?circle=" + circle;
			}
		});
		
	};
	
	return {
        //main function to initiate the module
        init: function () {
        	initImageFile();
        	$('#goodsAddForm').submit(function(){
        		handAdd();
        		return false;
        	});
        	
        }

    };	
	
}();
