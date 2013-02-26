define([
    'jasmine-jquery',
    'streamhub-schedule',
    'streamhub-backbone'],
function (jasmine, ScheduleView, Hub) {
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
	        view = new ScheduleView({
	            el: $('#hub-ScheduleView'),
	        });
	        window.view =view;
		});
        it ("should do something", function () {
            expect(true).toBe(true);
        });
    });
}); 
});
