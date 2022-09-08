import allDistricts from "./utils/districts";
import localBodies from "./utils/localBodies";

import {useRef,useState} from "react";



const useDistrictComponent = () => {
    const currentValue = useRef(null);
    const [localBodyAvailable, setLocalBodyAvailable] = useState(null);
    const [localBodySelected, setLocalBodySelected] = useState(null);
    const [provinceSelected, setProvinceSelected] = useState(null);
    const [districtSelected, setDistrictSelected] = useState(null);

    const district = allDistricts.map( district => {
        return <option key={district} value={district}>{district}</option>;
    });

    function changeProvince(e){
        setProvinceSelected(e.target.value);

    }

    function changeLocal(e){
        setLocalBodySelected(e.target.value);
    }

    function changeDistrict(e){
        const selectedDistrict = currentValue.current.value;
        setDistrictSelected(e.target.value)
        const local = Object.getOwnPropertyDescriptor(localBodies, selectedDistrict); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
        setLocalBodyAvailable(local.value);

    };

    const template = (
        <>
           <div className="province ">
               <label htmlFor="province"
                      >Province: </label>
               <select id="province" defaultValue={'default'} onChange={changeProvince} name="province"
                       ref={currentValue} required
                       >
                   <option value="default">Choose a Province</option>
                   <option value="Province 1">Province 1</option>
                   <option value="Janakpur">Janakpur</option>
                   <option value="Bagmati">Bagmati</option>
                   <option value="Gandaki">Gandaki</option>
                   <option value="Lumbini">Lumbini</option>
                   <option value="SudurPaschim">SudurPaschim</option>
               </select>
           </div>
           <div className="districts ">
            <label htmlFor="districts"
                   >District: </label>

            <select id="districts" defaultValue={'default'} onChange={changeDistrict} name="district"
                    ref={currentValue}
                    >
                <option  value="default">Choose a District</option>
                {district}
            </select>
        </div>
        <div className="local ">
            <label htmlFor="local"
                   >Local: </label>

            <select id="local" name="local" defaultValue={'default'} onChange={changeLocal}
                    >
                <option value="default">Choose a LocalBody</option>
                {localBodyAvailable && localBodyAvailable.map( localBody => <option key={localBody} value={localBody}>{localBody}</option>)}
            </select>
        </div>
            {/*{*/}
            {/*    <div>currentLocalBody: {localBodySelected}</div>*/}
            {/*}*/}
            {/*{*/}
            {/*    <div>currentProvince: {provinceSelected}</div>*/}
            {/*}*/}
            {/*{*/}
            {/*    <div>currentDistrict: {districtSelected}</div>*/}
            {/*}*/}
        </>
    )


   return {template, localBodySelected, provinceSelected, districtSelected};

};


export default useDistrictComponent;