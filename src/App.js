import React from 'react'
import './App.css'
import NavComp from './components/NavComp'

class App extends React.Component{
  render(){
    return (
      <div className="App">

        <div className="content">
          <div className="header">
            <div className="logo">QTemu</div>
            <div className="nav"><NavComp /></div>
            <div className="func">Login</div>
          </div>
          <div className="single">
            <div className="contentprofile">
              <div className="cprofile"></div>
              <div className="cprofiledetail">
                <b>Meetup</b>
                <table border="0">
                  <tr>
                    <td>Location</td>
                    <td>Jakarta, Indonesia</td>
                  </tr>
                  <tr>
                    <td>Member</td>
                    <td>1,078</td>
                  </tr>
                  <tr>
                    <td>Organizers</td>
                    <td>Sugeng Handoko</td>
                  </tr>
                </table>
                <button type="button">Join Us</button>
              </div>
            </div>
          </div>
          <div className="single">
            <div className="content">
              <div className="left"><b>Next Meetup</b></div>
              <div className="center"></div>
              <div className="right"></div>
            </div>
            <div className="content">
              <div className="single">
                <b>Awesome meetup and event</b><br/>
                25 January 2018<br/>
                <b>Hello, JavaScript & Node.js Ninjas!<br/>
                Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br/>
                The meetup format will contain some short stories and technical talks.<br/>
                If you have short announcement you'd like to share with the audience, you may do so during open mic announcements. Remember to bring a photo ID to get through building security.<br/> 
                See you there!<br/>
                Best, The JakartaJS Organizers</b>
              </div>
            </div>
          </div>
          <div className="single">
            <div className="content">
              <div className="left"><b>About Meetup</b></div>
              <div className="center"></div>
              <div className="right"></div>
            </div>
            <div className="content">
              <div className="single">
                <b>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.<br/>
                Twitter: @JakartaJS and we use the hashtag #jakartajs</b>
              </div>
            </div>
          </div>
          <div className="single">
            <div className="content">
              <div className="left"><b>Members</b></div>
              <div className="center"></div>
              <div className="right">See all</div>
            </div>
            <div className="content">
              <div className="single">
                <table border="0">
                  <tr>
                    <td rowspan="3">&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="2">Organizers</td>
                  </tr>
                  <tr>
                    <td>Sugeng Handoko</td>
                    <td>4 others</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="single">
            <div className="content">
              <div className="left"><b>Past Meetups</b></div>
              <div className="center"></div>
              <div className="right">See all</div>
            </div>
            <div className="content">
              <div className="cleft">
                27 November 2017<br/><br/>
                #39 JakartaJS April Meetup with ABC<br/>
                139 went<br/>
                <button type="button">View</button>
              </div>
              <div className="ccenter">
                27 Oktober 2017<br/><br/>
                #39 JakartaJS April Meetup with DEF<br/>
                113 went<br/>
                <button type="button">View</button>
              </div>
              <div className="cright">
                27 September 2017<br/><br/>
                #39 JakartaJS April Meetup with GHI<br/>
                110 went<br/>
                <button type="button">View</button>
              </div>
            </div>
          </div>
          {/* <div className="left">Left</div>
          <div className="center">Center</div>
          <div className="right">Right Kanan</div> */}

          <div className="footer">Copyright 2021</div>
        </div>

       </div>
    )
  }
}



export default App
