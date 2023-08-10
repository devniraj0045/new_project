import{FaCrown} from 'react-icons/fa'
import SectionHead from '../../components/SectionHead'
import SLc from './Slc'
import Neb from './Neb'
import Bachelor from './Bachelor'
import React from 'react'
const Acad = () => {
  return (
   <section id='academic'>
<div className="container Contact__container">
   <SectionHead icon={<FaCrown/>} title="Academic "/>
</div>
<SLc/>
<Neb/>
<Bachelor/>
</section>
  )
}

export default Acad