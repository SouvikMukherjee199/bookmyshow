import { Disclosure } from '@headlessui/react'
import { FaChevronRight } from "react-icons/fa6";

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
const PlaysFilter = (props) =>  {
  return (


<Disclosure >
{({ open }) => (
  /* Use the `open` state to conditionally change the direction of an icon. */
  <>
    <Disclosure.Button className="py-2 flex items-center gap-3" >
     {open ? <FaChevronUp /> : <FaChevronDown/>}
     
     <span className={open? "text-red-600" : "text-gray-700"}>
     {props.title}
     </span>
    </Disclosure.Button>
    <Disclosure.Panel className="text-gray-500">
        <div className="flex items-center gap-3 flex-wrap">
        {
         props.tags.map((tag) => (
         <>
         <div className='border-2 border-gray-200 p-2'>
         <span className='text-red-600'>{tag}</span>
         </div>

         </>
         
         ))
}
        
        </div> 
    </Disclosure.Panel>
  </>
)}
</Disclosure>
  )
}
 
export default PlaysFilter;