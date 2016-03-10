Ext.define('bigdata.view.hbase.addtables', {
	extend: 'Ext.window.Window',
	xtype: 'habse.addtables',
	width: 650,
	height: 300,
	title: '新建数据表',
	initComponent: function(){
		var me = this;
		me.items=[{
	        xtype: 'textfield',
	        name: 'name',
	        fieldLabel: '数据表名称',
	        id:'tablename',
	        allowBlank: false  // requires a non-empty value
	    }, {
	        xtype: 'textfield',
	        name: 'email',
	        fieldLabel: 'Faminly 1:',
	        id:'family1'
	    }, {
	        xtype: 'textfield',
	        name: 'email',
	        fieldLabel: 'Faminly 2:',
	        id:'family2'
	    }, {
	        xtype: 'textfield',
	        name: 'email',
	        fieldLabel: 'Faminly 3:',
	        id:'family3'
	    },{	
	    	xtype: 'buttongroup',  
	        columns: 2,
	        items:[{
	        	xtype:'button',
		    	text:'创建',
		    	id:'tableSave',
		    	handler: function(){
					addtables.hide();
				
		    	}
	        },{
	        	xtype:'button',
		    	text:'取消',
		    	id:'tableCancel'
	        }]
	    	
	    	
	    }];
		this.callParent();
	}
});