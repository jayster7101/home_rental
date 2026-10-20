import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { House, MapPin, BedDouble, Bath, Maximize, Images, Plus, X, ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react'
import { property as p } from './data/property'
import './App.css'

type PhotoData = typeof p.photos[number]
function Photo({photo, big=false}:{photo:PhotoData;big?:boolean}) {
  return <div className={'photo '+(big?'big':'')}>
    {photo.src ? <img src={photo.src} alt={photo.alt} loading={big?'eager':'lazy'}/> : <div className="placeholder"><span className="number">{String(photo.id+1).padStart(2,'0')}</span><div className="empty"><Images size={big?38:26} strokeWidth={1}/><span>Photo coming soon</span></div></div>}
    <span className="caption">{photo.label}</span>
  </div>
}
export default function App(){
  const [active,setActive]=useState(0)
  const [room,setRoom]=useState('All photos')
  const rooms=['All photos',...new Set(p.photos.map(photo=>photo.group))]
  const visiblePhotos=p.photos.map((photo,index)=>({photo,index})).filter(({photo})=>room==='All photos'||photo.group===room)
  const dialog=useRef<HTMLDialogElement>(null)
  const reduced=useReducedMotion()
  const show=(i:number)=>{setActive(i);dialog.current?.showModal()}
  const next=(d:number)=>setActive(i=>(i+d+p.photos.length)%p.photos.length)
  const facts=[{Icon:BedDouble,value:p.bedrooms,label:'Bedrooms'},{Icon:Bath,value:p.bathrooms,label:'Bathrooms'},{Icon:Maximize,value:p.area,label:'Square feet'},{Icon:House,value:'Home',label:'Property type'}]
  return <>
    <a href="#main" className="skip">Skip to listing</a>
    <header><div className="wrap header"><a className="brand" href="#"><House size={23}/>{p.brand}<span>.</span></a><nav aria-label="Main navigation"><a href="#overview">Overview</a><a href="#photos">Photos</a><a href="#details">Details</a></nav><a className="button dark" href="#contact">Get in touch</a></div></header>
    <main id="main" className="wrap">
      <motion.section className="intro" initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.4}}><div><p className="eyebrow">HOME FOR RENT</p><h1>{p.headline}</h1><p className="location"><MapPin size={17}/>{p.location}</p></div><div className="price"><span>Monthly rent</span><strong>{p.rent}<small> / month</small></strong><span>{p.availability}</span></div></motion.section>
      <section className="hero" aria-label="Property photos">{p.photos.slice(0,3).map((photo,i)=><button key={photo.id} className={'photo-button '+(i===0?'main-photo':'')} onClick={()=>show(i)} aria-label={'View '+photo.label+' photo'}><Photo photo={photo} big={i===0}/></button>)}<button className="button gallery" onClick={()=>show(0)}><Images size={17}/>View all {p.photos.length} photos</button></section>
      <section className="facts" aria-label="Property at a glance">{facts.map(({Icon,value,label})=><div className="fact" key={label}><Icon size={25} strokeWidth={1.4}/><div><strong>{value}</strong><span>{label}</span></div></div>)}</section>
      <div className="body"><div className="content">
        <section id="overview"><p className="eyebrow">01 / THE HOME</p><h2>Room for your everyday.</h2><p className="description">{p.description}</p><p className="description">{p.secondary}</p><div className="highlights">{p.highlights.map(x=><div key={x}><Plus size={17}/>{x}</div>)}</div></section>
        <section id="photos"><div className="section-head"><div><p className="eyebrow">02 / TAKE A LOOK</p><h2>Explore the space.</h2></div><span>{visiblePhotos.length} photos</span></div><div className="room-filters" role="group" aria-label="Filter photos by room">{rooms.map(name=><button key={name} className={room===name?'selected':''} aria-pressed={room===name} onClick={()=>setRoom(name)}>{name}</button>)}</div><div className="photo-grid">{visiblePhotos.map(({photo,index:i})=><button key={photo.id} className="photo-button" aria-label={'View '+photo.label+' photo'} onClick={()=>show(i)}><Photo photo={photo}/></button>)}</div></section>
        <section id="details"><p className="eyebrow">03 / THE DETAILS</p><h2>Make yourself at home.</h2><p className="description">{p.termsIntro}</p><dl>{p.terms.map(x=><div key={x.label}><dt>{x.label}</dt><dd>{x.value}</dd></div>)}</dl></section>
        <section><p className="eyebrow">04 / AROUND HERE</p><h2>The neighborhood.</h2><p className="description" style={{ whiteSpace: 'pre-line' }}>
  {p.neighborhood}
</p><div className="location-box"><MapPin size={22}/><div><strong>{p.location}</strong></div></div></section>
      </div><aside id="contact"><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>See it for yourself.</h2><p className="description">{p.contactIntro}</p><div className="card-price"><span>Monthly rent</span><strong>{p.rent}<small> / month</small></strong></div>
        {p.email?<a
  className="button dark contact"
  href={`mailto:${p.email}?subject=${encodeURIComponent(
    `Modesto rental inquiry`
  )}&body=${encodeURIComponent(
    `Hello,

I'm interested in the rental in ${p.location}.

CONTACT
Full name:
Phone number:

RENTAL PLANS
Preferred move-in date:
Month-to-month rental:
Number of occupants:
Number of vehicles:

I understand that pets are not permitted.

VIEWING
Preferred dates and times (Please list a few options):
* Example: Saturday, October 15th between 2:00 PM - 4:00 PM

QUESTIONS
Questions about the home or rental terms:

Please let me know whether the home is available and what the next steps are.

Thank you!`
  )}`}
>
  <Mail size={17} />
  Email the owner
</a>:<div className="pending"><Mail size={17}/>modesto-unit@gmail.com</div>}
        {p.phone?<a className="button contact" href={'tel:'+p.phone}><Phone size={17}/>{p.phone}</a>:<div className="pending"><Phone size={17}/>Phone coming soon</div>}
        <div className="owner"><House size={25}/><div><strong>{p.owner}</strong><span>Listed by the owner</span></div></div>
      </aside></div>
    </main><footer><div className="wrap footer"><a className="brand" href="#">{p.brand}<span>.</span></a><span>HOME FOR RENT</span><span>© {new Date().getFullYear()} {p.brand}</span></div></footer>
    <dialog ref={dialog} aria-labelledby="gallery-title" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}} onKeyDown={e=>{if(e.key==='ArrowLeft'){e.preventDefault();next(-1)}if(e.key==='ArrowRight'){e.preventDefault();next(1)}}}><div className="dialog-head"><h2 id="gallery-title">{p.photos[active].label} <small>{active+1} / {p.photos.length}</small></h2><button className="icon-button" aria-label="Close gallery" onClick={()=>dialog.current?.close()}><X/></button></div><Photo photo={p.photos[active]} big/><div className="dialog-controls"><button className="button" onClick={()=>next(-1)}><ChevronLeft size={18}/>Previous</button><button className="button" onClick={()=>next(1)}>Next<ChevronRight size={18}/></button></div></dialog>
  </>
}
