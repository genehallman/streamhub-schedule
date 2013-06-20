# streamhub-schedule

streamhub-schedule displays a schedule of events for a conference of live event. Use StreamHub to aggregate Content about each event so even non-attendees can follow along from home.

## Getting Started

The quickest way to use streamhub-schedule is to use the built version hosted on Livefyre's CDN.

### Dependencies

TODO: UPDATE THIS AFTER GENE MERGES CODE CHANGES AND APP GALLERY CAN BUILD THIS

streamhub-schedule depends on [streamhub-sdk](https://github.com/livefyre/streamhub-sdk). Ensure it's been included in your page.

	<script src="http://cdn.livefyre.com/libs/sdk/v1.0.1-build.147/streamhub-sdk.min.gz.js"></script>

Include streamhub-schedule too.

	<script src="http://cdn.livefyre.com/libs/apps/genehallman/streamhub-scorecard/v0.0.0-build.20/streamhub-wall.min.js"></script>

### Usage

Require streamhub-sdk and streamhub-schedule

    var Hub = Livefyre.require('streamhub-sdk'),
        ScheduleView = Livefyre.require('streamhub-schedule');
    
Create a ScheduleView, passing the following values to the constructor:

* `el`: The DOMElement to render in
* `start_date`: A Date object of the time to start the schedule
* `end_date`: A Date object of the time to end the schedule
* `data`: An Array of objects representing the scheduled events.

Each event object in the `data` Array should be an object of the form:
    
* `pk`: A unique ID for the event
* `fields`: An object with the following fields
    * `title`: The Event title
    * `description`: A description of the event
    * `article_id`: If you're curating a Collection of Content about the event, the StreamHub Article ID for the collection
    * `start_date`: The start datetime for the event, as an ISO8601 string
    * `end_date`: The end datetime for the event, as an ISO8601 string

Example:

    var scheduleView = new ScheduleView({
        el: document.getElementById('schedule'),
        data: [{
            pk: 1001,
            fields: {
                start_date: "2013-03-26T12:00:00.00",
                end_date: "2013-03-26T14:00:00.00",
                article_id: 2001,
                title: "My title1",
                description: "My description1"
        }},{
            pk: 1002,
            fields: {
                start_date: "2013-03-26T14:00:00.00",
                end_date: "2013-03-26T16:00:00.00",
                article_id: 2002,
                title: "My title2",
                description: "My description2"
        }]
    });

You now have a schedule! See this all in action on [this jsfiddle](http://jsfiddle.net/FxeaY/1/).

## Local Development

Instead of using a built version of streamhub-schedule from Livefyre's CDN, you may wish to fork, develop on the repo locally, or include it in your existing JavaScript application.

Clone this repo

    git clone https://github.com/genehallman/streamhub-schedule

Development dependencies are managed by [npm](https://github.com/isaacs/npm), which you should install first.

With npm installed, install streamhub-schedule dependencies. This will also download [Bower](https://github.com/bower/bower) and use it to install browser dependencies.

    cd streamhub-schedule
    npm install

This repository's package.json includes a helpful script to launch a web server for development

    npm start

You can now visit [http://localhost:8080/](http://localhost:8080/) to see an example schedule loaded via RequireJS.

# StreamHub

[Livefyre StreamHub](http://www.livefyre.com/streamhub/) is used by the world's biggest brands and publishers to power their online Content Communities. StreamHub turns your site into a real-time social experience. Curate images, videos, and Tweets from across the social web, right into live blogs, chats, widgets, and dashboards. Want StreamHub? [Contact Livefyre](http://www.livefyre.com/contact/).