import{FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import{programs} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import React from 'react'


const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
           <SectionHead icon={<FaCrown/>} title="PROGRAMS"/>
        <div className="programs__wrapper">
          {
            programs.map(({id,icon, title, info ,path}) =>{
              return (
                <Card className="card__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className='btn sm'>Read more </Link></Card>
              )
            })
          }
        </div>
        </div>
    </section>
    
  )
}

export default Programs