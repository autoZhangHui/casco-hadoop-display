Ext.define('bigdata.view.hbase.addtables', {
			extend : 'Ext.window.Window',
			xtype : 'habse.addtables',
			width : 350,
			height : 250,
			title : '新建数据表',
			//layout:'fit',
			//buttonAlign:'center',
			initComponent : function() {
				var me = this;
				me.items = [{
					xtype : 'textfield',
					name : 'name',
					fieldLabel : '数据表名称',
					id : 'tablename',
					allowBlank : false,
					//layout:'center'
						// requires a non-empty value
					}, {
					xtype : 'textfield',
					name : 'email',
					fieldLabel : 'Faminly 1:',
					id : 'family1'
				}, {
					xtype : 'textfield',
					name : 'email',
					fieldLabel : 'Faminly 2:',
					id : 'family2'
				}, {
					xtype : 'textfield',
					name : 'email',
					fieldLabel : 'Faminly 3:',
					id : 'family3'
				}, {
					xtype : 'buttongroup',
					columns : 2,
					items : [{
								xtype : 'button',
								text : '创建',
								id : 'tableSave',
								handler : function() {
									var data={
										method:'addnewtables',
										tablename:Ext.getCmp('tablename').getValue(),
										cf1:Ext.getCmp('family1').getValue(),
										cf2:Ext.getCmp('family2').getValue(),
										cf3:Ext.getCmp('family3').getValue()
									};
									Ext.Ajax.request({
										url: 'http://hadoop:8080/cascoweb/backrestapi',
										method: 'post',
										jsonData: data,
										callback: function(a, b, response) {
											var parsed = Ext.decode(response.responseText).result;
											historyStore.setData(parsed);
										}
									});								
									me.close();

								}
							}, {
								xtype : 'button',
								text : '取消',
								id : 'tableCancel',
								handler:function(){
									me.close();
								}
							}]

				}];
				this.callParent();
			}
		});