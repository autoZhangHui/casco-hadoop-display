/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('bigdata.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    id: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'bigdata.view.main.MainController',
        'bigdata.view.main.MainModel',
        'bigdata.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text:  'CASCO监测大数据平台'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title:  '平台信息',
        iconCls: 'fa-home',
        html: '<iframe id="frame_main" src="http://hadoop:50070/dfshealth.jsp" width="100%" height="100%"></iframe>'
    }, {
        title:  '交互分析',
        iconCls: 'fa-user',
        xtype: 'tabpanel',
        items: [{
        	xtype: 'analysis.dqtx',
        	title:'电气特性长期跟踪',
        }, {
        	xtype: 'analysis.rizhi',
        	title:'日志文件分析',
        }]
    }, {
        title: '分析历史',
        iconCls: 'fa-users',
        xtype: 'tabpanel',
        items: [{
        	xtype: 'result.history',
        	title:'分析历史',
        }]
    },{
        title: '数据管理',
        iconCls: 'fa-users',
        xtype: 'tabpanel',
        items: [{
        	xtype: 'hbase.gethabseinfo',
        	title:'数据库概览'
        },{
        	//xtype: 'hbase.gethabseinfo',
        	title:'数据库修改'
        }]
    
    }]
});
