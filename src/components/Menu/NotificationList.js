import React from 'react'


var currentDate = new Date()
var currentDayOfMonth = currentDate.getDate()
var currentDayOfWeek = currentDate.getDay()
var timeline = "today"

var msgTypeList = {
    "today": [],
    "yesterday": [],
    "this_week": []
}

this.props.message.forEach(function (message, index) {
    var date = message.date.substring(0, 10)
    var time = message.date.slice(12)

    var testDate = new Date(date)
    var testDayOfMonth = testDate.getDate() + 1
    var testDayOfWeek = testDate.getDay()

    if (currentDayOfMonth == testDayOfMonth + 1) {
        timeline = 'yesterday'
    } else if (currentDayOfMonth > testDayOfMonth + 1 && currentDayOfWeek - testDayOfWeek < 6) {
        timeline = 'this_week'
    }

    msgTypeList[timeline].push(message);

});

const TodayMessageList = msgTypeList["today"].map((message) => {
    var date = message.date.substring(0, 10);
    var time = message.date.slice(12);

    return (
        <li className="list-group-item" key={message.id}>
            Date: {date} <br></br>
            Time: {time} <br></br>
            Body: {message.body}
        </li>
    )
});

const YesterdayMessageList = msgTypeList["yesterday"].map((message) => {
    var date = message.date.substring(0, 10);
    var time = message.date.slice(12);

    return (
        <li className="list-group-item" key={message.id}>
            Date: {date} <br></br>
            Time: {time} <br></br>
            Body: {message.body}
        </li>
    )
})

const WeekMessageList = msgTypeList["this_week"].map((message) => {
    var date = message.date.substring(0, 10);
    var time = message.date.slice(12);

    return (
        <li className="list-group-item" key={message.id}>
            Date: {date} <br></br>
            Time: {time} <br></br>
            Body: {message.body}
        </li>
    )
})

return (
    <div id="messageList">

        <h2>Today</h2>
        <ul className="list-group today-group">
            {TodayMessageList}
        </ul>

        <h2>Yesterday</h2>
        <ul className="list-group yesterday-group">
            {YesterdayMessageList}
        </ul>

        <h2>This Week</h2>
        <ul className="list-group week-group">
            {WeekMessageList}
        </ul>

    </div>
)
