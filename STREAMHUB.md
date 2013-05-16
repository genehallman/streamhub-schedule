# streamhub-schedule

streamhub-schedule is a streamhub-sdk plugin takes a set of schedule objects and displays them in a horizontal calendar.

The streamhub-schedule provides ```ScheduleView``` which is constructed with an array of event data objects which are
expected to have the following structure:

    event = { pk: "12345", fields: {
        start_date: "1/30/2013 9:00",
        end_date: "1/30/2013 12:00",
        title: "My event",
        description: "Great event description",
        sort_order: 12345  // optional
      }
    };

