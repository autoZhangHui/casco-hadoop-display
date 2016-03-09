Ext.define('bigdata.view.result.History', {
	extend: 'Ext.panel.Panel',
	xtype: 'result.history',
	layout:{
		type: 'border'
	},
	initComponent: function(){
		var me = this;
		var historyStore = Ext.create('Ext.data.Store');
		Ext.Ajax.request({
			url: 'http://hadoop:8080/cascoweb/restdqtx',
			method: 'post',
			jsonData: {method: 'history'},
			callback: function(a, b, response) {
				var parsed = Ext.decode(response.responseText).result;
				historyStore.setData(parsed);
			}
		});
		me.items = [{
			xtype: 'grid',
			region: 'west',
			title: '分析列表',
			width: '50%',
			split: true,
	        collapsible: true,
	        store: historyStore,
			columns: [{
				text: '日期',
				dataIndex: 'time',
				flex: 1
			}],
			listeners: {
		        itemclick: function(view, record, item, index, e, eOpts){
					localStorage.allreport = JSON.stringify({results: record.getData().data});
		        	Ext.getCmp('fxjg').getStore().setData(record.get('data'));
		    	}
		    },
		    tbar: [{
		    	xtype: 'button',
		    	text: '刷新',
		    	handler: function(){
		    		Ext.Ajax.request({
						url: 'http://hadoop:8080/cascoweb/restdqtx',
						method: 'post',
						jsonData: {method: 'history'},
						callback: function(a, b, response) {
							var parsed = Ext.decode(response.responseText).result;
							historyStore.setData(parsed);
						}
					});
		    	}
		    }]
		},{
			xtype: 'grid',
			region: 'center',
			title: '分析结果',
			id: 'fxjg',
			store: Ext.create('Ext.data.Store'),
			columns: [{
				text: '标题',
				dataIndex: 'title'
			},{
				text: '描述',
				dataIndex: 'dsp',
				flex: 1
			},{
				text: '设备',
				dataIndex: 'device'
			},{
				text: '车站',
				dataIndex: 'station'
			},{
				text: '结果',
				dataIndex: 'is_bj',
				renderer: function(v){
					return v?'异常':'正常';
				}
			}],
			tbar: [{
				xtype: 'button',
				text: '查看全部报告',
				handler: function() {
					var graph = Ext.create('bigdata.view.result.Graph', {type: 'dqall'});
					graph.show();
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