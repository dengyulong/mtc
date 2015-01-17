var Content = function() {

	var initContent = function() {
		$('#articleTable')
				.datagrid(
						{
							url : basePath + "/content/articles",
							queryParams : {
								circleId : circleId
							},
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
										field : 'title',
										title : '标题',
										width : 35,
										formatter : function(value, row, index) {
											var e = "<a href=" + basePath
													+ "/content/article/detail?articleId="
													+ row.id + ">" + value
													+ "</a>";
											return e;
										}
									},
									{
										field : 'author',
										title : '作者',
										width : 20

									},
									{
										field : 'score',
										title : '积分',
										width : 20

									},
									{
										field : 'tag',
										title : 'TAG',
										width : 30,
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
										field : 'lastModifiedString',
										title : '最后修改时间',
										width : 20
									},
									{
										field : 'action',
										title : '动作',
										width : 10,
										align : 'center',
										formatter : function(value, row, index) {
											
											var e = "<a href= " +basePath + "/content/article/detail?articleId="+row.id + " class='btn mini green' style='margin-right:5px;'><i class='icon-edit'></i> 修改</a>";
											
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
		var p = $('#articleTable').datagrid('getPager');
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
	 * 转向新增文章页面
	 */
	var handAdd = function(){
		//$('#addArticleModal').modal('show');
		window.location.href =  basePath + "/content/article/add?circleId="+circleId;
		
	};
	
	
	var handDel = function(){
		var rows = $('#articleTable').datagrid('getSelections');
		if (rows.length > 0) {
			//将id传回后台进行删除
			var ids = [];
			for (var i = 0; i < rows.length; i++) {
				ids.push(rows[i].id);
			}
			
			
			$.ajax({
				url : basePath + "/content/article/del/list",
				type : "POST",
				data : {
					ids : ids.join(',')
				},
				dataType : "json",
				success: function(result){
					if (result.error == 0) {
						$.messager.alert('提示', '删除成功', 'info');
						$('#articleTable').datagrid('reload');
					}else{
						$.messager.alert('提示', '删除失败', 'error');
					}
				}
			});
			
		}else{
			$.messager.alert('提示','请勾选需要删除文章!','info');
		}
		
	};
	
	
	var handSearch = function(){
		$('#articleTable').datagrid('load', {
			key:  $("#title").val(),
			username: $("#username").val()
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
          	
        	$("#btnAddArticle").click(function(){
        		handAdd();
        	});

        	$("#btnDelArticle").click(function(){
        		handDel();
        	});
        	
        	$(window).resize(function(){
        		$('#articleTable').datagrid('resize');
        	});
        	
        }

    };	

}();