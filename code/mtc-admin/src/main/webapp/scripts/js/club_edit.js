var ClubEdit = function(){
	
	
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
            	//alert("ee");
            	//console.info(data);
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

	
	var initImageFileIntro = function(){
		
		$("input[id^='imageFileIntr_']").fileupload({
	        url:basePath+"/fileupload",
	        type:'POST',
	        maxFileSize:5000000,
	        acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,
 			dataType : 'text',
			autoUpload:true,
			pasteZone:null,
			add: function (e, data) {
				
				var cid = $(this).attr("id");
				cid = cid.substring(cid.indexOf("_")+1);
			    $('#imageViewerIntr_'+cid).attr('src', ctx+'/scripts/jQuery-File-Upload/img/loading.gif');
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
				var cid = $(this).attr("id");
				cid = cid.substring(cid.indexOf("_")+1);
                if(data.result != null && data.result != "") {
                    $('#imageViewerIntr_'+cid).attr('src', fileUrlPrefix + data.result);
                    $('#imageIntr_'+cid).val(data.result);
                }
                else {
                	 $('#imageIntr_'+cid).attr('src','#');
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
	
	
	var initMusicFile = function(){
		
		$('#bmusicFile').fileupload({
	        url:basePath+"/fileupload",
	        type:'POST',
	        maxFileSize:5000000,
	        acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,
 			dataType : 'text',
			autoUpload:true,
			pasteZone:null,
			add: function (e, data) {
			    $('#musicViewer').attr('src', ctx+'/scripts/jQuery-File-Upload/img/loading.gif');
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
                	 $('#musicViewer').attr('src','#');
                     $('#bmusic').val(data.result);
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
               // $('#imageViewer').attr('src','#');
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
		
	
    return {
        //main function to initiate the module
        init: function () {
        	initImageFile();
        	initImageFileIntro();
        	initMusicFile();
        	
        	$("#btnSave").click(function(){
    			//组配payTypeAndAmounts
    			var count = 0;
    			var payTypeAndAmounts = [];
    			$("input[id ^='payTypeId_']").each(function(){
    				count++;
    				if($(this).attr('checked') == 'checked'){
    					payTypeAndAmounts.push($(this).val() + "=" + $('#payAmount_'+$(this).val()).val());
    				}
    				
    			});
    			
    			//变成字符串
    			$('#payTypeAndAmounts').val(payTypeAndAmounts.join(','));
    			
        		$("#clubEditForm").submit();
        	});
        	
        	
        	$("#btnRemove").click(function(){
        		$.messager.confirm('请确认','您确定要删除吗，删除后不可恢复',function(r){   
        		    if (r){   
        		    	window.location.href = basePath + "/club/del?clubId=" + clubId;
        		    }   
        		});  
        		
        	});
        }

    };	
	
}();
