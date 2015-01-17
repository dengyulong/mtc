var CircleList = function() {

	var initContent = function() {
		$('#circleTable')
				.datagrid(
						{
							url : basePath+"/circle/list",
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
									},
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
											var e = "<a href="+basePath+"/circle/show?circleId="
													+ row.id
													+ ">"
													+ value
													+ "</a>";
											return e;
										}
									},
									{
										field : 'rank',
										title : '级别',
										width : 20
									},
									{
										field : 'payStyle',
										title : '支付方式',
										width : 20,
										formatter : function(value, row,
												index) {
											if (value == 0) {
												return "免费";
											} else if (value == 1) {
                                                return "钥匙";
											} else if (value == 2) {
												return "金币";
											} else {
                                                return "";
											}
										}
									},
									{
										field : 'payAmount',
										title : '支付额度',
										width : 20
									},
									{
                                        field : 'active',
                                        title : '激活状态',
                                        width : 20,
                                        formatter : function(value, row,
                                                index) {
                                            if (value == true) {
                                                return "激活";
                                            } else if(value == false) {
                                                return "未激活";
                                            } else {
                                                return "";
                                            }
                                        }
                                    },									
									{
										field : 'strCreateTime',
										title : '创建时间',
										width : 20
									},									
									{
										field : 'action',
										title : '动作',
										width : 10,
										align : 'center',
										formatter : function(value, row, index) {
											var e = "<a href= " +basePath + "/circle/show?circleId="+row.id + " class='btn mini green' style='margin-right:5px;'><i class='icon-edit'></i> 修改</a>";
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
		var p = $('#circleTable').datagrid('getPager');
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
	var handAddCircle = function(){
		window.location.href =  basePath + "/circle/add";
	};

	/**
	 * 删除
	 */
	var handDelCircle = function(){
		var rows = $('#circleTable').datagrid('getSelections');
		if (rows.length > 0) {
			$.messager.confirm('请确认', '您确定要删除选择的领域吗？', function(b) {
				if (!b) {
					return;
				}
				//将id传回后台进行删除
				var ids = [];
				for (var i = 0; i < rows.length; i++) {
					ids.push(rows[i].id);
				}
				$.ajax({
					url : basePath+"/circle/del",
					type : "POST",
					data : {
						ids : ids.join(',')
					},
					success : function(result) {
						if (result.error == 0) {
							$.messager.alert('提示', '操作成功', 'info');
							$('#circleTable').datagrid('reload');
						} else {
							$.messager.alert('操作失败', result.msg, 'error');
						}
						$('#circleTable').datagrid('unselectAll');
					},
					/* beforeSend:function() {
					alert("beforeSend");
					},
					complete:function() {
					alert("complete");
					}, */

					error : function(XMLHttpRequest, textStatus,
							errorThrown) {
						alert("textStatus=" + textStatus + ", errorThrown="
								+ errorThrown.description);
					},
					dataType : "json"
				});

			});
		} else {
			$.messager.alert('提示', '请选择需要删除的圈子！', 'error');
		}
		
	};
	
	/**
	 * 删除领域
	 */
	var handDelCircle = function(){
		var rows = $('#circleTable').datagrid('getSelections');
		if (rows.length > 0) {
			
			$.messager.confirm('请确认', '您确定要删除选择的领域吗？', function(b) {
				if (!b) {
					return;
				}
				//将id传回后台进行删除
				var ids = [];
				for (var i = 0; i < rows.length; i++) {
					ids.push(rows[i].id);
				}
				
				
				$.ajax({
					url : basePath + "/circle/del",
					type : "POST",
					data : {
						ids : ids.join(',')
					},
					dataType : "json",
					success: function(result){
						if (result.error == 0) {
							$.messager.alert('提示', '删除成功', 'info');
							$('#circleTable').datagrid('reload');
						}else{
							$.messager.alert('提示', '删除失败', 'error');
						}
					}
				});
			});
			
			
		}else{
			$.messager.alert('提示','请勾选需要删除领域!','info');
		}
	};
	
	/**
	 * 激活领域
	 */
	var handActiveCircle = function(){
		
	    var rows = $('#circleTable').datagrid('getSelections'); 
	     if(rows.length > 0){
	       $.messager.confirm('请确认','您确定要激活所选择的领域吗？',function(b){
	         if(!b){
	           return;
	         }
	         //将id传回后台进行删除
	         var ids = [];
	         for(var i = 0; i < rows.length; i++){
	           if(rows[i].active == false) {
	               ids.push(rows[i].id);
	           }
	         }
	          if(ids.length == 0) {
	              $.messager.alert('提示','您选择的领域已激活！','error');
	              return;
	         }
	         
	          $.ajax(
	           {
	             url:basePath+"/circle/activation", 
	             type: "POST", 
	             data: {
	                ids: ids.join(',')
	             }, 
	             success: function(result){
	                if(result.error == 0){
	                  $.messager.alert('提示', '操作成功', 'info');
	                  $('#circleTable').datagrid('reload');
	                }else{
	                   $.messager.alert('操作失败',result.msg,'error');
	                }
	                $('#circleTable').datagrid('unselectAll'); 
	             }, 
	             /* beforeSend:function() {
	             alert("beforeSend");
	             },
	             complete:function() {
	             alert("complete");
	             }, */
	             
	             error: function (XMLHttpRequest, textStatus, errorThrown) {
	                alert("textStatus=" + textStatus + ", errorThrown=" + errorThrown.description);
	             },
	             dataType: "json"
	          } );
	       
	       });
	     }else{
	        $.messager.alert('提示','请选择需要激活的领域！','error');
	     } 
		
	};
	
	/**
	 * 失效
	 */
	var handDisableCircle = function(){
	     var rows = $('#circleTable').datagrid('getSelections'); 
	     if(rows.length > 0){
	       $.messager.confirm('请确认','您确定要冻结所选择的领域吗？',function(b){
	         if(!b){
	           return;
	         }
	         //将id传回后台进行删除
	         var ids = [];
	         for(var i = 0; i < rows.length; i++){
	           if(rows[i].active == true) {
	               ids.push(rows[i].id);
	           }
	         }
	          //console.info(ids.join(','));
	          if(ids.length == 0) {
	              $.messager.alert('提示','您选择的领域已冻结！','error');
	              return;
	         }
	         
	          $.ajax(
	           {
	             url:basePath + "/circle/inactivation", 
	             type: "POST", 
	             data: {
	                ids: ids.join(',')
	             }, 
	             success: function(result){
	                if(result.error == 0){
	                  $.messager.alert('提示', '操作成功', 'info');
	                  $('#circleTable').datagrid('reload');
	                }else{
	                   $.messager.alert('操作失败',result.msg,'error');
	                }
	                $('#circleTable').datagrid('unselectAll'); 
	             }, 
	             /* beforeSend:function() {
	             alert("beforeSend");
	             },
	             complete:function() {
	             alert("complete");
	             }, */
	             
	             error: function (XMLHttpRequest, textStatus, errorThrown) {
	                alert("textStatus=" + textStatus + ", errorThrown=" + errorThrown.description);
	             },
	             dataType: "json"
	          } );
	       
	       });
	     }else{
	        $.messager.alert('提示','请选择需要冻结的领域！','error');
	     } 
	};
	
	
	var handSearch = function(){
		$('#circleTable').datagrid('load', {
			key : $("#title").val()
		});
	};	
	
	
    return {
        //main function to initiate the module
        init: function () {
        
        	initContent();
        
        	$("#btnSearch").click(function(){
        		handSearch();
        	});
        	
        	$("#btnAddCircle").click(function(){
        		handAddCircle();
        	});
 
        	$("#btnDelCircle").click(function(){
        		handDelCircle();
        	});

        	$("#btnActiveCircle").click(function(){
        		handActiveCircle();
        	});
        	
        	$("#btnDisableCircle").click(function(){
        		handDisableCircle();
        	});
        	
        	$(window).resize(function(){
        		$('#circleTable').datagrid('resize');
        	});
        	
        }

    };	

}();