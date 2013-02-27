/** @module ScheduleView */
define(function(require) {
var Backbone = require('backbone');

/**
 * ScheduleView creates a schedule from a set of events
 * @alias module:ScheduleView
 * @constructor
 * @param {Object.<string, *>} opts No options.
 */
var ScheduleView = Backbone.View.extend(
{
    initialize: function (opts) {
    	opts = opts || {};
        this.$el.addClass(this.className);
        this.$el.hide();
        this.start_date = opts.start_date;
        this.end_date = opts.end_date;
        this.render();
    },
    
    /**
     * @property {string} className The css class name that this object will apply to
     * it's holding element
     * @default hub-ScheduleView
     */    
    className: "hub-ScheduleView",
    
    /**
	 * Renders this ScheduleView, as a horizontal schedule.
	 */
    render: function () {
	    if (!this.collection || this.collection.length <= 0) {
	       return;
	    }

		this.collection.sort(function(a, b) { 
		    return new Date(a.fields.start_date) - new Date(b.fields.start_date);
		});

	    var elWidth = this.$el.width();
	    var elTimeRange = this.end_date - this.start_date;
	    var rows = [this.start_date];
	
	    this.$el.hide();
	
	    var self = this;
	    
	    this.collection.forEach(function(event) {
	        event.start_date = new Date(event.fields.start_date);
	        event.end_date = new Date(event.fields.end_date); 
	
	        if (event.end_date < self.start_date || event.start_date > self.end_date) {
	            return;
	        }
	        var eventContainer = $(document.createElement('div'));
	        var titleContainer = $(document.createElement('div'));
	        var descContainer = $(document.createElement('div'));
	        
	        var eventLeft = ((event.start_date - self.start_date) / elTimeRange) * elWidth;
	        var eventWidth = (((event.end_date - self.start_date) / elTimeRange) * elWidth) - eventLeft;
	        var eventRow = -1;
	        for (i in rows) {
	            if (event.start_date >= rows[i]) {
	                 eventRow = i;
	                 break;
	            }
	        }
	        if (eventRow == -1) {
	            eventRow = rows.length;
	        }
	        rows[eventRow] = event.end_date;
	        
	        eventContainer
	            .addClass('event')
	            .addClass('event-row' + eventRow)
	            .attr('id', 'scheduled_event_' + event.pk)
	            .attr('data-start-date', event.start_date)
	            .attr('data-end-date', event.end_date)
	            .css('left', eventLeft + 'px')
	            .css('width', eventWidth + 'px');
	        
	        titleContainer
	            .addClass('event-title')
	            .html(event.fields.title);
	
	        descContainer
	            .addClass('event-desc')
	            .html(event.fields.description);
	        
	        eventContainer
	            .append(titleContainer)
	            .append(descContainer);
	            
	        self.$el.append(eventContainer);
	        eventContainer.click(self.clickHandler);
	    });
	    this.$el.show();
    }
});

ScheduleView.prototype.clickHandler = function(clickEvent) {
    var a = $(clickEvent.currentTarget);
    console.log(a);
};

return ScheduleView;
});
