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
                    title: "Is Mobile Really a Branding Vehicle?",
                    description: "Dennis Maloney - Dominos<br>\r\nRich Lesperance - Walgreens<br>\r\nTim Reis - Google<br>\r\n<br>\r\n<a href=\"http:\/\/schedule.sxsw.com\/2013\/events\/event_IAP16070\" target=\"_blank\">Visit sxsw.com<\/a>"
                }
            },{
                pk: 1002,
                fields: {
                    start_date: "2013-03-26T14:00:00.00",
                    end_date: "2013-03-26T16:00:00.00",
                    article_id: 2002,
                    title: "What Marketers Should Ask Themselves About Social",
                    description: "Jeffrey Dachis - Dachis Group\r\n<br>\r\n<br>\r\n<a href=\"http:\/\/schedule.sxsw.com\/2013\/events\/event_IAP16074\" target=\"_blank\">Visit sxsw.com<\/a>"
                }
            },{
                pk: 1003,
                fields: {
                    start_date: "2013-03-26T13:00:00.00",
                    end_date: "2013-03-26T15:00:00.00",
                    article_id: 2003,
                    title: "Emerging Media & Devices",
                    description: "Glenn Stansbury - Hipcricket<br>\r\nMaani Safa - Somo Global<br>\r\nNicholas Oliver - Team Detroit<br>\r\nThomas Fellger - Iconmobile\r\n<br>\r\n<br>\r\n<a href=\"http:\/\/schedule.sxsw.com\/2013\/events\/event_IAP15969\" target=\"_blank\">Visit sxsw.com<\/a>"
                }
            },{
                pk: 1004,
                fields: {
                    start_date: "2013-03-26T15:00:00.00",
                    end_date: "2013-03-26T17:00:00.00",
                    article_id: 2004,
                    title: "Opening Remarks from Bre Pettis",
                    description: "Bre Pettis - MakerBot Industries\r\n<br>\r\n<br>\r\n<a href=\"http:\/\/schedule.sxsw.com\/2013\/events\/event_IAP15973\" target= \"_blank\">Visit sxsw.com<\/a>"
                }
            },{
                pk: 1005,
                fields: {
                    start_date: "2013-03-26T16:00:00.00",
                    end_date: "2013-03-26T18:00:00.00",
                    article_id: 2005,
                    title: "Toward the Unification of Physics",
                    description: "Steve Berger - Texas A&M\r\n<br>\r\n<br>\r\n<a href=\"http:\/\/schedule.sxsw.com\/2013\/events\/event_IAP16008\" target=\"_blank\">Visit sxsw.com<\/a>"
                }
            },{
                pk: 1006,
                fields: {
                    start_date: "2013-03-26T17:00:00.00",
                    end_date: "2013-03-26T19:00:00.00",
                    article_id: 2006,
                    title: "Tales of US Entrepreneurship Beyond Silicon Valley",
                    description: "Alexis Ohanian - Breadpig\r\n<br>\r\n<br>\r\n<a href=\"http:\/\/schedule.sxsw.com\/2013\/events\/event_IAP16012\" target=\"_blank\">Visit sxsw.com<\/a>"
                }
            },{
                pk: 1007,
                fields: {
                    start_date: "2013-03-26T15:45:00.00",
                    end_date: "2013-03-26T18:30:00.00",
                    article_id: 2007,
                    title: "The Rise of the Experience Economy",
                    description: "Aileen Lee - Robot Cowboy Ventures<br>\r\nJennifer Hyman - Rent The Runway\r\n<br>\r\n<br>\r\n<a href=\"http:\/\/schedule.sxsw.com\/2013\/events\/event_IAP16030\" target=\"_blank\">Visit sxsw.com<\/a>"
                }
            },{
                pk: 1008,
                fields: {
                    start_date: "2013-03-26T13:00:00.00",
                    end_date: "2013-03-26T14:30:00.00",
                    article_id: 2008,
                    title: "Enterprise Invades Apps",
                    description: "Eric Lai - Avaya<br>\r\nJohn Arrow - Mutual Mobile<br>\r\nMatt Carrier - SAP\r\n<br>\r\n<br>\r\n<a href=\"http:\/\/schedule.sxsw.com\/2013\/events\/event_IAP438\">Visit sxsw.com<\/a>"
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
