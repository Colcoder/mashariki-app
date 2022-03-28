const Convert = () => {
    return(
       <>
        <div className = "convert-section">
        <p id="convert-title">Convert</p>
        <div className="convert-form-section">
            <form className="convert-form" >
              <label htmlFor = "from">From :</label>

           <div className="select-div">
           <select id="from">
               <option selected value="" hidden disabled>
                 --choose currency--
               </option>
               <option value="kenyan">KENYA(shillings)</option>
               <option value="tanzanian">UGANDA(shillings)</option>
               <option value="ugandan">UGANDA(shillings)</option>
            </select>
           </div>

            <label htmlFor = "to">To :</label>

           <div className="select-div">
           <select id="to" >
               <option selected value="" hidden disabled>
                 --choose currency--
               </option>
               <option value="kenyan">KENYA(shillings)</option>
               <option value="tanzanian">UGANDA(shillings)</option>
               <option value="ugandan">UGANDA(shillings)</option>
            </select>

           </div>
            <div className="convert-amount">
            <label htmlFor="amount" id="amount-to-convert">Amount to convert ?</label>
            <input type="number" id="amount" name="amount"  required/>

            

            <input type="submit" id="convert-btn" value="CONVERT"/>
            </div>

            <label htmlFor="result">RESULT : </label>
            <div></div> 

            </form>
            
        </div>
        </div>

       </>
    )
}

export default Convert;