define(function(require) {
	var View = require('streamhub-schedule');

	return function(sdk, opts) {
        opts = opts || {};
        var col = [{
		        pk: 1001,
		        fields: {
		            start_date: new Date(2013, 2, 26, 12, 0),
		            end_date: new Date(2013, 2, 26, 14, 0),
		            conv_id: 2001,
		            title: "My title1",
		            description: "My description1"
		        }
		    },{
		        pk: 1002,
		        fields: {
		            start_date: new Date(2013, 2, 26, 14, 0),
		            end_date: new Date(2013, 2, 26, 16, 0),
		            conv_id: 2002,
		            title: "My title2",
		            description: "My description2"
		        }
		    },{
		        pk: 1003,
		        fields: {
		            start_date: new Date(2013, 2, 26, 13, 0),
		            end_date: new Date(2013, 2, 26, 15, 0),
		            conv_id: 2003,
		            title: "My title3",
		            description: "My description3"
		        }
		    },{
		        pk: 1004,
		        fields: {
		            start_date: new Date(2013, 2, 26, 15, 0),
		            end_date: new Date(2013, 2, 26, 17, 0),
		            conv_id: 2004,
		            title: "My title4",
		            description: "My description4"
		        }
		    },{
                pk: 1005,
                fields: {
                    start_date: new Date(2013, 2, 26, 16, 0),
                    end_date: new Date(2013, 2, 26, 18, 0),
                    conv_id: 2005,
                    title: "My title5",
                    description: "My description5"
                }
            },{
                pk: 1006,
                fields: {
                    start_date: new Date(2013, 2, 26, 17, 0),
                    end_date: new Date(2013, 2, 26, 19, 0),
                    conv_id: 2006,
                    title: "My title6",
                    description: "My description6"
                }
            },{
                pk: 1007,
                fields: {
                    start_date: new Date(2013, 2, 26, 14, 0),
                    end_date: new Date(2013, 2, 26, 15, 0),
                    conv_id: 2007,
                    title: "My title7",
                    description: "My description7"
                }
            },{
                pk: 1008,
                fields: {
                    start_date: new Date(2013, 2, 26, 16, 0),
                    end_date: new Date(2013, 2, 26, 17, 30),
                    conv_id: 2008,
                    title: "My title8",
                    description: "My description8"
                }
            }];

		var view = new View({
			collection: col,
			el: document.getElementById(opts.elementId),
			start_date: new Date(2013, 2, 26, 11, 0),
			end_date: new Date(2013, 2, 26, 20, 0)
		});

	   view.render();
	   return view;
    };
});
