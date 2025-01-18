{
  /* <div className="formcard">
        <div className="formhead">
          <div className="formheadtext">
            {index === 1
              ? '1. Add Personal Details.'
              : index === 2
              ? '2. Add Business Details.'
              : index === 3
              ? '3. Add Location Details.'
              : '4. Review Information.'}
          </div>
          <div className="formnavigation">
            <div className="previous" onClick={decreaseIndex}>
              <img
                src="/forward.png"
                alt="previous arrow"
                className="prevarrow"
              />
            </div>
            <div className="forward" onClick={increaseIndex}>
              <img
                src="/forward.png"
                alt="Forward arrow"
                className="forwarrow"
              />
            </div>
          </div>
        </div>

        {index === 1 && (
          <div className="forminputs">
            <FormInputGroup
              label="Name"
              type="text"
              value={formData.name}
              onChange={(value) => handleChange('name', value)}
              placeholder="Enter Your Name"
              icon="/user.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="Phone"
              type="number"
              value={formData.phone}
              onChange={(value) => handleChange('phone', value)}
              placeholder="Enter Your Phone No."
              icon="/phone.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => handleChange('email', value)}
              placeholder="Enter Your Email."
              icon="/email.png"
            />
          </div>
        )}

        {index === 2 && (
          <div className="forminputs">
            <FormInputGroup
              label="Business Name"
              type="text"
              value={formData.businessName}
              onChange={(value) => handleChange('businessName', value)}
              placeholder="Enter Business Name"
              icon="/business.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="Business Type"
              type="text"
              value={formData.businessType}
              onChange={(value) => handleChange('businessType', value)}
              placeholder="Enter Business Type"
              icon="/businesstype.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="GST"
              type="text"
              value={formData.gst}
              onChange={(value) => handleChange('gst', value)}
              placeholder="Enter GST Number"
              icon="/gst.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="Business Reg Number"
              type="text"
              value={formData.businessRegNo}
              onChange={(value) => handleChange('businessRegNo', value)}
              placeholder="Enter Business Reg Number"
              icon="/registration.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="Logo Link"
              type="text"
              value={formData.logoLink}
              onChange={(value) => handleChange('logoLink', value)}
              placeholder="Enter Logo Link"
              icon="/logo.png"
            />
          </div>
        )}

        {index === 3 && (
          <div className="forminputs">
            <FormInputGroup
              label="Address"
              type="text"
              value={formData.address}
              onChange={(value) => handleChange('address', value)}
              placeholder="Enter Address"
              icon="/address.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="State"
              type="text"
              value={formData.state}
              onChange={(value) => handleChange('state', value)}
              placeholder="Enter State"
              icon="/state.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="City"
              type="text"
              value={formData.city}
              onChange={(value) => handleChange('city', value)}
              placeholder="Enter City"
              icon="/city.png"
            />
            <div className="space"></div>
            <FormInputGroup
              label="Pincode"
              type="number"
              value={formData.pincode}
              onChange={(value) => handleChange('pincode', value)}
              placeholder="Enter Pincode"
              icon="/postalcode.png"
            />
          </div>
        )}

        {index === 4 && <ReviewInfo formData={formData} />}

        <div className="formbuttons">
          <div
            className="formbutton"
            onClick={index === 4 ? Submitregs : increaseIndex}
          >
            {index === 4 ? 'Submit' : 'Next'}
          </div>
          <div className="formbuttonsec" onClick={openModal}>
            Reset
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal-title">Confirm Reset</h3>
            <p className="modal-message">
              Are you sure you want to reset all the data?
            </p>
            <div className="modal-buttons">
              <button className="modal-button confirm" onClick={resetForm}>
                Yes, Reset
              </button>
              <button className="modal-button cancel" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="loading-overlay">
          <div className="loaderdiv">
            <Lottie
              className="loaderanim"
              loop
              animationData={loader}
              play
              style={{ width: 100, height: 100 }}
            />
          </div>
        </div>
      )}

      {statusModal && (
        <div className="statusmodal-overlay">
          <div className="statusmodal">
            <Lottie
              className="statusanim"
              loop
              animationData={statusData.anim}
              play
              style={{ width: 200, height: 200 }}
            />
            <div className="statushead">{statusData.title}</div>
            <div className="statusmessage">{statusData.message}</div>
          </div>
        </div>
      )} */
}

// .registerVendorpage{
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   background-color: white;
// }
// .formcard{
//   width: 75%;
//   height: calc(100% - 60px);
//   padding: 40px;
//   margin-top: 60px;
//   background-color: white;
//   border-radius: 0px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }
// .formhead{
//   width: 100%;
//   height: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   /* color: white; */
// }
// .formheadtext{
//   font-size: 36px;
//   font-weight: 500;
//   color: black;
// }
// .forwarrow,.prevarrow{
//   width: 15px;
//   /* filter: invert(1); */
// }
// .prevarrow{
//   transform: rotate(180deg);
// }
// .formnavigation{
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .forward,.previous{
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   /* background-color: #cccccc; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 5px;
// }
// .forminputs{
//   width: 100%;
//   height: auto;
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   /* flex-direction: column; */
//   flex-wrap: wrap;
//   margin-top: 20px;
//   /* background-color: #000000; */
// }

// /*inputs*/
// /* From Uiverse.io by ozgeozkaraa01 */
// .group {
//   display: flex;
//   line-height: 30px;
//   align-items: center;
//   position: relative;
//   max-width: 50%;
//   font-family: 'DM Sans';
//   margin-top: 12px;
// }

// .input {
//   width: 100%;
//   height: 45px;
//   line-height: 30px;
//   padding: 0 5rem;
//   padding-left: 3rem;
//   border: 1px solid rgb(214, 214, 214);
//   border-radius: 10px;
//   outline: none;
//   background-color: #f6f6f6;
//   color: #000000;
//   transition: .5s ease;
//   font-size: 14px;
//   font-weight: 400;
// }

// .input::placeholder {
//   color: #333333;
//   font-size: 12px;
//   font-weight: 500;
// }

// .input:focus, input:hover {
//   outline: none;

// }

// .icon {
//   position: absolute;
//   left: 1rem;
//   fill: none;
//   width: 1rem;
//   height: 1rem;
//   scale: 0.9;
// }
// .space{
//   width: 12px;
//   height: 12px;
// }

// .formbuttons{
//   width: 100%;
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   margin-top: 40px;
// }
// .formbutton{
//   width: 100px;
//   height: 40px;
//   background-color: #0055ff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-weight: 500;
//   font-size: 14px;
//   border-radius: 8px;
// }
// .formbutton:hover,.formbuttonsec:hover{
//   cursor: pointer;
// }
// .formbuttonsec{
//   color: #0055ff;
//   font-weight: 500;
//   font-size: 14px;
//   margin-left: 20px;
// }
// .review{
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   flex-wrap: wrap;
// }
// /* General Styling */
// .review {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 16px;
//   margin: 20px auto;
//   max-width: 90%;
//   min-width: 75%;
// }

// /* Vendor Card UI */
// .review-card {
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 12px;
//   border: 1px solid rgb(190, 190, 190);
//   overflow: hidden;
//   max-width: 100%;
//   width: 100%;
//   text-align: left;
// }

// /* Title and Subtitle */
// .review-title {
//   font-size: 20px;
//   font-weight: 600;
//   margin-bottom: 4px;
//   color: #333;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   margin-bottom: 20px;
//   margin-top: 0;
//   display: flex;
//   justify-content: start;
//   align-items: center;
// }

// .review-subtitle {
//   font-size: 14px;
//   font-weight: 500;
//   color: #777;
//   margin-bottom: 16px;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// }

// /* Details Section */
// .review-details {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 12px 12px;
// }

// .review-row {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 10px;
// }

// .review-label {
//   font-weight: 500;
//   color: #555;
//   margin-right: 8px;
// }

// .review-value {
//   font-weight: 600;
//   color: #000;
//   text-align: right;
//   overflow: hidden;
//   white-space: wrap;
//   text-overflow: ellipsis;
// }
// .logoimg{
//   width: 40px;
//   height: 40px;
//   border-radius: 10px;
//   margin-right: 12px;
// }

// /* Mobile Responsiveness */
// @media (max-width: 600px) {
//   .review-details {
//     grid-template-columns: 1fr;
//   }
// }

// /*Modal*/
// .modal-overlay,.loading-overlay,.statusmodal-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// }

// .loaderdiv{
//   background-color: white;
//   border-radius: 20px;
//   padding: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .loaderanim{
//   scale: 2;
// }
// .statusanim{
//   transform: translateY(-20px);
// }
// .statusmodal{
//   padding: 20px;
//   background-color: white;
//   border-radius: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }
// .statushead{
//   font-size: 22px;
//   color: black;
//   font-weight: 500;
//   transform: translateY(-30px);
// }
// .statusmessage{
//   width: 80%;
//   text-align: center;
//   font-size: 16px;
//   font-weight: 400;
//   color: grey;
//   transform: translateY(-20px);
// }

// .modal {
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   width: 400px;
//   text-align: center;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// }

// .modal-title {
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// }

// .modal-message {
//   margin-bottom: 20px;
//   color: #555;
// }

// .modal-buttons {
//   display: flex;
//   justify-content: space-around;
// }

// .modal-button {
//   padding: 10px 20px;
//   font-size: 1rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .modal-button.confirm {
//   background-color: #ff4d4d;
//   color: white;
// }

// .modal-button.cancel {
//   background-color: #ddd;
//   color: #333;
// }

// .modal-button:hover {
//   opacity: 0.9;
// }
