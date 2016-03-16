Ext.define('bigdata.view.analysis.Rizhi', {
	extend: 'Ext.panel.Panel',
	xtype: 'analysis.rizhi',
	id: 'rizhi',
	layout:{
		type: 'border'
	},
	initComponent: function() {
		var me = this;
		var store = Ext.create('Ext.data.TreeStore', {
			root: {
				expanded: true,
				children: [{
					text: '上海1号线',
					children: [{
						text: "人民广场站",
						children: [{text: "Omas", children: [{id: 'rmgc_ATP_over_speed', text: "ATP_over_speed", leaf: true}, {id: 'rmgc_EB_not_initiated_by_ATP', text: "EB_not_initiated_by_ATP", leaf: true}, {id: 'rmgc_Slip/Silde', text: "Slip/Silde", leaf: true}, {id: 'rmgc_Short_docking', text: "Short_docking", leaf: true}, {id: 'rmgc_Short_docking', text: "Short_docking", leaf: true}]}]
					}, {
						text: "徐家汇站",
						children: [{text: "Omas", children: {id:'xjh_ATP_over_speed',text: "ATP_over_speed", leaf: true}}]
					}, {
						text: "上海火车站站",
						children: [{text: "Omas", children: {id:'shhcz_ATP_over_speed',text: "ATP_over_speed", leaf: true}}]
					}, {
						text: "莘庄站",
						children: [{text: "Omas", children: {id:'xz_ATP_over_speed',text: "ATP_over_speed", leaf: true}}]
					}]
				}, {
					text: '上海3号线',
					children: [{
						text: "宝山路站",
						children: [{text: "Omas", children: {text: "ATP_over_speed", leaf: true}}]
					}, {
						text: "曹杨路站",
						children: [{text: "Omas", children: {text: "ATP_over_speed", leaf: true}}]
					}]
				}, {
					text: '上海10号线',
					children: [{
						text: "五角场站",
						children: [{text: "Omas", children: {text: "ATP_over_speed", leaf: true}}]
					}]
				},{

					text: '上海13号线',
					children: [{
						text: "大渡河路站",
						children: [{text: "Omas", children: [{id: 'ddhl_ATP_over_speed', text: "ATP_over_speed", leaf: true}, {id: 'ddhl_EB_not_initiated_by_ATP', text: "EB_not_initiated_by_ATP", leaf: true}, {id: 'ddhl_Slip/Silde', text: "Slip/Silde", leaf: true}, {id: 'ddhl_Short_docking', text: "Short_docking", leaf: true}, {id: 'ddhl_Short_docking', text: "Short_docking", leaf: true}]}]
					}, {
						text: "金运路站",
						children: [{text: "Omas", children: {id:'jyl_ATP_over_speed',text: "ATP_over_speed", leaf: true}}]
					}, {
						text: "丰庄站",
						children: [{text: "Omas", children: {id:'fz_ATP_over_speed',text: "fz_ATP_over_speed", leaf: true}}]
					}]
				
				}]
			}
		});
		me.selected = Ext.create('Ext.data.Store');
		me.result = Ext.create('Ext.data.Store');
		me.items = [{
			xtype: 'treepanel',
			title: '选择关键字',
			store: store,
			rootVisible: false,
			width: 250,
			region: 'west',
	        split: true,
	        collapsible: true,
			listeners: {
				itemclick: function(view, record, item, index, e, eOpts){
					me.selected.add(record);
				},
				itemdblclick: function(view, record, item, index, e, eOpts){
					me.selected.remove(record);
				}			
			},
		}, {
			xtype: 'grid',
			id: 'rizhi-result',
			region: 'south',
			title: '分析结果',
		    split: true,
		    collapsible: true,
	        collapsed: true,
		    store: me.result,
		    columns: [{
				text: '标题',
				dataIndex: 'title',
				width: 350
			},{
				text: '描述',
				dataIndex: 'data',
				flex: 1,
				renderer: function(d){
					return d.join('<p>');
				}
			},{
				text: '关键字',
				dataIndex: 'keywords',
				flex: 1,
				renderer: function(d){
					return d.join('<p>');
				}
			},{
				text: '异常数量',
				dataIndex: 'ext_total',
			},{
				text: '总数',
				dataIndex: 'total',
			}],
			tbar: [{
				xtype: 'button',
				text: '查看全部报告',
				handler: function() {
					var graph = Ext.create('bigdata.view.result.Graph', {type: 'rzall'});
					graph.show();
				}
			}],
		}, {
			xtype: 'grid',
			title: '分析配置',
			region: 'center',
			store: me.selected,
			columns: [{
				text: '关键字',
				dataIndex: 'text',
				flex: 1
			}, {
				text: '日志类型',
				renderer: function(a, b, record){
					return record.parentNode.getData().text;
				}
			}, {
				text: '车站',
				renderer: function(a, b, record){
					return record.parentNode.parentNode.getData().text;
				}
			}, {
				text: '线路',
				renderer: function(a, b, record){
					return record.parentNode.parentNode.parentNode.getData().text;
				}
			}],
			dockedItems: [{
				xtype: 'buttongroup',  
		        columns: 2,   
		        items: [{
					xtype: 'datetimefield',
					format: 'Y-m-d H:i:s',
					width: 350,
			        fieldLabel: '开始时间',
			        name: 'start_at',
			        id: 'rzfx-start-at'
				},{
					xtype: 'datetimefield',
					format: 'Y-m-d H:i:s',
					width: 350,
			        fieldLabel: '结束时间',
			        name: 'end_at',
			        id: 'rzfx-end-at'
				},{
			    	xtype: 'button',
			    	text: '开始分析',
			    	handler: function(){
			    		var keys = [];
			    		me.selected.each(function(item){
			    			keys.push(item.get('id'));
			    		});
			    		var data = {
			    			method: 'rizhi',
			    			keys: keys,
			    			start_at: Ext.getCmp('rzfx-start-at').getValue(),
			    			end_at: Ext.getCmp('rzfx-end-at').getValue(),
			    		};console.log(data)
			    		var myMask = new Ext.LoadMask({
			    		    msg : 'Processing...',
			    		    target: Ext.getCmp('rizhi')
			    		});

			    		myMask.show();
						Ext.Ajax.request({
							url: 'http://hadoop:8080/cascoweb/backrestapi',
							method: 'post',
							jsonData: data,
							callback: function(a, b, response) {
								myMask.hide();
								console.log(response);
								localStorage.allrizhi = response.responseText;
								Ext.getCmp('rizhi-result').getStore().setData(Ext.decode(response.responseText).results);
								Ext.getCmp('rizhi-result').expand();
							}
						});
			    	}
			    }]
			}]
		}];
		this.callParent();
	}
});