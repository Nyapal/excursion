import React from 'react';
import moment from 'moment';
// import tail.Datetime from 'tail.Datetime';

class Calendar extends React.Component {
  state = {
    dateObject: moment()
  }

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment.weekdays(dateObject).startOf('month').format('d');
      return firstDay;
  }

  weekdayshort = moment.weekdaysShort();
  render() {
    let weekdayshortname = this.weekdayshort.map(day => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      )
    })
    return (
      <div class="Calendar">
        <h1> Da Calendar </h1>
      </div>
      )
    }
}

export default Calendar