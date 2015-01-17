var Order = function() {
	

	var initContent = function() {
		$('#orderTable')
				.datagrid(
						{
							url : basePath + "/shop/order/list?circle=" + circle,
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
										width : 10,
										// hidden : true
										checkbox : true
									},
									{
										field : 'orderSn',
										title : '订单号',
										width : 50,
										formatter : function(value, row, index) {
											var e = "<a href=" + basePath
													+ "/shop/order/detail?orderId="
													+ row.id + ">" + value
													+ "</a>";
											return e;
										}
									},
									{
										field : 'totalAmount',
										title : '总金额',
										width : 20

									},
									{
										field : 'createBy',
										title : '下单人',
										width : 30

									},
									{
										field : 'area',
										title : '地区',
										width : 20

									},
									{
										field : 'receiverAddress',
										title : '详细地址',
										width : 30

									},
									{
										field : 'phone',
										title : '联系电话',
										width : 20

									},
									{
										field : 'strPayTime',
										title : '付款时间',
										width : 20

									},
									{
										field : 'strShippingTime',
										title : '发货时间',
										width : 20

									},
									{
										field : 'strConfirmTime',
										title : '确认收货时间',
										width : 20

									},
									{
										field : 'strStatus',
										title : '订单状态',
										width : 30

									},
									{
										field : 'deliveryFee',
										title : '配送费用',
										width : 20
									},									
									{
										field : 'remark',
										title : '备注',
										width : 30
									},
									{
										field : 'action',
										title : '动作',
										width : 25,
										align : 'center',
										formatter : function(value, row, index) {
											var e = "<a href= " +basePath + "/shop/order/detail?orderId="+row.id + " class='btn mini green' style='margin-right:5px;'><i class='icon-edit'></i> 修改</a>";
											
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
		var p = $('#orderTable').datagrid('getPager');
		$(p).pagination({
			pageSize : 10,// 每页显示的记录条数，默认为10
			pageList : [ 10, 15, 20, 25, 30 ],//可以设置每页记录条数的列表 
			beforePageText : '第',//页数文本框前显示的汉字 
			afterPageText : '页    共 {pages} 页',
			displayMsg : '当前显示 {from} - {to} 条记录   共 {total} 条记录'
		});

	};
	
	var handSearch = function(){
		$('#orderTable').datagrid('load', {
			orderSn: $("#orderSn").val(),
		});
	};		
	
	
	/**
	 * 转向新增商品类型页面
	 */
	var handAdd = function(){
		//$('#addArticleModal').modal('show');
		window.location.href = basePath + "/shop/goods/add?circle=" + circle;
		
	};
	
	var handDel = function(){
		var rows = $('#goodsTypeTable').datagrid('getSelections');
		if (rows.length > 0) {
			//将id传回后台进行删除
			var ids = [];
			for (var i = 0; i < rows.length; i++) {
				ids.push(rows[i].id);
			}
			
			
			$.ajax({
				url : basePath + "/shop/goodsType/del",
				type : "POST",
				data : {
					ids : ids.join(',')
				},
				dataType : "json",
				success: function(result){
					if (result.error == 0) {
						$.messager.alert('提示', '删除成功', 'info');
						$('#goodsTypeTable').datagrid('reload');
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
          	
          	$("#btnSearch").click(function(){
        		handSearch();
        	});
          	
          	
        	$(window).resize(function(){
        		$('#orderTable').datagrid('resize');
        	});
        }

    };	

}();