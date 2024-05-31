import React from 'react'
import bootcamp from "../assests/datacode1.png";
import badge from "../assests/badge.jpg";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import photo from "../assests/photo.png"
const Home = () => {
  return (

    <div className='home'>
        {/* <img src={bootcamp} alt="Graphics"/> */}
        <div class="colored-section"></div>
           <img src={bootcamp} alt="Graphics"/>
           <div className='wrapper'>
           <div>

           <div className='description'>
                <h1>Azure Fundamental Bootcamp</h1>
                <p>Join us for the Google Workspace Summit for Europe</p>
           </div>

                <div className='info'>
                    <div className='time'>
                    <CalendarMonthIcon/>
                    <p>20 jan 2024 | 10:00AM TO 2:00PM</p>
                    </div>
                    <div className='venue'>
                            <AddLocationIcon/>
                            <p>datacode.in , Plot no 156, Vijay Nagr</p>
                    </div>
                </div>
                <div className='feedback'>
                        <div className='number'>
                            <h6>Event Attended</h6>
                            <p>Joined by 200+ participants</p>
                        </div>
                    <button>feedback</button>
                </div>
           </div>

                <div className='hosted'>Hosted By
                    <div className='hostedcontent'>
                        <img src = {badge} alt='badge'/>
                        <div>
                            <h3>Datacode.in</h3>
                            <p>Join us for the Google Workspace event</p>
                        </div>
                    </div>
                </div>
           </div>
           <br></br>
           <br></br>
           <hr style={{ color: 'grey', backgroundColor: 'grey' }}/>
           <div className='about'>
          <h1>About the event</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe
          </p>

          <div className='speaker'>
            <h2>Speaker</h2>
            <div className='full'>
           <img src={photo} alt='profile'></img>
           <div className='speaker-desc'>
            <h4>AKSHAY</h4>
            <p>description</p>
           </div>
           
           </div>
        </div>
        </div>
        
    </div>
  )
}

export default Home