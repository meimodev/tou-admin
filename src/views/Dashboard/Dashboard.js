import React, { Component, lazy, Suspense } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table
} from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

const Widget04 = lazy(() => import("../../views/Widgets/Widget04"));
const Widget03 = lazy(() => import("../../views/Widgets/Widget03"));
const Widget02 = lazy(() => import("../../views/Widgets/Widget02"));
const Widget01 = lazy(() => import("../../views/Widgets/Widget01"));

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

// Card Chart 1
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandPrimary,
      borderColor: "rgba(255,255,255,.55)",
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ]
};

// Card Chart 2
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandInfo,
      borderColor: "rgba(255,255,255,.55)",
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ]
};

// Card Chart 3
const cardChartData3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ]
};

// Card Chart 4
const cardChartData4 = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ]
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: "facebook" },
  { data: [1, 13, 9, 17, 34, 41, 38], label: "twitter" },
  { data: [78, 81, 80, 45, 34, 12, 40], label: "linkedin" },
  { data: [35, 23, 56, 22, 97, 23, 64], label: "google" }
];

const makeSocialBoxData = dataSetNo => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        backgroundColor: "rgba(255,255,255,.1)",
        borderColor: "rgba(255,255,255,.55)",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "New Clients"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Recurring Clients"
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "Pageviews"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Organic"
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: "CTR"
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: "Bounce Rate"
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: variant ? variant : "#c2cfd6",
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: [
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: data1
    },
    {
      label: "My Second dataset",
      backgroundColor: "transparent",
      borderColor: brandSuccess,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: data2
    },
    {
      label: "My Third dataset",
      backgroundColor: "transparent",
      borderColor: brandDanger,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  loading = () => (
    <div className=" text-center"> <h1>This is the inner Loading... will give it a good one later -_-</h1> </div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle className="mb-1"><h4>Kabar Terbaru</h4></CardTitle>
              </CardHeader>
              <CardBody>
                <Col>
                  <span><strong>Hari ini</strong><span className="text-muted ml-3">Senin, 21 Oktober 2099</span> </span>
                  <p>
                    <Badge color="primary">Berita</Badge> <span>GEGER! di sebuah kota ada orang GEGER! yang membaca ini</span><br />
                    <Badge color="success">Peningkatan</Badge> <span>Bug fixed: save button in android app no longer stuck</span><br />
                    <Badge color="danger">Kesalahan</Badge> <span>System telah memblokir akses pengguna dikarenakan telah melewati jatuh tempo pembayaran</span><br />

                  </p>
                  <hr></hr>
                  <span><strong>Kemarin</strong><span className="text-muted ml-3">Senin, 21 Oktober 2099</span> </span>
                  <p>
                    <Badge color="primary">Berita</Badge> <span>GEGER! di sebuah kota ada orang GEGER! yang membaca ini</span><br />
                    <Badge color="success">Peningkatan</Badge> <span>Bug fixed: save button in android app no longer stuck</span><br />
                    <Badge color="warning">Peringatan</Badge> <span>Jatuh tempo pembayaran system berakhir HARI INI, segera lakukan pembayaran sebelum pukul 00.00 WITA untuk menghindari pemblokiran sitem </span><br />

                  </p>
                  <hr></hr>
                  <span><strong>2 Hari Yang Lalu</strong><span className="text-muted ml-3">Senin, 21 Oktober 2099</span> </span>
                  <p>
                    <Badge color="primary">Berita</Badge> <span>GEGER! di sebuah kota ada orang GEGER! yang membaca ini</span><br />
                    <Badge color="success">Peningkatan</Badge> <span>1 News something</span><br />
                  </p>
                  <hr></hr>

                </Col>
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col>
            <Card>

              <CardHeader>
                <CardTitle className="mb-0"><h4>Tentang Gereja</h4></CardTitle>
              </CardHeader>

              <CardBody >
                <Row>
                  <Col sm="6">
                    <div className="">
                      <span className="text-muted"> Nama Jemaat </span><br />
                      <p className=""> Bait-el </p>
                    </div>

                    <div>
                      <span className="text-muted"> Telepon </span><br />
                      <p className="mt-0"> +62 852 1234 4213 </p>
                    </div>
                    <div>
                      <span className="text-muted"> Email </span><br />
                      <p className="mt-0"> bait-elrambo@tou.com </p>
                    </div>

                    <div className="">
                      <span className="text-muted"> Kabupaten / Kota </span><br />
                      <p className="mt-0"> Majemba </p>
                    </div>
                    <div>
                      <span className="text-muted"> Kecamatan </span><br />
                      <p className="mt-0"> Kyoki </p>
                    </div>
                    <div>
                      <span className="text-muted"> Kelurahan / Desa </span><br />
                      <p className="mt-0"> Rambo </p>
                    </div>
                    <div>
                      <span className="text-muted"> Alamat </span><br />
                      <p className="mt-0"> Jln. Rambo-rambo, No 186 (depan jembatan joni) </p>
                    </div>

                  </Col>
                  <Col sm="6">

                    <ul className="pl-0 ">

                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-user progress-group-icon" />
                          <span className="title text-muted">Laki-laki</span>
                          <span className="ml-auto font-weight-bold mr-1">1.245</span>
                          <span className="text-muted small">(60%)</span>

                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="primary"
                            value="60"
                          />
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-header">
                          <i className="icon-user-female progress-group-icon" />
                          <span className="title text-muted">Perempuan</span>
                          <span className="ml-auto font-weight-bold mr-1">1.245</span>
                          <span className="text-muted small">(15%)</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="primary"
                            value="15"
                          />
                        </div>
                      </div>
                      <hr className="mt-0" />

                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-globe progress-group-icon" />
                          <span className="title text-muted">Pria / Kaum Bapa</span>
                          <span className="ml-auto font-weight-bold">
                            191,235{" "}
                            <span className="text-muted small">(56%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="danger"
                            value="56"
                          />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-facebook progress-group-icon" />
                          <span className="title text-muted">Wanita / Kaum Bapa</span>
                          <span className="ml-auto font-weight-bold">
                            51,223{" "}
                            <span className="text-muted small">(15%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="danger"
                            value="15"
                          />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-twitter progress-group-icon" />
                          <span className="title text-muted">Pemuda</span>
                          <span className="ml-auto font-weight-bold">
                            37,564{" "}
                            <span className="text-muted small">(11%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="danger"
                            value="11"
                          />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-linkedin progress-group-icon" />
                          <span className="title text-muted">Remaja</span>
                          <span className="ml-auto font-weight-bold">
                            27,319{" "}
                            <span className="text-muted small">(8%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="danger"
                            value="8"
                          />
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-header">
                          <i className="icon-social-linkedin progress-group-icon" />
                          <span className="title text-muted">Anak</span>
                          <span className="ml-auto font-weight-bold">
                            27,319{" "}
                            <span className="text-muted small">(8%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="danger"
                            value="8"
                          />
                        </div>
                      </div>

                      <hr className="mt-0" />
                      <div className="divider text-center">
                        <Row>
                          <Col sm={12} md className="mb-sm-2 mb-0">
                            <div className="text-muted">Baptis</div>
                            <strong>1.242</strong><span className="text-muted pl-1">(40%)</span>
                            <Progress
                              className="progress-xs mt-2"
                              color="info"
                              value="40"
                            />
                          </Col>
                          <Col sm={12} md className="mb-sm-2 mb-0">
                            <div className="text-muted">Sidi</div>
                            <strong>255</strong><span className="text-muted pl-1">(70%)</span>
                            <Progress
                              className="progress-xs mt-2"
                              color="info"
                              value="70"
                            />
                          </Col>
                          <Col sm={12} md className="mb-sm-2 mb-0">
                            <div className="text-muted">Nikah</div>
                            <strong>214</strong><span className="text-muted pl-1">(15%)</span>
                            <Progress
                              className="progress-xs mt-2"
                              color="info"
                              value="15"
                            />
                          </Col>
                          <Col sm={12} sm className="mb-sm-2 mb-0 my-auto">
                            <div className="border p-2 rounded-lg color-primary bg-info">
                              <div>TOTAL</div>
                              <strong>29.703</strong>
                            </div>

                          </Col>
                        </Row>
                      </div>
                    </ul>

                  </Col>
                </Row>
              </CardBody>

            </Card>
          </Col>

        </Row>

        <Row>
          <Col sm="3">
            <Widget02 header="Custumer Service" mainText="+62 812 9402" icon="icon-phone" color="secondary" variant="1" />
          </Col>

          <Col sm="3">
            <Widget02 header="WhatsApp" mainText="+62 812 9402" icon="fa fa-whatsapp" color="success" variant="1" />
          </Col>

          <Col sm="3">
            <Widget02 header="Instagram" mainText="@meimo.dev" icon="fa fa-instagram" color="danger" variant="1" />
          </Col>

          <Col sm="3">
            <Widget02 header="Website" mainText="www.meimodev.com" icon="fa fa-globe" color="warning" variant="1" />
          </Col>
        </Row>

        {/* 
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right">
                      <i className="icon-cloud-download" />
                    </Button>
                    <ButtonToolbar
                      className="float-right"
                      aria-label="Toolbar with button groups"
                    >
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(1)}
                          active={this.state.radioSelected === 1}
                        >
                          Day
                        </Button>
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(2)}
                          active={this.state.radioSelected === 2}
                        >
                          Month
                        </Button>
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(3)}
                          active={this.state.radioSelected === 3}
                        >
                          Year
                        </Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div
                  className="chart-wrapper"
                  style={{ height: 300 + "px", marginTop: 40 + "px" }}
                >
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Visits</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="success"
                      value="40"
                    />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Unique</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="info"
                      value="20"
                    />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Pageviews</div>
                    <strong>78.706 Views (60%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="warning"
                      value="60"
                    />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">New Users</div>
                    <strong>22.123 Users (80%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="danger"
                      value="80"
                    />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Bounce Rate</div>
                    <strong>Average Rate (40.15%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="primary"
                      value="40"
                    />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03
                dataBox={() => ({
                  variant: "facebook",
                  friends: "89k",
                  feeds: "459"
                })}
              >
                <div className="chart-wrapper">
                  <Line
                    data={makeSocialBoxData(0)}
                    options={socialChartOpts}
                    height={90}
                  />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03
                dataBox={() => ({
                  variant: "twitter",
                  followers: "973k",
                  tweets: "1.792"
                })}
              >
                <div className="chart-wrapper">
                  <Line
                    data={makeSocialBoxData(1)}
                    options={socialChartOpts}
                    height={90}
                  />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03
                dataBox={() => ({
                  variant: "linkedin",
                  contacts: "500+",
                  feeds: "292"
                })}
              >
                <div className="chart-wrapper">
                  <Line
                    data={makeSocialBoxData(2)}
                    options={socialChartOpts}
                    height={90}
                  />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03
                dataBox={() => ({
                  variant: "google-plus",
                  followers: "894",
                  circles: "92"
                })}
              >
                <div className="chart-wrapper">
                  <Line
                    data={makeSocialBoxData(3)}
                    options={socialChartOpts}
                    height={90}
                  />
                </div>
              </Widget03>
            </Suspense>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>Traffic {" & "} Sales</CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">New Clients</small>
                          <br />
                          <strong className="h4">9,123</strong>
                          <div className="chart-wrapper">
                            <Line
                              data={makeSparkLineData(0, brandPrimary)}
                              options={sparklineChartOpts}
                              width={100}
                              height={30}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">
                            Recurring Clients
                          </small>
                          <br />
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <Line
                              data={makeSparkLineData(1, brandDanger)}
                              options={sparklineChartOpts}
                              width={100}
                              height={30}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Monday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="34"
                        />
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="78"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Tuesday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="56"
                        />
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="94"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Wednesday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="12"
                        />
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="67"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Thursday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="43"
                        />
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="91"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Friday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="22"
                        />
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="73"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Saturday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="53"
                        />
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="82"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Sunday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="9"
                        />
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="69"
                        />
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1">
                          <Badge pill color="info">
                            &nbsp;
                          </Badge>
                        </sup>
                        New clients &nbsp;
                        <sup className="px-1">
                          <Badge pill color="danger">
                            &nbsp;
                          </Badge>
                        </sup>
                        Recurring clients
                      </small>
                    </div>
                  </Col>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-warning">
                          <small className="text-muted">Pageviews</small>
                          <br />
                          <strong className="h4">78,623</strong>
                          <div className="chart-wrapper">
                            <Line
                              data={makeSparkLineData(2, brandWarning)}
                              options={sparklineChartOpts}
                              width={100}
                              height={30}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-success">
                          <small className="text-muted">Organic</small>
                          <br />
                          <strong className="h4">49,123</strong>
                          <div className="chart-wrapper">
                            <Line
                              data={makeSparkLineData(3, brandSuccess)}
                              options={sparklineChartOpts}
                              width={100}
                              height={30}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    <ul>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-user progress-group-icon" />
                          <span className="title">Male</span>
                          <span className="ml-auto font-weight-bold">43%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="warning"
                            value="43"
                          />
                        </div>
                      </div>
                      <div className="progress-group mb-5">
                        <div className="progress-group-header">
                          <i className="icon-user-female progress-group-icon" />
                          <span className="title">Female</span>
                          <span className="ml-auto font-weight-bold">37%</span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="warning"
                            value="37"
                          />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-globe progress-group-icon" />
                          <span className="title">Organic Search</span>
                          <span className="ml-auto font-weight-bold">
                            191,235{" "}
                            <span className="text-muted small">(56%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="success"
                            value="56"
                          />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-facebook progress-group-icon" />
                          <span className="title">Facebook</span>
                          <span className="ml-auto font-weight-bold">
                            51,223{" "}
                            <span className="text-muted small">(15%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="success"
                            value="15"
                          />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-twitter progress-group-icon" />
                          <span className="title">Twitter</span>
                          <span className="ml-auto font-weight-bold">
                            37,564{" "}
                            <span className="text-muted small">(11%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="success"
                            value="11"
                          />
                        </div>
                      </div>
                      <div className="progress-group">
                        <div className="progress-group-header">
                          <i className="icon-social-linkedin progress-group-icon" />
                          <span className="title">LinkedIn</span>
                          <span className="ml-auto font-weight-bold">
                            27,319{" "}
                            <span className="text-muted small">(8%)</span>
                          </span>
                        </div>
                        <div className="progress-group-bars">
                          <Progress
                            className="progress-xs"
                            color="success"
                            value="8"
                          />
                        </div>
                      </div>
                      <div className="divider text-center">
                        <Button
                          color="link"
                          size="sm"
                          className="text-muted"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="show more"
                        >
                          <i className="icon-options" />
                        </Button>
                      </div>
                    </ul>
                  </Col>
                </Row>
                <br />
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">
                        <i className="icon-people" />
                      </th>
                      <th>User</th>
                      <th className="text-center">Country</th>
                      <th>Usage</th>
                      <th className="text-center">Payment Method</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/1.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-success" />
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-us h4 mb-0"
                          title="us"
                          id="us"
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="50"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-mastercard"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/2.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-danger" />
                        </div>
                      </td>
                      <td>
                        <div>Avram Tarasios</div>
                        <div className="small text-muted">
                          <span>Recurring</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-br h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="10"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-visa"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>5 minutes ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/3.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-warning" />
                        </div>
                      </td>
                      <td>
                        <div>Quintin Ed</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-in h4 mb-0"
                          title="in"
                          id="in"
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>74%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="warning"
                          value="74"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-stripe"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>1 hour ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/4.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-secondary" />
                        </div>
                      </td>
                      <td>
                        <div>Enéas Kwadwo</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-fr h4 mb-0"
                          title="fr"
                          id="fr"
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>98%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="98"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-paypal"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Last month</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/5.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-success" />
                        </div>
                      </td>
                      <td>
                        <div>Agapetus Tadeáš</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-es h4 mb-0"
                          title="es"
                          id="es"
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>22%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="22"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-google-wallet"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Last week</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/6.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-danger" />
                        </div>
                      </td>
                      <td>
                        <div>Friderik Dávid</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-pl h4 mb-0"
                          title="pl"
                          id="pl"
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>43%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="43"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-amex"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Yesterday</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row> */}

      </div>
    );
  }
}

export default Dashboard;
