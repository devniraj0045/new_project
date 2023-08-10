import{FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import Product from './Product'

const Canvas = () => {
  return (
    <section className="programs">
    <div className="container programs__container">
           <SectionHead icon={<FaCrown/>} title="Canvas"/>
        </div>
           <Product/>
           </section>
  )
}

export default Canvas