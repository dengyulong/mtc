var Club = function() {
	

	var initContent = function() {
		$('#clubTable')
				.datagrid(
						{
							url : basePath + "/club/clubs",
//							queryParams : {
//								circleId : circleId
//							},
							// fit : true,
							fitColumns : true,
							singleSelect : false,
							idField : 'id',
							height : 'auto', //500， 固定高度，超出 有滚动条
							nowrap : false,
							loadMsg : "正在加载...",
							striped : true,
							columns : [ [
									{
										field : 'id',
										title : 'ID',
										width : 200,
										// hidden : true
										checkbox : true
									},/*
										 * { field : 'icon', title : '图标', width :
										 * 35, formatter : function(value, row,
										 * index) { return "<img src='${ctx}" +
										 * value + "'/>"; } },
										 */
									{
										field : 'icon',
										title : '图标',
										width : 15,
										formatter : function(value, row, index) {
											if(value != null && value.length > 0){
												return "<img width='35' height='35' class='icon' src='" + fileUrlPrefix + value + "'/>";
											}else{
												return null;
											}
										}
									},
									{
										field : 'title',
										title : '名称',
										width : 35,
										formatter : function(value, row, index) {
											var e = "<a href=" + basePath
													+ "/club/detail?clubId="
													+ row.id + ">" + value
													+ "</a>";
											return e;
										}
									},
									{
										field : 'introduction',
										title : '简介',
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
										field : 'userCount',
										title : '会员数',
										width : 20
									},									
									{
										field : 'strStatus',
										title : '状态',
										width : 20
									},	
									{
										field : 'action',
										title : '动作',
										width : 10,
										align : 'center',
										formatter : function(value, row, index) {
											
											var e = "<a href= " +basePath + "/club/detail?clubId="+row.id + " class='btn mini green' style='margin-right:5px;'><i class='icon-edit'></i> 修改</a>";
											
//											var e = "<a href='${basePath}/articleform?id="
//													+ row.id
//													+ "'>"
//													+ "<img src ='${ctx}/scripts/jquery-easyui-1.3.4/themes/icons/pencil.png' title='修改'></img></a>";
//											
											return e;
										},
										hidden : false
									}

							] ],
							pagination : true,
							pageSize : 10, // 默认页大小
							pageList : [ 10, 15, 20, 25, 30 ], // 每页显示大小
							//toolbar : '#toolbar',
							onLoadSuccess : function(data) {
								// predata = data;
								// alert(data);
								// alert("onLoadSuccess:" +
								// JSON.stringify(data));
							},
							onLoadError : function() {
								alert("加载失败.");
							},
							onBeforeLoad : function(param) {
								// alert("befor load, param:" + param);
							}

						});

		// 设置分页控件
		var p = $('#clubTable').datagrid('getPager');
		$(p).pagination({
			pageSize : 10,// 每页显示的记录条数，默认为10
			pageList : [ 10, 15, 20, 25, 30 ],//可以设置每页记录条数的列表 
			beforePageText : '第',//页数文本框前显示的汉字 
			afterPageText : '页    共 {pages} 页',
			displayMsg : '当前显示 {from} - {to} 条记录   共 {total} 条记录'
		});

	};
	
	var handSearch = function(){
		$('#clubTable').datagrid('load', {
			title:  $("#title").val(),
			username: $("#username").val(),
			status: $('#status').val()
		});
	};		
	
	
	/**
	 * 转向新增文章页面
	 */
	var handAdd = function(){
		//$('#addArticleModal').modal('show');
		window.location.href = basePath + "/club/add";
		
	};
	
	var handDel = function(){
		var rows = $('#clubTable').datagrid('getSelections');
		if (rows.length > 0) {
			//将id传回后台进行删除
			var ids = [];
			for (var i = 0; i < rows.length; i++) {
				ids.push(rows[i].id);
			}
			
			
			$.ajax({
				url : basePath + "/club/del/list",
				type : "POST",
				data : {
					ids : ids.join(',')
				},
				dataType : "json",
				success: function(result){
					if (result.error == 0) {
						$.messager.alert('提示', '删除成功', 'info');
						$('#clubTable').datagrid('reload');
					}else{
						$.messager.alert('提示', '删除失败', 'error');
					}
				}
			});
			
		}else{
			$.messager.alert('提示','请勾选需要删除的俱乐部!','info');
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
          	
        	$("#btnDel").click(function(){
        		var rows = $('#clubTable').datagrid('getSelections');
        		if (rows.length == 0) {
        			$.messager.alert('提示','请勾选需要删除的俱乐部!','info');
        			return;
        		}
        		$.messager.confirm('请确认','您确定要删除吗(删除后可恢复)',function(r){   
        		    if (r){   
        		    	handDel();
        		    }   
        		});  
        		
        	});
        }

    };	

}();