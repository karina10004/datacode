import React from 'react'
import LinkIcon from "@mui/icons-material/Link";
const Agenda = () => {
  return (
    <div className="agenda">
      <div className="header">
        <h3>Agenda</h3>
        <p>icon</p>
      </div>
      <hr></hr>
      <table>
        <tr>
          <th>Time</th>
          <th className="midcol">Topic</th>
          <th>Resources</th>
        </tr>
        <tr className="bordergiven">
          <td>1:30 PM - 1:40 PM</td>
          <td className="midcol">
            <h2>Introductions</h2>
            <p>
              Join us to see how Google Workspace can help your organisation
              thrive in this era
            </p>
          </td>
          <td>
            How to get started with web development <LinkIcon />
          </td>
        </tr>
        <tr className="bordergiven">
          <td>1:30 PM - 1:40 PM</td>
          <td className="midcol">
            <h2>Introductions</h2>
            <p>
              Join us to see how Google Workspace can help your organisation
              thrive in this era
            </p>
          </td>
          <td>
            How to get started with web development <LinkIcon />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Agenda