Ext.define('bigdata.view.result.Report', {
	extend: 'Ext.window.Window',
	xtype: 'result.report',
    width: 600,
    height: 600,
	initComponent: function(){
		var me = this;
		me.itmes = [{
			xtype: 'grid',
			store: Ext.create('Ext.data.Store', {
				data: me.report
			}),
			columns: [{
				text: 'title',
				dataIndex: 'title'
			},{
				text: 'description',
				dataIndex: 'dsp',
				flex: 1
			},{
				text: 'device',
				dataIndex: 'device'
			},{
				text: 'station',
				dataIndex: 'station'
			},{
				text: '报警',
				dataIndex: 'is_bj',
				renderer: function(v){
					return v?'报警':'正常';
				}
			}],
		}];
		me.listeners = {
			celldblclick: function(a,b,c,record){
				localStorage.report = JSON.stringify(record.getData());
				var graph = Ext.create('bigdata.view.result.Graph', {report: record});
			}
		};
		this.callParent();
	}
});