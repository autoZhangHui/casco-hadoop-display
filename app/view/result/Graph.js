Ext.define('bigdata.view.result.Graph', {
	extend: 'Ext.window.Window',
	xtype: 'result.graph',
	width: 1300,
	height: 450,
	title: '分析报告',
	initComponent: function(){
		var me = this;
		if(me.type=='dqall'){
			me.html = '<iframe id="frame_main" src="allresult.html" width="100%" height="100%"></iframe>'
		}else if(me.type == 'dq'){
			me.html = '<iframe id="frame_main" src="result.html" width="100%" height="100%"></iframe>'
		}else if(me.type == 'rzall'){
			me.html = '<iframe id="frame_main" src="rzall.html" width="100%" height="100%"></iframe>'
		}
		this.callParent();
	}
});