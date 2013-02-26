define(function () {

var MockHubCollectionFactory = {};

MockHubCollectionFactory.emptySet = function () {
    return [];
};

MockHubCollectionFactory.singleItemSet = function () {
    return [{
        pk: 1001,
        fields: {
            start_date: new Date(2013, 2, 26, 12, 0),
            end_date: new Date(2013, 2, 26, 14, 0),
            conv_id: 2001,
            title: "My title1",
            description: "My description1"
        }
    }];
};

MockHubCollectionFactory.singleRowSet = function () {
    return [{
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
            start_date: new Date(2013, 2, 26, 16, 0),
            end_date: new Date(2013, 2, 26, 18, 0),
            conv_id: 2003,
            title: "My title3",
            description: "My description3"
        }
    },{
        pk: 1004,
        fields: {
            start_date: new Date(2013, 2, 26, 18, 0),
            end_date: new Date(2013, 2, 26, 20, 0),
            conv_id: 2004,
            title: "My title4",
            description: "My description4"
        }
    }];
};

MockHubCollectionFactory.multiRowSet = function () {
return [{
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
    }];
};

return MockHubCollectionFactory;
});
