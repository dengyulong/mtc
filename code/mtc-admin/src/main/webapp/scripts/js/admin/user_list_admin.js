var User = function() {

	var initContent = function() {
		$('#userTable')
				.datagrid(
						{
							url : basePath + "/users/list",
							/*queryParams : {
								circleId : circleId
							},
							fit : true,*/
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
										title : '头像',
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
										field : 'username',
										title : '领域号',
										width : 20,
										formatter : function(value, row,
                                                index) {
                                           var e = "<a href='"+basePath+"/userform?id=" + row.id + "'>"
                                                   + value +  "</a>";
                                            return e;
                                        }
									},
									{
										field : 'nickname',
										title : '用户昵称',
										width : 20

									},
									{
										field : 'introduction',
										title : '用户简介',
										width :  40,
										formatter : function(value, row, index) {
											if (value != null
													&& value.length > 30) {
												return value.substr(0, 30)
														+ "......";
											}

											return value;
										}

									},
									{
										field : 'strJoinTime',
										title : '注册时间',
										width : 20

									},
									{
										field : 'source',
										title : '来源',
										width : 20

									},
									{
										field : 'email',
										title : '邮箱',
										width : 20

									},
									{
										field : 'action',
										title : '动作',
										width : 10,
										align : 'center',
										formatter : function(value, row, index) {
											var e = "<a href= " +basePath + "/userform?id="+row.id + " class='btn mini green' style='margin-right:5px;'><i class='icon-edit'></i> 修改</a>";
											return e;
										},
										hidden : false
									}
									
							] ],
							pagination : true,
							pageSize : 10, // 默认页大小
							pageList : [ 10, 15, 20, 25, 30 ], // 每页显示大小
							toolbar : '#toolbar',
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
		var p = $('#userTable').datagrid('getPager');
		$(p).pagination({
			pageSize : 10,// 每页显示的记录条数，默认为10
			pageList : [ 10, 15, 20, 25, 30 ],//可以设置每页记录条数的列表 
			beforePageText : '第',//页数文本框前显示的汉字 
			afterPageText : '页    共 {pages} 页',
			displayMsg : '当前显示 {from} - {to} 条记录   共 {total} 条记录'
		});

	};
	
	
	var initAddModel = function(){
//		$('#addArticleModal').modal({
//			backdrop: false,
//			show: false
//			//remote:  basePath + "/content/articles"
//		});
//		
	};
	
	
	/**
	 * 禁用
	 */
	var handDisable = function(){
		var rows = $('#userTable').datagrid('getSelections');
		if (rows.length > 0) {
			//将id传回后台进行删除
			var usernames = [];
			for (var i = 0; i < rows.length; i++) {
				usernames.push(rows[i].user);
			}
			
			
			$.ajax({
				url : basePath + "/circle/user/disable",
				type : "POST",
				data : {
					usernames : usernames.join(',')
				},
				dataType : "json",
				success: function(result){
					if (result.error == 0) {
						$.messager.alert('提示', '操作成功', 'info');
						$('#userTable').datagrid('reload');
					}else{
						$.messager.alert('提示', '操作失败', 'error');
					}
				}
			});
			
		}else{
			$.messager.alert('提示','请勾选需要禁用的用户!','info');
		}
		
	};
	
	
	/**
	 * 启用
	 */
	var handEnable = function(){
		var rows = $('#userTable').datagrid('getSelections');
		if (rows.length > 0) {
			//将id传回后台进行删除
			var usernames = [];
			for (var i = 0; i < rows.length; i++) {
				usernames.push(rows[i].user);
			}
			
			
			$.ajax({
				url : basePath + "/circle/user/enable",
				type : "POST",
				data : {
					usernames : usernames.join(',')
				},
				dataType : "json",
				success: function(result){
					if (result.error == 0) {
						$.messager.alert('提示', '操作成功', 'info');
						$('#userTable').datagrid('reload');
					}else{
						$.messager.alert('提示', '操作失败', 'error');
					}
				}
			});
			
		}else{
			$.messager.alert('提示','请勾选需要启用的用户!','info');
		}
		
	};
	
	
	/**
	 * 删除
	 */
	var handDel = function(){
		var rows = $('#userTable').datagrid('getSelections');
		if (rows.length > 0) {
			//将id传回后台进行删除
			var usernames = [];
			for (var i = 0; i < rows.length; i++) {
				usernames.push(rows[i].user);
			}
			
			
			$.ajax({
				url : basePath + "/circle/user/remove",
				type : "POST",
				data : {
					usernames : usernames.join(',')
				},
				dataType : "json",
				success: function(result){
					if (result.error == 0) {
						$.messager.alert('提示', '操作成功', 'info');
						$('#userTable').datagrid('reload');
					}else{
						$.messager.alert('提示', '操作失败', 'error');
					}
				}
			});
			
		}else{
			$.messager.alert('提示','请勾选需要删除的用户!','info');
		}
		
	};
	
	
	var handSearch = function(){
		$('#userTable').datagrid('load', {
			username:  $("#username").val(),
			nickname: $("#nickname").val()
		});
	};
	
    return {
        //main function to initiate the module
        init: function () {
        	initContent();
        	
        	//initAddModel();
        	
        	$("#btnSearch").click(function(){
        		handSearch();
        	});
        	
        	$("#btnDisable").click(function(){
        		handDisable();
        	});

        	$("#btnEnable").click(function(){
        		handEnable();
        	});
 
        	$("#btnDel").click(function(){
        		handDel();
        	});
        	
        	$(window).resize(function(){
        		$('#userTable').datagrid('resize');
        	});
        	
        }

    };	

}();