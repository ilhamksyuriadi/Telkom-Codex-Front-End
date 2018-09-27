import React, { Component } from "react";
import "./teamBox.css";

class TeamBox extends Component {
  state = {
    member: [
      {
        no: 1,
        nama: "Budi Artianto",
        stream: "Backend",
        burn: 105,
        remain: 30,
        queue: 30
      },
      {
        no: 2,
        nama: "Tono Budiman",
        stream: "Backend",
        burn: 102,
        remain: 32,
        queue: 12
      },
      {
        no: 3,
        nama: "Wawan Aja",
        stream: "Frontend",
        burn: 109,
        remain: 35,
        queue: 25
      }
    ],
    dummy: [
      {
        no: 4,
        nama: "Dummy",
        stream: "Dummy",
        burn: 109,
        remain: 35,
        queue: 25
      },
      {
        no: 5,
        nama: "Dummy",
        stream: "Dummy",
        burn: 109,
        remain: 35,
        queue: 25
      },
      {
        no: 6,
        nama: "Dummy",
        stream: "Dummy",
        burn: 109,
        remain: 35,
        queue: 25
      }
    ]
  };
  render() {
    return (
      <div className="main-box">
        <div className="team-box-1-1">
          <div className="team-box-1-1-content">
            <div className="wrapper-project-button">
              <h2 className="font-roboto font-grey">Project</h2>
              <div class="dropdown-adjust">
                <button class="dropbtn">
                  <div className="button-content font-roboto">
                    My Indihome Consumen
                    <i className="fa fa-caret-down blue-arrow" />
                  </div>
                </button>
              </div>
            </div>
            <div className="desc-adjust">
              <table className="font-roboto font-grey">
                <tr>
                  <td>Description</td>
                  <td>: This is a sample description about project</td>
                </tr>
                <tr>
                  <td>Stack holder</td>
                  <td>: DEGM</td>
                </tr>
                <tr>
                  <td>Sprint now</td>
                  <td>: 4</td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td className="font-small">Start Date</td>
                  <td className="font-small">: 12/06/2018</td>
                </tr>
                <tr>
                  <td className="font-small">End Date</td>
                  <td className="font-small">: 22/06/2018(10 hari lagi)</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="team-box-1-1-content">
            <div className="team-box-1-1-content-2">
              <h3 className="font-roboto font-grey">Member</h3>
              <div className="scroll-box">
                <table className="font-roboto font-grey member-tab">
                  <tr>
                    <th className="member-tab text-left tab-padding">No</th>
                    <th className="member-tab text-left tab-padding">Nama</th>
                    <th className="member-tab text-left tab-padding">Stream</th>
                  </tr>
                  {this.state.member.map(member => (
                    <tr>
                      <td className="member-tab text-center">{member.no}</td>
                      <td className="member-tab text-left tab-padding">
                        {member.nama}
                      </td>
                      <td className="member-tab text-left tab-padding">
                        {member.stream}
                      </td>
                    </tr>
                  ))}
                  {this.state.dummy.map(dummy => (
                    <tr>
                      <td className="member-tab text-center">{dummy.no}</td>
                      <td className="member-tab text-left tab-padding">
                        {dummy.nama}
                      </td>
                      <td className="member-tab text-left tab-padding">
                        {dummy.stream}
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="team-box-2">
          <h2 className="font-roboto font-grey">Best Talent Performance</h2>
          <table className="member-tab">
            <tr className="font-roboto font-grey">
              <th className="member-tab text-left tab-padding">No</th>
              <th className="member-tab text-left tab-padding">Nama</th>
              <th className="member-tab text-left tab-padding">Stream</th>
              <th className="member-tab text-left tab-padding">Point Burn</th>
              <th className="member-tab text-left tab-padding">
                Point Remaining
              </th>
              <th className="member-tab text-left tab-padding">Point Queue</th>
            </tr>
            {this.state.member.map(member => (
              <tr>
                <td className="member-tab text-center font-roboto font-grey">
                  {member.no}
                </td>
                <td className="member-tab text-left tab-padding font-roboto font-blue">
                  {member.nama}
                </td>
                <td className="member-tab text-left tab-padding font-roboto font-grey">
                  {member.stream}
                </td>
                <td className="member-tab text-center font-roboto font-grey">
                  {member.burn}
                </td>
                <td className="member-tab text-center font-roboto font-grey">
                  {member.remain}
                </td>
                <td className="member-tab text-center font-roboto font-grey">
                  {member.queue}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default TeamBox;
