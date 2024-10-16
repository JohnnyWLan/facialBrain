
import './ImageLinkForm.css';

const ImageLinkForm = ({onChange, onSubmit})=>{
    return(
<div >
  <p className='f3 black'>
    {'This Magic Brain will detect faces in your pictures. Give it a try.'}
  </p>
  <div className='center'>
    <div className='form center pa4 br3 shadow-5'>
    <input className='f4 bg-white black pa2 w-70 center' type='text' onChange={onChange}/>
    <button className='w-30 grow f4 link ph3 pv2 div white bg-light-purple' onClick={onSubmit}>Detect</button>
  </div>
  </div>
</div>

        
    )
}


export default ImageLinkForm;