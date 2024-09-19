import React from 'react'
import './Testimonials.css'
import user1 from './assets/user1.jpeg'
import user2 from './assets/user2.jpeg'
import user3 from './assets/user3.jpeg'

const Testimonials = () => {
  return (
    <div className="testimonials" id='testimonials'>
        <div className="container">
            <h2>Testimonials</h2>
            <span className="lin"></span>
            <div className="content">
                <div className="card">
                    <img src={user1} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos laudantium doloribus quidem cumque impedit asperiores natus esse adipisci ratione nam.</p>
                    <p><span>Johnson.M.J</span></p>
                    <p>Director of 'Financial Times'</p>
                </div>
                <div className="card">
                    <img src={user2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe soluta magni rerum impedit fugit molestiae distinctio ipsa voluptates illo.</p>
                    <p><span>Carol Harper</span></p>
                    <p>Director at Risktec Solutions Ltd</p>
                </div>
                <div className="card">
                    <img src={user3} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum ab sint explicabo, ducimus amet. Perferendis explicabo et omnis nulla dolorem facere numquam, possimus exercitationem dicta maiores quo, hic iste!</p>
                    <p><span>Snow.J.R</span></p>
                    <p>Managing Director of BPW Global</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonials