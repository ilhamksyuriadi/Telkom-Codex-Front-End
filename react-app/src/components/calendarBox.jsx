import React, { Component } from "react";
import "./calendarBox.css";

class CalendarBox extends Component {
  state = {};
  render() {
    return (
      <div className="calendar-main">
        <div className="calendar-sub-1">
          <div className="calendar-sub-1-head">
            <div className="calendar-head-line-1">
              <h2 className="font-roboto font-grey">Date</h2>
              <i className="fa fa-search search-icon w3-xlarge" />
            </div>
            <div className="calendar-head-line-2">
              <button class="month-button">
                <div className="month-button-content font-roboto">
                  Juni
                  <i className="fa fa-caret-down blue-arrow" />
                </div>
              </button>
              <button class="year-button">
                <div className="year-button-content font-roboto">
                  2018
                  <i className="fa fa-caret-down blue-arrow" />
                </div>
              </button>
            </div>
          </div>
          <div className="calendar-body">
            <div className="prev-arrow">
              <i className="fa fa-angle-left" />
            </div>
            <div className="calendar-day">
              <table className="table-bottom">
                <tr className="day">
                  <td className="day font-roboto font-blue">Mo</td>
                  <td className="day font-roboto font-grey-2">Tu</td>
                  <td className="day font-roboto font-grey-2">We</td>
                  <td className="day font-roboto font-grey-2">Th</td>
                  <td className="day font-roboto font-grey-2">Fr</td>
                  <td className="day font-roboto font-grey-2">Sa</td>
                  <td className="day font-roboto font-grey-2">Su</td>
                </tr>
                <tr>
                  <td className="day font-roboto font-grey-2">28</td>
                  <td className="day font-roboto font-grey-2">29</td>
                  <td className="day font-roboto font-grey-2">30</td>
                  <td className="day font-roboto font-grey-2">31</td>
                  <td className="day font-roboto font-grey font-weight">1</td>
                  <td className="day font-roboto font-grey font-weight">2</td>
                  <td className="day font-roboto font-grey font-weight">3</td>
                </tr>
                <tr>
                  <td className="day font-roboto font-grey font-weight">4</td>
                  <td className="day font-roboto font-grey font-weight">5</td>
                  <td className="day font-roboto font-grey font-weight current-day">
                    6
                  </td>
                  <td className="day font-roboto font-grey font-weight">7</td>
                  <td className="day font-roboto font-grey font-weight">8</td>
                  <td className="day font-roboto font-grey font-weight">9</td>
                  <td className="day font-roboto font-grey font-weight">10</td>
                </tr>
                <tr>
                  <td className="day font-roboto font-grey font-weight">11</td>
                  <td className="day font-roboto font-grey font-weight">12</td>
                  <td className="day font-roboto font-grey font-weight">13</td>
                  <td className="day font-roboto font-grey font-weight">14</td>
                  <td className="day font-roboto font-grey font-weight">15</td>
                  <td className="day font-roboto font-grey font-weight">16</td>
                  <td className="day font-roboto font-grey font-weight">17</td>
                </tr>
                <tr>
                  <td className="day font-roboto font-grey font-weight">18</td>
                  <td className="day font-roboto font-grey font-weight">19</td>
                  <td className="day font-roboto font-grey font-weight">20</td>
                  <td className="day font-roboto font-grey font-weight">21</td>
                  <td className="day font-roboto font-grey font-weight">22</td>
                  <td className="day font-roboto font-grey font-weight">23</td>
                  <td className="day font-roboto font-grey font-weight">24</td>
                </tr>
                <tr>
                  <td className="day font-roboto font-grey font-weight">25</td>
                  <td className="day font-roboto font-grey font-weight">26</td>
                  <td className="day font-roboto font-grey font-weight">27</td>
                  <td className="day font-roboto font-grey font-weight">28</td>
                  <td className="day font-roboto font-grey font-weight">29</td>
                  <td className="day font-roboto font-grey font-weight">30</td>
                  <td className="day font-roboto font-grey-2">1</td>
                </tr>
              </table>
            </div>
            <div className="next-arrow">
              <i className="fa fa-angle-right" />
            </div>
          </div>
        </div>
        <div className="calendar-sub-2">
          <div className="calendar-2-head">
            <div className="calendar-2-head-1">
              <h2 className="font-roboto font-blue">Rabu, 6 Juni 2018</h2>
              <button className="save-button">SAVE</button>
            </div>
            <input
              className="input-notes"
              type="text"
              placeholder="Klik untuk menulis notes..."
            />
          </div>
          <div>
            <h4 className="font-roboto font-grey event-text">Event</h4>
          </div>
          <div className="scroll-box-event">
            <table className="event-table">
              <tr>
                <td className="event-table-content event-table event-tab-col-1 font-grey-2 font-roboto">
                  Dummy Data
                </td>
                <td className="event-table-content event-table font-grey-2 font-roboto">
                  Dummy Data
                </td>
              </tr>
              <tr>
                <td className="event-table-content event-tabl event-tab-col-1 font-grey-2 font-roboto">
                  Dummy Data
                </td>
                <td className="event-table-content event-table font-grey-2 font-roboto">
                  Dummy Data
                </td>
              </tr>
              <tr>
                <td className="event-table-content event-table event-tab-col-1 font-grey-2 font-roboto">
                  Dummy Data
                </td>
                <td className="event-table-content event-table font-grey-2 font-roboto">
                  Dummy Data
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarBox;
