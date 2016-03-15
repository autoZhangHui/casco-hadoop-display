Ext.define('bigdata.view.hbase.gethbaseinfo', {
	extend: 'Ext.panel.Panel',
	xtype: 'hbase.gethabseinfo',
	layout:{
		type: 'border'
	},
	initComponent: function(){
		var me = this;
		var historyStore = Ext.create('Ext.data.Store');
		Ext.Ajax.request({
			url: 'http://hadoop:8080/cascoweb/restdqtx',
			method: 'post',
			jsonData: {method: 'gethabseinfo'},
			callback: function(a, b, response) {
				var parsed = Ext.decode(response.responseText).result;
				historyStore.setHbaseTableData(parsed);
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
				dataIndex: 'tablename',
				flex: 1
			},{
				text:'数据表状态',
				dataIndex:'tablestates',
				flex:2
			}],
			listeners: {
		        itemclick: function(view, record, item, index, e, eOpts){
					localStorage.allreport = JSON.stringify({results: record.getData().data});
		        	Ext.getCmp('tabledetail').getStore().setData(record.get('data'));
		    	}
		    },
		    tbar: [{
		    	xtype: 'button',
		    	text: '刷新',
		    	handler: function(){
		    		Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/restdqtx',
						method: 'post',
						jsonData: {method: 'gethabseinfo'},
						callback: function(a, b, response) {
							var parsed = Ext.decode(response.responseText).result;
							historyStore.setHbaseTableData(parsed);
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
			id: 'tabledetail',
			store: Ext.create('Ext.data.Store'),
			columns: [{
				text: '表名称',
				dataIndex: 'tablename'
			},{
				text: '所属车站',
				dataIndex: 'station',
				flex: 1
			},{
				text: '日期',
				dataIndex: 'date'
			},{
				text: '设备',
				dataIndex: 'device'
			}],
			tbar: [{
				xtype: 'button',
				text: '暂时挂起数据表',
				handler: function() {
					//可以考虑Ext.getCmp().getstore().getdata()或者其他方法来实现
					var data={
						method: 'disabletable',
						tablename:Ext.getCmp('tabledetals').getStore().getData().get('tablename')
					};
					Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/restdqtx',
						method: 'post',
						jsonData: data,
						callback: function(a, b, response) {
							var parsed = Ext.decode(response.responseText).result;
							historyStore.setData(parsed);
						}
					});
				}
			},{
				xtype: 'button',
				text: '启用数据表',
				handler: function() {
					Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/restdqtx',
						method: 'post',
						jsonData: {method: 'enabletable'},
						callback: function(a, b, response) {
							var parsed = Ext.decode(response.responseText).result;
							historyStore.setData(parsed);
						}
					});
				}
			},{
				xtype: 'button',
				text: '删除数据表',
				handler: function() {
					Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/restdqtx',
						method: 'post',
						jsonData: {method: 'droptable'},
						callback: function(a, b, response) {
							var parsed = Ext.decode(response.responseText).result;
							historyStore.setData(parsed);
						}
					});
				}
			
			}],
			listeners: {
				celldblclick: function(a,b,c,record){
					localStorage.report = JSON.stringify(record.getData());
					var graph = Ext.create('bigdata.view.result.Graph', {report: record, type: 'dq'});
					graph.show();
				}
			}
		}];
		this.callParent();
	}
});