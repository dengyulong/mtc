var GoodTypeEdit = function(){
	
    return {
        //main function to initiate the module
        init: function () {
        	$("#btnSave").click(function(){
        		$("#goodsTypeEditForm").submit();
        	});
        	
        	
        	$("#btnRemove").click(function(){
        		$.messager.confirm('请确认','您确定要删除吗，删除后不可恢复',function(r){   
        		    if (r){   
        		    	window.location.href = basePath + "/shop/goodsType/del?goodsTypeId=" + goodsTypeId + "&circle=" + circle;
        		    }   
        		});  
        		
        	});
        }

    };	
	
}();
