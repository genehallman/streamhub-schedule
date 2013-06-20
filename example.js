define(function(require) {
    var View = require('streamhub-schedule');

    return function(el) {
        var col = [
            {
                pk: 1001,
                fields: {
                    start_date: "2013-03-26T12:00:00.00",
                    end_date: "2013-03-26T14:00:00.00",
                    article_id: 2001,
                    title: "My title1",
                    description: "My description1"
                }
            },{
                pk: 1002,
                fields: {
                    start_date: "2013-03-26T14:00:00.00",
                    end_date: "2013-03-26T16:00:00.00",
                    article_id: 2002,
                    title: "My title2",
                    description: "My description2"
                }
            },{
                pk: 1003,
                fields: {
                    start_date: "2013-03-26T13:00:00.00",
                    end_date: "2013-03-26T15:00:00.00",
                    article_id: 2003,
                    title: "My title3",
                    description: "My description3"
                }
            },{
                pk: 1004,
                fields: {
                    start_date: "2013-03-26T15:00:00.00",
                    end_date: "2013-03-26T17:00:00.00",
                    article_id: 2004,
                    title: "My title4",
                    description: "My description4"
                }
            },{
                pk: 1005,
                fields: {
                    start_date: "2013-03-26T16:00:00.00",
                    end_date: "2013-03-26T18:00:00.00",
                    article_id: 2005,
                    title: "My title5",
                    description: "My description5"
                }
            },{
                pk: 1006,
                fields: {
                    start_date: "2013-03-26T17:00:00.00",
                    end_date: "2013-03-26T19:00:00.00",
                    article_id: 2006,
                    title: "My title6",
                    description: "My description6"
                }
            },{
                pk: 1007,
                fields: {
                    start_date: "2013-03-26T14:00:00.00",
                    end_date: "2013-03-26T15:00:00.00",
                    article_id: 2007,
                    title: "My title7",
                    description: "My description7"
                }
            },{
                pk: 1008,
                fields: {
                    start_date: "2013-03-26T16:00:00.00",
                    end_date: "2013-03-26T17:30:00.00",
                    article_id: 2008,
                    title: "My title8",
                    description: "My description8"
                }
            }
        ];

        return new View({
            data: col,
            el: el,
            start_date: new Date(2013, 2, 26, 11, 0),
            end_date: new Date(2013, 2, 26, 20, 0)
        });
    };
});
