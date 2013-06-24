/** @module ScheduleView */
define([
	'streamhub-sdk/view',
	'jquery'
], function(View, $) {	
	/**
	 * ScheduleView creates a schedule from a set of events
	 * @alias module:ScheduleView
	 * @constructor
	 * @param {Object.<string, *>} opts Options to configure this view with.
	 * @param {Array.<Object>} opts.data The data to show for this view.
     * @param {string} opts.className The css class name that this object will apply to it's
     *        holding element (defaults to "hub-ScheduleView").
	 */
	var ScheduleView = function (opts) {
    	opts = opts || {};
    	View.call(this, opts);
    	this.$el = $(this.el);
        this.$el.addClass(opts.className || "hub-ScheduleView");
        this.start_date = opts.start_date;
        this.end_date = opts.end_date;
        this.click = opts.click || null;
        this.data = opts.data;
        
        this.render();
    };
    $.extend(ScheduleView.prototype, View.prototype);
    
    /**
	 * Renders this ScheduleView, as a horizontal schedule.
	 */
    ScheduleView.prototype.render = function () {
	    if (!this.data || this.data.length <= 0) {
	       return;
	    }
		this.data.sort(function(a, b) {
		  if (a && a.fields.sort_order && b && b.fields.sort_order
		    && a.fields.start_date == b.fields.start_date) {
		      return a.fields.sort_order - b.fields.sort_order;
		  } else {
		      return new Date(a.fields.start_date) - new Date(b.fields.start_date);
		  }
		});

	    var elWidth = this.$el.width();
	    var elTimeRange = this.end_date - this.start_date;
	    var rows = [this.start_date];
	
	    this.$el.hide();
	
	    var self = this;
	    
	    $.each(this.data, function(index, event) {
            var startDateParts = event.fields.start_date.split(/[^0-9]/);
            var endDateParts = event.fields.end_date.split(/[^0-9]/);
            event.start_date = new Date(startDateParts[0], startDateParts[1]-1, startDateParts[2], startDateParts[3], startDateParts[4], startDateParts[5]);
            event.end_date = new Date(endDateParts[0], endDateParts[1]-1, endDateParts[2], endDateParts[3], endDateParts[4], endDateParts[5]);
	
	        if (event.end_date < self.start_date || event.start_date > self.end_date) {
	            return;
	        }

	        var eventContainer = $(document.createElement('div'));
	        var titleContainer = $(document.createElement('div'));
	        var datetimeContainer = $(document.createElement('div'));
	        var descContainer = $(document.createElement('div'));
	        
	        // choose row based on position
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
	        
           var datetimeHtml = 
               (((event.start_date.getHours() - 1) % 12)+1) + ":" + 
               (event.start_date.getMinutes() > 10 ? event.start_date.getMinutes() : "0" + event.start_date.getMinutes()) +  
               (event.start_date.getHours() >= 12 ? "pm" : "am") + " - " +
               (((event.end_date.getHours() - 1) % 12)+1) + ":" +
               (event.end_date.getMinutes() > 10 ? event.end_date.getMinutes() : "0" + event.end_date.getMinutes()) +
               (event.end_date.getHours() >= 12 ? "pm" : "am");
	        
	        eventContainer
	            .addClass('event')
	            .addClass('event-row' + eventRow)
	            .attr('id', 'scheduled_event_' + event.pk)
	            .attr('data-article-id', event.fields.article_id)
	            .attr('data-start-date', event.start_date)
	            .attr('data-end-date', event.end_date)
	            .css('left', eventLeft + 'px')
	            .css('width', eventWidth + 'px');
	        
	        titleContainer
	            .addClass('event-title')
	            .html(event.fields.title);

            datetimeContainer
                .addClass('event-datetime')
                .html(datetimeHtml);
	
	        descContainer
	            .addClass('event-desc')
	            .html(event.fields.description);
	        
	        eventContainer
	            .append(titleContainer)
	            .append(datetimeContainer)
	            .append(descContainer);
	            
	        self.$el.append(eventContainer);
	        
	        if (self.click) {
	           eventContainer.click(self.click);
	        }
	    });
	    this.$el.show();
    };
	
	return ScheduleView;
});
