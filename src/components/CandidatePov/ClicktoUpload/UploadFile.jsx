import { NavLink } from 'react-router-dom';
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import Logo from '../../Logo';


const UploadFile = () => {
  return (
    <div className="bg-black w-full h-screen ">
        <div className='max-w-[1300px] mx-auto flex items-center gap-x-[50%] px-[10px] sm:px-[20px] sm:gap-x-[20%] py-[30px]'>
    <Logo />
      <div className="text-center rounded-full bg-white p-[10px] w-[50px] h-[50px]">
        <div className="bg-teal-600 text-white w-[30px] flex items-center justify-center h-[30px] rounded-full p-2">
          <span className="font-bold text-xl">S</span>
        </div>
      </div>
      </div>
      <div className="text-white bg-color-green rounded-xl border border-dashed px-[20px] w-full max-w-[708px] mx-auto p-[100px]">
      {/* Upload icon */}
      <div className="flex justify-center items-center mx-auto">
        <label htmlFor="file-upload" className="bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
          <MdOutlineDriveFolderUpload className="text-2xl color-black" />
        </label>
        <input id="file-upload" type="file" className="hidden" />
      </div>


       <h6 className='text-[26px] inter font-bold text-white text-center p-2'>Click to Upload <span className='color-black font-semibold'>or drag and drop</span></h6>
       <p className='text-[16px] font-normal inter text-center'> (Max. File size: 25 MB)</p>
      </div>
      <div className=' mt-[40px] flex justify-center items-center w-full'>
      <NavLink to="/welcome_to_pluto" className="color-green bg-white px-[30px] py-[5px] rounded-[20px]" >Next</NavLink>
     </div>
    </div>
  );
};

export default UploadFile;
