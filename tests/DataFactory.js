define(function () {

var DataFactory = {};

DataFactory.emptySet = function () {
    return [];
};

DataFactory.singleItemSet = function () {
    return [{
        pk: 1001,
        fields: {
            start_date: "2013-03-26T12:00:00.00",
            end_date: "2013-03-26T14:00:00.00",
            conv_id: 2001,
            title: "My title1",
            description: "My description1"
        }
    }];
};

DataFactory.singleRowSet = function () {
    return [{
        pk: 1001,
        fields: {
            start_date: "2013-03-26T12:00:00.00",
            end_date: "2013-03-26T14:00:00.00",
            conv_id: 2001,
            title: "My title1",
            description: "My description1"
        }
    },{
        pk: 1002,
        fields: {
            start_date: "2013-03-26T14:00:00.00",
            end_date: "2013-03-26T16:00:00.00",
            conv_id: 2002,
            title: "My title2",
            description: "My description2"
        }
    },{
        pk: 1003,
        fields: {
            start_date: "2013-03-26T16:00:00.00",
            end_date: "2013-03-26T18:00:00.00",
            conv_id: 2003,
            title: "My title3",
            description: "My description3"
        }
    },{
        pk: 1004,
        fields: {
            start_date: "2013-03-26T18:00:00.00",
            end_date: "2013-03-26T20:00:00.00",
            conv_id: 2004,
            title: "My title4",
            description: "My description4"
        }
    }];
};

DataFactory.multiRowSet = function () {
return [{
        pk: 1001,
        fields: {
            start_date: "2013-03-26T12:00:00.00",
            end_date: "2013-03-26T14:00:00.00",
            conv_id: 2001,
            title: "My title1",
            description: "My description1"
        }
    },{
        pk: 1002,
        fields: {
            start_date: "2013-03-26T14:00:00.00",
            end_date: "2013-03-26T16:00:00.00",
            conv_id: 2002,
            title: "My title2",
            description: "My description2"
        }
    },{
        pk: 1003,
        fields: {
            start_date: "2013-03-26T13:00:00.00",
            end_date: "2013-03-26T15:00:00.00",
            conv_id: 2003,
            title: "My title3",
            description: "My description3"
        }
    },{
        pk: 1004,
        fields: {
            start_date: "2013-03-26T15:00:00.00",
            end_date: "2013-03-26T17:00:00.00",
            conv_id: 2004,
            title: "My title4",
            description: "My description4"
        }
    }];
};

DataFactory.unsortedMultiRowSet = function () {
return [{
        pk: 1001,
        fields: {
            start_date: "2013-03-26T12:00:00.00",
            end_date: "2013-03-26T14:00:00.00",
            conv_id: 2001,
            title: "My title1",
            description: "My description1"
        }
    },{
        pk: 1002,
        fields: {
            start_date: "2013-03-26T14:00:00.00",
            end_date: "2013-03-26T16:00:00.00",
            conv_id: 2002,
            title: "My title2",
            description: "My description2"
        }
    },{
        pk: 1003,
        fields: {
            start_date: "2013-03-26T13:00:00.00",
            end_date: "2013-03-26T15:00:00.00",
            conv_id: 2003,
            title: "My title3",
            description: "My description3"
        }
    },{
        pk: 1004,
        fields: {
            start_date: "2013-03-26T15:00:00.00",
            end_date: "2013-03-26T17:00:00.00",
            conv_id: 2004,
            title: "My title4",
            description: "My description4"
        }
    }].sort(function(a,b) {
        return Math.random() - 0.5;
    });
};
return DataFactory;
});
