import React, { Component } from "react";
import "./projectBox-1.css";

class ProjectBox1 extends Component {
  state = {
    queTab: [
      {
        no: 1,
        nama: "Teman Berbagi",
        unit: "TNT",
        stake: "TNT",
        sprint: 15,
        status: "Complete"
      },
      {
        no: 1,
        nama: "MyIndihome",
        unit: "Consumer",
        stake: "Consumer",
        sprint: 12,
        status: "Rejected"
      },
      {
        no: 1,
        nama: "Bulir",
        unit: "TNT",
        stake: "TNT",
        sprint: 15,
        status: "On Going"
      },
      {
        no: 1,
        nama: "Dashboard Clap",
        unit: "Consumer",
        stake: "Consumer",
        sprint: 12,
        status: "In Queue"
      }
    ],

    bestProduct: [
      { no: "1.", nama: "MyIndihome", perform: 3 },
      { no: "2.", nama: "Sobat BUMN", perform: 1 },
      { no: "3.", nama: "Open Trip", perform: 2 },
      { no: "4.", nama: "ODP Hunter", perform: 5 },
      { no: "5.", nama: "SIIS", perform: 6 }
    ],

    bestSquad: [
      { no: "1.", nama: "Squad 1 - MyIndihome", perform: 3 },
      { no: "2.", nama: "Squad 2 - Sobat BUMN", perform: 1 },
      { no: "3.", nama: "Squad 3 - Open Trip", perform: 2 },
      { no: "4.", nama: "Squad 4 - ODP Hunter", perform: 5 },
      { no: "5.", nama: "Squad 5 - SIIS", perform: 6 }
    ],

    floating: [
      { col1: "UX", col2: 1 },
      { col1: "FE", col2: 2 },
      { col1: "BE", col2: 0 },
      { col1: "QA", col2: 0 }
    ],

    vacant: [
      { col1: "QA", col2: 1 },
      { col1: "FE", col2: 2 },
      { col1: "BE", col2: 2 },
      { col1: "MOBILE", col2: 0 }
    ]
  };

  getStatusColor(status) {
    if (status === "Complete") {
      return "font-green bottom-border font-weight tab-padding";
    } else if (status === "Rejected") {
      return "font-red bottom-border font-weight tab-padding";
    } else if (status === "On Going") {
      return "font-yellow bottom-border font-weight tab-padding";
    } else {
      return "font-grey-2 bottom-border font-weight tab-padding";
    }
  }

  getArrow(perform) {
    if (perform > 2) {
      return "fa fa-caret-up green-arrow";
    } else {
      return "fa fa-caret-down red-arrow";
    }
  }

  render() {
    return (
      <div className="main-box">
        <div className="sub-box-1">
          <h2 className="font-roboto font-grey">Que All Project</h2>
          <table className="que-tab">
            <tr>
              <th className="que-tab font-roboto font-grey font-weight text-left tab-padding">
                No
              </th>
              <th className="que-tab font-roboto font-grey font-weight text-left tab-padding">
                Nama Project
              </th>
              <th className="que-tab font-roboto font-grey font-weight text-left tab-padding">
                Unit
              </th>
              <th className="que-tab font-roboto font-grey font-weight text-left tab-padding">
                Stakeholder
              </th>
              <th className="que-tab font-roboto font-grey font-weight text-left tab-padding">
                Sprint
              </th>
              <th className="bottom-border font-roboto font-grey font-weight text-left tab-padding">
                Status
              </th>
              <th className="bottom-border" />
            </tr>
            {this.state.queTab.map(queTab => (
              <tr>
                <td className="que-tab font-roboto font-grey text-center">
                  {queTab.no}
                </td>
                <td className="que-tab font-roboto font-blue tab-padding">
                  {queTab.nama}
                </td>
                <td className="que-tab font-roboto font-grey tab-padding">
                  {queTab.unit}
                </td>
                <td className="que-tab font-roboto font-grey tab-padding">
                  {queTab.stake}
                </td>
                <td className="tab-center que-tab font-grey text-center">
                  {queTab.sprint}
                </td>
                <td className={this.getStatusColor(queTab.status)}>
                  {queTab.status}
                </td>
                <td className="bottom-border">
                  <i className="fa fa-caret-down blue-arrow" />
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="sub-box-2">
          <div className="bestproduct-box">
            <div className="sub-box-2-content">
              <h3 className="font-roboto font-grey">
                Best Product Performance
              </h3>
              <table>
                {this.state.bestProduct.map(bestProduct => (
                  <tr>
                    <td className="font-roboto font-grey font-weight">
                      {bestProduct.no}
                    </td>
                    <td className="font-roboto font-grey font-weight">
                      {bestProduct.nama}
                    </td>
                    <td>
                      <i className={this.getArrow(bestProduct.perform)} />
                    </td>
                    <td className="font-roboto font-grey font-weight">
                      {bestProduct.perform}
                    </td>
                  </tr>
                ))}
              </table>
              <button className="button-1">MORE</button>
            </div>
          </div>
          <div className="bestsquad-box">
            <div className="sub-box-2-content">
              <h3 className="font-roboto font-grey">Best Squad Performance</h3>
              <table>
                {this.state.bestSquad.map(bestSquad => (
                  <tr>
                    <td className="font-roboto font-grey font-weight">
                      {bestSquad.no}
                    </td>
                    <td className="font-roboto font-grey font-weight">
                      {bestSquad.nama}
                    </td>
                    <td>
                      <i className={this.getArrow(bestSquad.perform)} />
                    </td>
                    <td className="font-roboto font-grey font-weight">
                      {bestSquad.perform}
                    </td>
                  </tr>
                ))}
              </table>
              <button className="button-2">MORE</button>
            </div>
          </div>
          <div className="talent-box">
            <div className="sub-box-2-content">
              <h3 className="font-roboto font-grey">Talent</h3>
              <div className="talent-sub">
                <div>
                  <h4 className="font-roboto font-grey">Floating</h4>
                  <table className="tab-talent">
                    {this.state.floating.map(floating => (
                      <tr>
                        <td className="tab-talent-content font-roboto font-grey font-weight">
                          {floating.col1}
                        </td>
                        <td className="tab-talent-content font-roboto font-grey font-weight">
                          {floating.col2}
                        </td>
                      </tr>
                    ))}
                  </table>
                  <button className="button-3">MORE</button>
                </div>
                <div>
                  <h4 className="font-roboto font-grey">Vacant</h4>
                  <table className="tab-talent">
                    {this.state.vacant.map(vacant => (
                      <tr>
                        <td className="tab-talent-content font-roboto font-grey font-weight">
                          {vacant.col1}
                        </td>
                        <td className="tab-talent-content font-roboto font-grey font-weight">
                          {vacant.col2}
                        </td>
                      </tr>
                    ))}
                  </table>
                  <button className="button-4">MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectBox1;
