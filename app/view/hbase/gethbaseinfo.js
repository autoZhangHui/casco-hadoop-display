Ext.define('bigdata.view.hbase.gethbaseinfo', {
	extend: 'Ext.panel.Panel',
	xtype: 'hbase.gethabseinfo',
	layout:{
		type: 'border'
	},
	initComponent: function(){
		var me = this;
		var historyStore = Ext.create('Ext.data.Store');
		//local testing code
		// var testdata=[{rowkey:'123',
		// 	  states:'12131',
		// 	  st_ch:'1213',
		// 	  create_time:'201207',
		// 	  end_time:'120301',
		// 	  var_ch:'1231'
		// 	},
		// 	{rowkey:'123',
		// 	  states:'12131',
		// 	  st_ch:'1213',
		//    	  create_time:'201208',
		// 	  end_time:'120301',
		// 	  var_ch:'1231'}
		// 	];
		// historyStore.setData(testdata);
		//console.log(historyStore);
		Ext.Ajax.request({
			url: 'http://hadoop:8080/cascoweb/backrestapi',
			method: 'post',
			jsonData: {method: 'gethbaseinfo',tablename:'htablesInAll'},
			callback: function(a, b, response) {
				var parsed = Ext.decode(response.responseText).result;
				historyStore.setData(parsed);
			}
		});
		me.items = [{
			xtype: 'grid',
			region: 'west',
			title: 'hbase数据表总揽',
			width: '50%',
			split: true,
	        collapsible: true,
	        store: historyStore,
			columns: [{
				text: '数据表名称',
				dataIndex: 'rowkey',
				flex: 1
			},{
				text:'数据表状态',
				dataIndex:'states',
				flex:2
			},{
				text:'所属车站',
				dataIndex:'st_ch',
				flex:2
			}],
			listeners: {
		        itemclick: function(view, record, item, index, e, eOpts){        	
					var jsonData=[{
						tablename:record.get('rowkey'),
						st_ch:record.get('st_ch'),
						var_ch:record.get('var_ch'),
						create_time:record.get('create_time'),
						end_time:record.get('end_time')
					}];
					console.log(jsonData);
		        	Ext.getCmp('tabledetails').getStore().setData(jsonData);

		    	}
		    },
		    tbar: [{
		    	xtype: 'button',
		    	text: '刷新',
		    	handler: function(){
		    		Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/backrestapi',
						method: 'post',
						jsonData: {method: 'gethabseinfo',tablename:'htablesInAll'},
						callback: function(a, b, response) {
							var parsed = Ext.decode(response.responseText).result;
							historyStore.setData(parsed);
						}
					});
		    	}
		    },{
		    	xtype: 'button',
		    	text: '新建数据表',
		    	handler: function(){
					var addtables = Ext.create('bigdata.view.hbase.addtables');
					addtables.show();
				
		    	}
		    
		    }]
		},{
			xtype: 'grid',
			region: 'center',
			title: '数据表描述',
			id: 'tabledetails',
			store: Ext.create('Ext.data.Store'),
			columns: [{
				text: '表名称',
				dataIndex: 'tablename'
			},{
				text: '所属车站',
				dataIndex: 'st_ch',
				flex: 1
			},{
				text: '开始日期',
				dataIndex: 'create_time'
			},{
				text: '结束日期',
				dataIndex: 'end_time'
			},{
				text: '变量类型',
				dataIndex: 'var_ch'
			}],
			tbar: [{
				xtype: 'button',
				text: '暂时挂起数据表',
				handler: function() {
					//可以考虑Ext.getCmp().getstore().getdata()或者其他方法来实现
					var data={
						method: 'disabletable',
						tablename:Ext.getCmp('tabledetails').getStore().getData().get('rowkey')
					};
					Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/backrestapi',
						method: 'post',
						jsonData: data,
						callback: function(a, b, response) {
							// var parsed = Ext.decode(response.responseText).result;
							// historyStore.setData(parsed);
						}
					});
				}
			},{
				xtype: 'button',
				text: '启用数据表',
				handler: function() {
					var data={
						method: 'enabletable',
						tablename:Ext.getCmp('tabledetails').getStore().getData().get('rowkey')
					};
					Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/backrestapi',
						method: 'post',
						jsonData: data,
						callback: function(a, b, response) {
							// var parsed = Ext.decode(response.responseText).result;
							// historyStore.setData(parsed);
						}
					});
				}
			},{
				xtype: 'button',
				text: '删除数据表',
				handler: function() {
					var data={
						method: 'enabletable',
						tablename:Ext.getCmp('tabledetails').getStore().getData().get('rowkey')
					};
					Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/backrestapi',
						method: 'post',
						jsonData: data,
						callback: function(a, b, response) {
							// var parsed = Ext.decode(response.responseText).result;
							// historyStore.setData(parsed);
						}
					});
				}
			
			}],
			listeners: {
				celldblclick: function(a,b,c,record){
					// localStorage.report = JSON.stringify(record.getData());
					// var graph = Ext.create('bigdata.view.result.Graph', {report: record, type: 'dq'});
					// graph.show();
				}
			}
		}];
		this.callParent();
	}
});