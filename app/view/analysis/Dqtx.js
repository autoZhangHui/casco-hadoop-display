Ext.define('bigdata.view.analysis.Dqtx', {
	extend: 'Ext.panel.Panel',
	xtype: 'analysis.dqtx',
	id: 'dxtx',
	layout:{
		type: 'border'
	},
	initComponent: function() {
		var me = this;
		var zhanstore1 = Ext.create('Ext.data.TreeStore',{
			root:{
				expanded: true,
				children:[{
					text: '上海1号线',
					children: [{
						text: "人民广场站",
						children: [{id: 'rmgc:1#', text: "1#", leaf: true}, {id: 'rmgc:2#', text: "2#", leaf: true}
						, {id: 'rmgc:3#', text: "3#", leaf: true}
						, {id: 'rmgc:4#', text: "4#", leaf: true}
						, {id: 'rmgc:5#', text: "5#", leaf: true}
						, {id: 'rmgc:6#', text: "6#", leaf: true}
						, {id: 'rmgc:7#', text: "7#", leaf: true}
						, {id: 'rmgc:8#', text: "8#", leaf: true}
						, {id: 'rmgc:9#', text: "9#", leaf: true}
						, {id: 'rmgc:10#', text: "10#", leaf: true}
						]
					}, {
						text: "徐家汇",
						children: [{id: 3, text: "1#", leaf: true}, {id: 4, text: "2#", leaf: true}]
					}, {
						text: "上海火车站",
						children: [{text: "1#", leaf: true}, {text: "2#", leaf: true}]
					}, {
						text: "莘庄站",
						children: [{text: "1#", leaf: true}, {text: "2#", leaf: true}]
					}]
				}, {
					text: '上海3号线',
					children: [{
						text: "宝山路站",
						children: [{text: "1＃", leaf: true}, {text: "2＃", leaf: true}]
					}, {
						text: "曹杨路站",
						children: [{text: "1＃", leaf: true}, {text: "2＃", leaf: true}]
					}]
				}, {
					text: '上海10号线',
					children: [{
						text: "江湾体育场站",
						children: [{id: 'jwtyc:1#', text: "1#", leaf: true}, {id: 'jwtyc:2#', text: "2#", leaf: true}
						, {id: 'jwtyc:3#', text: "3#", leaf: true}
						, {id: 'jwtyc:4#', text: "4#", leaf: true}
						, {id: 'jwtyc:5#', text: "5#", leaf: true}
						, {id: 'jwtyc:6#', text: "6#", leaf: true}
						, {id: 'jwtyc:7#', text: "7#", leaf: true}
						, {id: 'jwtyc:8#', text: "8#", leaf: true}
						, {id: 'jwtyc:9#', text: "9#", leaf: true}
						, {id: 'jwtyc:10#', text: "10#", leaf: true}
						]
					},{
						text: "五角场站",
						children: [{id: 'wjc:1#', text: "1#", leaf: true}, {id: 'wjc:2#', text: "2#", leaf: true}
						, {id: 'wjc:3#', text: "3#", leaf: true}
						, {id: 'wjc:4#', text: "4#", leaf: true}
						, {id: 'wjc:5#', text: "5#", leaf: true}
						, {id: 'wjc:6#', text: "6#", leaf: true}
						, {id: 'wjc:7#', text: "7#", leaf: true}
						, {id: 'wjc:8#', text: "8#", leaf: true}
						, {id: 'wjc:9#', text: "9#", leaf: true}
						, {id: 'wjc:10#', text: "10#", leaf: true}
						]
					}]
				},{

					text: '上海13号线',
					children: [{
						text: "大渡河路站",
						children: [{id: 'ddhl:1#', text: "1#", leaf: true}
						, {id: 'ddhl:2#', text: "2#", leaf: true}
						, {id: 'ddhl:3#', text: "3#", leaf: true}
						, {id: 'ddhl:4#', text: "4#", leaf: true}
						, {id: 'ddhl:5#', text: "5#", leaf: true}
						, {id: 'ddhl:6#', text: "6#", leaf: true}
						, {id: 'ddhl:7#', text: "7#", leaf: true}
						, {id: 'ddhl:8#', text: "8#", leaf: true}
						, {id: 'ddhl:9#', text: "9#", leaf: true}
						, {id: 'ddhl:10#', text: "10#", leaf: true}
						]
					},{
						text: "金运路站",
						children: [{id: 'jyl:1#', text: "1#", leaf: true}
						, {id: 'jyl:2#', text: "2#", leaf: true}
						, {id: 'jyl:3#', text: "3#", leaf: true}
						, {id: 'jyl:4#', text: "4#", leaf: true}
						, {id: 'jyl:5#', text: "5#", leaf: true}
						, {id: 'jyl:6#', text: "6#", leaf: true}
						, {id: 'jyl:7#', text: "7#", leaf: true}
						, {id: 'jyl:8#', text: "8#", leaf: true}
						, {id: 'jyl:9#', text: "9#", leaf: true}
						, {id: 'jyl:10#', text: "10#", leaf: true}
						]
					},{
						text: "丰庄站",
						children: [{id: 'fz:1#', text: "1#", leaf: true}
						, {id: 'fz:2#', text: "2#", leaf: true}
						, {id: 'fz:3#', text: "3#", leaf: true}
						, {id: 'fz:4#', text: "4#", leaf: true}
						, {id: 'fz:5#', text: "5#", leaf: true}
						, {id: 'fz:6#', text: "6#", leaf: true}
						, {id: 'fz:7#', text: "7#", leaf: true}
						, {id: 'fz:8#', text: "8#", leaf: true}
						, {id: 'fz:9#', text: "9#", leaf: true}
						, {id: 'fz:10#', text: "10#", leaf: true}
						]
					
					}]
				
				}]
			}
		});
		var zhanstore2 = Ext.create('Ext.data.TreeStore',{
			root:{
				expanded: true,
				children:[{
					text: '上海1号线',
					children: [{
						text: "人民广场站",
						children: [{id: 'rmgc:1G', text: "ⅠG", leaf: true}, {id: 'rmgc:2G', text: "ⅡG", leaf: true}
						, {id: 'rmgc:3G', text: "ⅢG", leaf: true}
						, {id: 'rmgc:1DG', text: "1DG", leaf: true}
						, {id: 'rmgc:2DG', text: "2DG", leaf: true}
						, {id: 'rmgc:3DG', text: "3DG", leaf: true}
						, {id: 'rmgc:4DG', text: "4DG", leaf: true}
						, {id: 'rmgc:5DG', text: "5DG", leaf: true}
						, {id: 'rmgc:6DG', text: "6DG", leaf: true}
						, {id: 'rmgc:2-4DG', text: "2-4DG", leaf: true}
						]
					}, {
						text: "徐家汇",
						children: [{id: 3, text: "ⅠG", leaf: true}, {id: 4, text: "ⅡG", leaf: true}]
					}, {
						text: "上海火车站",
						children: [{text: "ⅠG", leaf: true}, {text: "ⅡG", leaf: true}]
					}, {
						text: "莘庄站",
						children: [{text: "ⅠG", leaf: true}, {text: "ⅡG", leaf: true}]
					}]
				}, {
					text: '上海3号线',
					children: [{
						text: "宝山路站",
						children: [{text: "ⅠG", leaf: true}, {text: "ⅡG", leaf: true}]
					}, {
						text: "曹杨路站",
						children: [{text: "ⅠG", leaf: true}, {text: "ⅡG", leaf: true}]
					}]
				}, {
					text: '上海10号线',
					children: [{
						text: "江湾体育场站",
						children: [{id: 'jwtyc:1G', text: "ⅠG", leaf: true}
						,{id: 'jwtyc:2G', text: "ⅡG", leaf: true}
						, {id: 'jwtyc:3G', text: "ⅢG", leaf: true}
						, {id: 'jwtyc:1DG', text: "1DG", leaf: true}
						, {id: 'jwtyc:2DG', text: "2DG", leaf: true}
						, {id: 'jwtyc:3DG', text: "3DG", leaf: true}
						, {id: 'jwtyc:4DG', text: "4DG", leaf: true}
						, {id: 'jwtyc:5DG', text: "5DG", leaf: true}
						, {id: 'jwtyc:6DG', text: "6DG", leaf: true}
						, {id: 'jwtyc:2-4DG', text: "2-4DG", leaf: true}
						]
					},{
						text: "五角场站",
						children: [{id: 'wjc:1G', text: "ⅠG", leaf: true}
						, {id: 'wjc:2G', text: "ⅡG", leaf: true}
						, {id: 'wjc:3G', text: "ⅢG", leaf: true}
						, {id: 'wjc:1DG', text: "1DG", leaf: true}
						, {id: 'wjc:2DG', text: "2DG", leaf: true}
						, {id: 'wjc:3DG', text: "3DG", leaf: true}
						, {id: 'wjc:4DG', text: "4DG", leaf: true}
						, {id: 'wjc:5DG', text: "5DG", leaf: true}
						, {id: 'wjc:6DG', text: "6DG", leaf: true}
						, {id: 'wjc:2-4DG', text: "2-4DG", leaf: true}
						]
					}]
				},{

					text: '上海13号线',
					children: [{
						text: "大渡河路站",
						children: [{id: 'ddhl:1G', text: "ⅠG", leaf: true}
						, {id: 'ddhl:2G', text: "ⅡG", leaf: true}
						, {id: 'ddhl:3G', text: "ⅢG", leaf: true}
						, {id: 'ddhl:1DG', text: "1DG", leaf: true}
						, {id: 'ddhl:2DG', text: "2DG", leaf: true}
						, {id: 'ddhl:3DG', text: "3DG", leaf: true}
						, {id: 'ddhl:4DG', text: "4DG", leaf: true}
						, {id: 'ddhl:5DG', text: "5DG", leaf: true}
						, {id: 'ddhl:6DG', text: "6DG", leaf: true}
						, {id: 'ddhl:2-4DG', text: "2-4DG", leaf: true}
						]
					},{
						text: "金运路站",
						children: [{id: 'jyl:1G', text: "ⅠG", leaf: true}
						, {id: 'jyl:2G', text: "ⅡG", leaf: true}
						, {id: 'jyl:3G', text: "ⅢG", leaf: true}
						, {id: 'jyl:1DG', text: "1DG", leaf: true}
						, {id: 'jyl:2DG', text: "2DG", leaf: true}
						, {id: 'jyl:3DG', text: "3DG", leaf: true}
						, {id: 'jyl:4DG', text: "4DG", leaf: true}
						, {id: 'jyl:5DG', text: "5DG", leaf: true}
						, {id: 'jyl:6DG', text: "6DG", leaf: true}
						, {id: 'jyl:2-4DG', text: "2-4DG", leaf: true}
						]
					},{

						text: "丰庄站",
						children: [{id: 'fz:1G', text: "ⅠG", leaf: true}
						, {id: 'fz:2G', text: "ⅡG", leaf: true}
						, {id: 'fz:3G', text: "ⅢG", leaf: true}
						, {id: 'fz:1DG', text: "1DG", leaf: true}
						, {id: 'fz:2DG', text: "2DG", leaf: true}
						, {id: 'fz:3DG', text: "3DG", leaf: true}
						, {id: 'fz:4DG', text: "4DG", leaf: true}
						, {id: 'fz:5DG', text: "5DG", leaf: true}
						, {id: 'fz:6DG', text: "6DG", leaf: true}
						, {id: 'fz:2-4DG', text: "2-4DG", leaf: true}
						]
					
					}]
				}]
			}
		});
		var zhanstore3 = Ext.create('Ext.data.TreeStore',{
			root:{
				expanded: true,
				children:[{
					text: '上海1号线',
					children: [{
						text: "人民广场站",
						children: [{id: 'shanghai:1G', text: "轨道1输出", leaf: true}
						, {id: 'shanghai:2G', text: "轨道2输出", leaf: true}
						, {id: 'shanghai:3G', text: "轨道3输出", leaf: true}
						]
					}, {
						text: "徐家汇",
						children: [{id: 3, text: "轨道1输出", leaf: true}, {id: 4, text: "轨道2输出", leaf: true}]
					}, {
						text: "上海火车站",
						children: [{text: "轨道1输出", leaf: true}, {text: "轨道2输出", leaf: true}]
					}, {
						text: "莘庄站",
						children: [{text: "轨道1输出", leaf: true}, {text: "轨道2输出", leaf: true}]
					}]
				}, {
					text: '上海3号线',
					children: [{
						text: "宝山路站",
						children: [{text: "轨道1输出", leaf: true}, {text: "轨道2输出", leaf: true}]
					}, {
						text: "曹杨路站",
						children: [{text: "轨道1输出", leaf: true}, {text: "轨道2输出", leaf: true}]
					}]
				}, {
					text: '上海10号线',
					children: [{
						text: "江湾体育场站",
						children: [{id: 'shanghai:1G', text: "轨道1输出", leaf: true}, {id: 'shanghai:2G', text: "轨道2输出", leaf: true}
						, {id: 'shanghai:3G', text: "轨道3输出", leaf: true}
						]
					},{
						text: "五角场站",
						children: [{id: 'shanghai:1G', text: "轨道1输出", leaf: true}, {id: 'shanghai:2G', text: "轨道2输出", leaf: true}
						, {id: 'shanghai:3G', text: "轨道3输出", leaf: true}
						]
					}]
				},{

					text: '上海13号线',
					children: [{
						text: "大渡河路站",
						children: [{id: 'ddhl:1G', text: "轨道1输出", leaf: true}
						, {id: 'ddhl:2G', text: "轨道2输出", leaf: true}
						, {id: 'ddhl:3G', text: "轨道3输出", leaf: true}
						]
					},{
						text: "金运路站",
						children: [{id: 'jyl:1G', text: "轨道1输出", leaf: true}
						, {id: 'jyl:2G', text: "轨道2输出", leaf: true}
						, {id: 'jyl:3G', text: "轨道3输出", leaf: true}
						]
					},{
						text: "丰庄站",
						children: [{id: 'fz:1G', text: "轨道1输出", leaf: true}
						, {id: 'fz:2G', text: "轨道2输出", leaf: true}
						, {id: 'fz:3G', text: "轨道3输出", leaf: true}
						]
					
					}]
				
				}]
			}
		});
		var bllxdata1 = [{id: 'dwzlbs', name: "定位直流表示电压"},
						{id: 'dwjlbs', name: "定位交流表示电压"},
						{id: 'fwzlbs', name: "反位直流表示电压"},
						{id: 'fwjlbs', name: "反位交流表示电压"}];
		var bllxdata2 = [{id: 'gddy', name: "轨道电压"},
						 {id: 'gdxwj', name: "轨道相位角"}];
		var bllxdata3 = [{id: 'scdy', name: "输出电压"}];
		var sblxdata = [{
			name: '道岔',
			zhanchildren: zhanstore1,
			blchildren: bllxdata1
		},{
			name: '轨道区段',
			zhanchildren: zhanstore2,
			blchildren: bllxdata2
		},{
			name: '电源屏',
			zhanchildren: zhanstore3,
			blchildren: bllxdata3
		}];
		me.selected = Ext.create('Ext.data.Store');
		me.result = Ext.create('Ext.data.Store');
		me.items = [{
			xtype: 'form',
			region: 'north',
	        split: true,
	        collapsible: true,
	        bodyPadding: '10 0',
	        title: '分析配置',
			items: [{
				xtype: 'buttongroup',  
		        columns: 2,
		        bodyBorder: false,
		        border: false,
		        items: [{
			    	xtype: 'combo',
				    fieldLabel: '设备类型',
				    id:'sblx',
				    store: Ext.create('Ext.data.Store', {
				    	data: sblxdata
				    }),
				    queryMode: 'local',
				    valueField: 'name',
				    displayField:'name',
				    listeners: {
				    	select: function(c, record){
				    		Ext.getCmp('bllx').setValue("");
				    		Ext.getCmp('bllx').getStore().setData(record.get('blchildren'));
				    		Ext.getCmp('sbtree').setStore(record.get('zhanchildren'));
				    		me.selected.removeAll();
				    	}
				    }
			    },{
			    	xtype: 'tagfield',
				    fieldLabel: '采集项',
				    id:'bllx',
				    store: Ext.create('Ext.data.Store'),
				    queryMode: 'local',
				    valueField: 'id',
				    displayField:'name'
			    },{
					xtype: 'datetimefield',
					format: 'Y-m-d H:i:s',
					width: 300,
			        fieldLabel: '开始时间',
			        name: 'start_at',
			        id: 'dqfx-start-at'
				},{
					xtype: 'datetimefield',
					format: 'Y-m-d H:i:s',
					width: 300,
			        fieldLabel: '结束时间',
			        name: 'end_at',
			        id: 'dqfx-end-at'
				},{
			    	xtype: 'button',
			    	text: '开始分析',
			    	handler: function(){
			    		var devids = [];
			    		me.selected.each(function(item){
			    			devids.push(item.get('id'));
			    		});
			    		var data = {
			    			method: 'dqfx',
			    			type: Ext.getCmp('bllx').getValue(),
			    			sbtype:Ext.getCmp('sblx').getValue(),
			    			devices: devids,
			    			start_at: Ext.getCmp('dqfx-start-at').getValue(),
			    			end_at: Ext.getCmp('dqfx-end-at').getValue(),
			    		};console.log(data)
			    		var myMask = new Ext.LoadMask({
			    		    msg : 'Processing...',
			    		    target: Ext.getCmp('dxtx')
			    		});

			    		myMask.show();
						Ext.Ajax.request({
							url: 'http://hadoop:8080/cascoweb/backrestapi',
							method: 'post',
							jsonData: data,
							callback: function(a, b, response) {
								myMask.hide();
								console.log(response);
								localStorage.allreport = response.responseText;
								Ext.getCmp('dqtx-result').getStore().setData(Ext.decode(response.responseText).results);
								Ext.getCmp('dqtx-result').expand();
								
							}
						});
			    	}
			    }],
		    }]
		},{
			xtype: 'treepanel',
			title: '选择设备',
			store: Ext.create('Ext.data.TreeStore'),
			id: 'sbtree',
			rootVisible: false,
			width: 200,
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
		},{
			xtype: 'grid',
			id: 'dqtx-result',
			region: 'south',
			store: me.result,
	        split: true,
	        collapsible: true,
	        collapsed: true,
	        title: '分析结果',
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
		}, {
			xtype: 'grid',
			title: '已选列表',
			region: 'center',
			store: me.selected,
			columns: [{
				text: '设备名称',
				dataIndex: 'text',
				flex: 1
			}, {
				text: '车站',
				renderer: function(a, b, record){
					return record.parentNode.getData().text;
				}
			}, {
				text: '线路',
				renderer: function(a, b, record){
					return record.parentNode.parentNode.getData().text;
				}
			}],
		}];
		this.callParent();
	}
});