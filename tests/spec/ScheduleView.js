define([
    'jasmine-jquery',
    'streamhub-schedule',
    'streamhub-backbone',
    '../MockEventCollectionFactory'],
function (jasmine, ScheduleView, Hub, MockHubCollectionFactory) {
describe('A ScheduleView', function () {
    it ("can have tests run", function () {
        expect(true).toBe(true);
    });
    it("can do HTML tests",function(){  
        setFixtures('<div id="hub"></div>');  
        $('#hub')
            .append('<li>So</li>')
            .append('<li>So</li>');
        expect($('#hub li').length).toBe(2);  
    });
	
	// construction behavior
    describe('can be constructed', function() {
    	it ("with no options", function () {
	        var view = new ScheduleView();
        	expect(view).toBeDefined();
    	});
    	it ("with empty options", function () {
        	var view = new ScheduleView({});
        	expect(view).toBeDefined();
    	});
	});
	
	// post construction behavior    
    describe ("after correct construction", function () {
	    var view;
	    
	    beforeEach(function() {
	        setFixtures(
		        '<div id="hub-ScheduleView"></div>'
		    );
		});
        it ("should render nothing with an empty set", function () {
            view = new ScheduleView({
                el: $('#hub-ScheduleView'),
                collection: MockHubCollectionFactory.emptySet(),
                start_date: new Date(2013, 2, 26, 10),
                end_date: new Date(2013, 2, 27, 0)
            });
            expect($('#hub-ScheduleView').children().length).toBe(0);
        });
        
        it ("should render 1 item with a single item set", function () {
            view = new ScheduleView({
                el: $('#hub-ScheduleView'),
                collection: MockHubCollectionFactory.singleItemSet(),
                start_date: new Date(2013, 2, 26, 10),
                end_date: new Date(2013, 2, 27, 0)
            });
            expect($('#hub-ScheduleView').children().length).toBe(1);
            expect($('#hub-ScheduleView div.event').hasClass('event-row0')).toBe(true);
        });

        it ("should render 4 items (1 row) with a single row set", function () {
            view = new ScheduleView({
                el: $('#hub-ScheduleView'),
                collection: MockHubCollectionFactory.singleRowSet(),
                start_date: new Date(2013, 2, 26, 10),
                end_date: new Date(2013, 2, 27, 0)
            });
            expect($('#hub-ScheduleView').children().length).toBe(4);
            expect($('#hub-ScheduleView div#scheduled_event_1001').hasClass('event-row0')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1002').hasClass('event-row0')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1003').hasClass('event-row0')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1004').hasClass('event-row0')).toBe(true);
        });

        it ("should render 4 items (2 rows) with a multi row set", function () {
            view = new ScheduleView({
                el: $('#hub-ScheduleView'),
                collection: MockHubCollectionFactory.multiRowSet(),
                start_date: new Date(2013, 2, 26, 10),
                end_date: new Date(2013, 2, 27, 0)
            });
            expect($('#hub-ScheduleView').children().length).toBe(4);
            expect($('#hub-ScheduleView div#scheduled_event_1001').hasClass('event-row0')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1002').hasClass('event-row0')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1003').hasClass('event-row1')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1004').hasClass('event-row1')).toBe(true);
        });
        it ("should sort an unsorted set, and render 4 items (2 rows)", function () {
            view = new ScheduleView({
                el: $('#hub-ScheduleView'),
                collection: MockHubCollectionFactory.unsortedMultiRowSet(),
                start_date: new Date(2013, 2, 26, 10),
                end_date: new Date(2013, 2, 27, 0)
            });
            expect($('#hub-ScheduleView').children().length).toBe(4);
            expect($('#hub-ScheduleView div#scheduled_event_1001').hasClass('event-row0')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1002').hasClass('event-row0')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1003').hasClass('event-row1')).toBe(true);
            expect($('#hub-ScheduleView div#scheduled_event_1004').hasClass('event-row1')).toBe(true);
        });
    });
}); 
});
