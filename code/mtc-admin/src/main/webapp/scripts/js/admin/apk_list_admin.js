var ApkList = function() {

	var initContent = function() {
		$('#apkTable')
				.datagrid(
						{
							url : basePath+"/android/list",
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
										hidden : true,
										checkbox : true
									},									
									{
										field : 'versionCode',
										title : '版本号',
										width : 15
									},
									{
										field : 'versionName',
										title : '版本名称',
										width : 20
									},
									{
										field : 'url',
										title : 'apk文件路径',
										width : 50,
										formatter : function(value, row, index) {
											//var e = "<a href=" + value + "</a>";
											//return e;
											return "<a href=" + value + ">" + value + "</a>";
										}
									},
									{
										field : 'strPublishTime',
										title : '发布时间',
										width : 20
									},
									{
                                        field : 'forced',
                                        title : '是否强制升级',
                                        width : 10,
                                        formatter : function(value, row,
                                                index) {
                                        	return value?"是":"否";
                                        }
                                    },									
									{
										field : 'remark',
										title : '备注',
										width : 30
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
		var p = $('#apkTable').datagrid('getPager');
		$(p).pagination({
			pageSize : 10,// 每页显示的记录条数，默认为10
			pageList : [ 10, 15, 20, 25, 30 ],// 可以设置每页记录条数的列表
			beforePageText : '第',// 页数文本框前显示的汉字
			afterPageText : '页    共 {pages} 页',
			displayMsg : '当前显示 {from} - {to} 条记录   共 {total} 条记录'
		});

	};
	
	
	/**
	 * 转向新增页面
	 */
	var handAddApk = function(){
		window.location.href =  basePath + "/android/publish";
	};

	
	
	var handSearch = function(){
		/*
		$('#apkTable').datagrid('load', {
			key : $("#title").val()
		});
		*/
	};	
	
	
    return {
        //main function to initiate the module
        init: function () {
        
        	initContent();
        
        	/*
        	$("#btnSearch").click(function(){
        		handSearch();
        	});
        	*/
        	
        	$("#btnAddApk").click(function(){
        		window.location.href =  basePath + "/android/publish";
        	});
        	
        	
        	$(window).resize(function(){
        		$('#apkTable').datagrid('resize');
        	});
        	
        }

    };	

}();