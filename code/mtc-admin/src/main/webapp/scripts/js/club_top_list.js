var ClubTop = function() {
	
	var initContent = function initDatagrid() {

		$('#topTable')
				.datagrid(
						{
							url : basePath + "/club/top/list?circleId=" + circleId,
							//fit : true,
							fitColumns : true,
							singleSelect : false,
							idField : 'id',
							height : 500,
							nowrap : false,
							loadMsg : "正在加载...",
							striped : true,
							columns : [ [
									{
										field : 'id',
										title : 'ID',
										width : 200,
										//hidden : true
										checkbox : true
									},/* 
									{
										field : 'icon',
										title : '图标',
										width : 35,
										formatter : function(value, row,
												index) {
											return "<img src='${ctx}" + value + "'/>";
										}
									}, */
									{
										field : 'title',
										title : '标题',
										width : 35,
										formatter : function(value, row,
                                                index) {
                                           var e = "<a href='"+basePath+"/club/top/topform?id=" + row.id + "'>"
                                                   + value +  "</a>";
                                            return e;
                                        }
									},
									{
										field : 'circleName',
										title : '领域',
										width : 20
									},										
									{
										field : 'createBy',
										title : '创建人',
										width : 20
									},
                                    {
                                        field : 'strCreateTime',
                                        title : '创建时间',
                                        width : 20
                                    },
                                    {
                                        field : 'topTime',
                                        title : '是否已置顶',
                                        width : 20,
                                        formatter: function(value,row,index){
                                        	if(value == null){
                                        		return "未置顶";
                                        	}
                                        	return "已置顶";
                                        }
                                    },
                                    {
										field : 'action',
										title : '动作',
										width : 10,
										align : 'center',
										formatter : function(value, row,
												index) {
											var e = "<a href= " +basePath + "/club/top/topform?id="+row.id + " class='btn mini green' style='margin-right:5px;'><i class='icon-edit'></i> 修改</a>";
											return e;
											
										},
										hidden : false
									}

							] ],
							pagination : true,
							pageSize : 10, //默认页大小
							pageList : [ 10, 15, 20, 25, 30 ], //每页显示大小
							toolbar : '#toolbar',
							onLoadSuccess : function(data) {
								//predata = data;
								//alert(data);
								//alert("onLoadSuccess:" + JSON.stringify(data));
							},
							onLoadError : function() {
								alert("加载失败.");
							},
							onBeforeLoad : function(param) {
								//alert("befor load, param:" + param);
							}

						});

		//设置分页控件  
		var p = $('#topTable').datagrid('getPager');
		$(p).pagination({
			pageSize : 10,//每页显示的记录条数，默认为10 
			pageList : [ 10, 15, 20, 25, 30 ],//可以设置每页记录条数的列表 
			beforePageText : '第',//页数文本框前显示的汉字 
			afterPageText : '页    共 {pages} 页',
			displayMsg : '当前显示 {from} - {to} 条记录   共 {total} 条记录'
		});
	};

	
	var handSearch = function(){
		$('#topTable').datagrid('load', {
			title:  $("#title").val()
		});
	};		
	
	
	/**
	 * 转向新增页面
	 */
	var handAdd = function(){
		//$('#addArticleModal').modal('show');
		window.location.href = basePath + "/club/top/add?circleId=" + circleId;
		
	};
	
	/**
	 * 取消置顶
	 */
	var handCancleTop = function(){
		var rows = $('#topTable').datagrid('getSelections');
		if(rows == null || rows.length == 0){
			$.messager.alert('提示', '请选择置顶项！', 'error');
			return;
		}
		//将id传回后台进行删除
		var ids = [];
		for (var i = 0; i < rows.length; i++) {
			ids.push(rows[i].id);
		}
		
		$.ajax({
			url : basePath + "/club/top/cancelTop",
			type:"POST",
			dataType: "json",
			data:{
				ids:ids.join(','),
			},
			success:function(result){
				if(result.error == 0){
					$.messager.alert('提示', '操作成功！', 'info');
					/*$.messager.show({
						title : '操作成功',
						msg : '操作成功',
						timeout : '2000'
					});*/
					$('#topTable').datagrid('reload');
				}else{
					$.messager.alert('操作失败', result.msg, 'error');
				}
			}
			
		});
		
	};
	
	/**
	 * 置顶
	 */
	var handTop = function(){
		var rows = $('#topTable').datagrid('getSelections');
		if(rows == null || rows.length == 0){
			$.messager.alert('提示', '请选择置顶项！', 'error');
			return;
		}
		//将id传回后台进行删除
		var ids = [];
		for (var i = 0; i < rows.length; i++) {
			ids.push(rows[i].id);
		}
		
		$.ajax({
			url : basePath + "/club/top/top",
			type:"POST",
			dataType: "json",
			data:{
				ids:ids.join(','),
			},
			success:function(result){
				if(result.error == 0){
					$.messager.alert('提示', '操作成功！', 'info');
					/*$.messager.show({
						title : '操作成功',
						msg : '操作成功',
						timeout : '2000'
					});*/
					$('#topTable').datagrid('reload');
				}else{
					$.messager.alert('操作失败', result.msg, 'error');
				}
			}
			
		});
		
	};
	
	/**
	 * 逻辑删除 
	 */
	var handDel = function(){
		var rows = $('#topTable').datagrid('getSelections');
		if (rows.length > 0) {
			//将id传回后台进行删除
			var ids = [];
			for (var i = 0; i < rows.length; i++) {
				ids.push(rows[i].id);
			}
			
			
			$.ajax({
				url : basePath + "/club/top/del",
				type : "POST",
				data : {
					ids : ids.join(',')
				},
				dataType : "json",
				success: function(result){
					if (result.error == 0) {
						$.messager.alert('提示', '删除成功', 'info');
						$('#topTable').datagrid('reload');
					}else{
						$.messager.alert('提示', '删除失败', 'error');
					}
				}
			});
			
		}else{
			$.messager.alert('提示','请勾选需要删除的俱乐部!','error');
		}
		
	};	
	
    return {
        //main function to initiate the module
        init: function () {
        	
        	initContent();
          	
        	$("#btnAdd").click(function(){
        		handAdd();
        	});
        	
          	$("#btnSearch").click(function(){
        		handSearch();
        	});
          	
          	$("#btnCancelTop").click(function(){
          		handCancleTop();
          	});
          	
          	$("#btnTop").click(function(){
          		handTop();
          	});
          	
          	
        	$("#btnDel").click(function(){
        		var rows = $('#topTable').datagrid('getSelections');
        		if (rows.length == 0) {
        			$.messager.alert('提示','请勾选需要删除的俱乐部!','error');
        			return;
        		}
        		$.messager.confirm('请确认','您确定要删除吗？',function(r){   
        		    if (r){   
        		    	handDel();
        		    }   
        		});  
        		
        	});
        }

    };	

}();