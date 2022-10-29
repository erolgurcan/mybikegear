import React from "react";
import "./UserPage.css"
import UserPageNav from "./UserPageNav";

const UserPage = () => {
  return (
    <div>
      <link
        href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        rel="stylesheet"
      />
      
      <UserPageNav />

      <div className="container bootstrap snippets bootdey">
        <div className="row well">
          <div className="col-md-2">
            <ul className="nav nav-pills nav-stacked well d-flex flex-column mt-4 bg-white">

              <li className=" m-2">
                <button className="btn btn-light w-100"> 
                <i className="fa fa-home " color="white"></i>{"  "}User Page
                </button>
              </li>

              <li className=" m-2">
                <button className="btn btn-light w-100"> 
                <i className="fa fa-bicycle" color="white"></i>{"  "}Gears
                </button>
              </li>

              <li className=" m-2">
                <button className="btn btn-light w-100"> 
                <i className="fa fa-home " color="white"></i>{"  "}Add New Gear
                </button>
              </li>

            </ul>
          </div>
          <div className="col-md-10">
            <div className="panel">
              <img
                className="pic img-circle"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt="..."
              />
              <div className="name">
                <small>User full name</small>
              </div>
              <a
                href="#"
                className="btn btn-xs btn-primary pull-right"
                style= {{margin: "10px"}}
              >
                <span className="glyphicon glyphicon-picture"></span> Change cover
              </a>
            </div>

            <br />
            <br />
            <br />


            <div className="tab-content">
              

              <div className="tab-pane" id="sent">
                <a type="button" data-toggle="collapse" data-target="#s1">
                  <div
                    className="btn-toolbar well well-sm"
                    role="toolbar"
                    style={{margin: "0px"}}
                  >
                    <div className="btn-group">
                      <input type="checkbox" />
                    </div>
                    <div className="btn-group col-md-3">Kumar</div>
                    <div className="btn-group col-md-8">
                      <b>This is reply from Bootstrap plugin</b>
                      <div className="pull-right">
                        <i className="glyphicon glyphicon-time"></i> 12:30 AM
                      </div>
                    </div>
                  </div>
                </a>
                <div id="s1" className="collapse out well">
                  This is the message body1
                </div>
                <br />
                <button className="btn btn-primary btn-xs">
                  <i className="fa fa-check-square-o"></i> Delete Checked Item's
                </button>
              </div>

              <div className="tab-pane" id="assignment">
                <a href="">
                  <div className="well well-sm" style=  {{margin: "0px"}}>
                    Open GL Assignments{" "}
                    <span className="pull-right">
                      <i className="glyphicon glyphicon-time"></i> 12:20 AM 20 Dec
                      2014{" "}
                    </span>
                  </div>
                </a>
              </div>

              <div className="tab-pane" id="event">
                <div className="media">
                  <a className="pull-left" href="#">
                    <img
                      className="media-object img-thumbnail"
                      width="100"
                      src="https://via.placeholder.com/200x200"
                      alt="..."
                    />
                  </a>
                  <div className="media-body">
                    <h4 className="media-heading">Animation Workshop</h4> 2Days
                    animation workshop to be conducted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade bs-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <br />
            <br />
            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <label className="col-md-2 control-label" for="body">
                    Body :
                  </label>
                  <div className="col-md-8">
                    <input
                      id="body"
                      name="body"
                      type="text"
                      placeholder="Message Body"
                      className="form-control input-md"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-2 control-label" for="message">
                    Message :
                  </label>
                  <div className="col-md-8">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-2 control-label" for="send"></label>
                  <div className="col-md-8">
                    <button id="send" name="send" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
