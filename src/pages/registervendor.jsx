import React, { useState } from 'react';

export default function RegisterVendor() {
  const [index, setIndex] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: '',
    gst: '',
    businessRegNo: '',
    logoLink: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateFields = () => {
    switch (index) {
      case 1:
        if (
          !formData.name ||
          !formData.phone.match(/^\d{10}$/) ||
          !formData.email.includes('@')
        ) {
          alert('Please fill all fields correctly in Personal Details.');
          return false;
        }
        break;
      case 2:
        if (!formData.businessName || !formData.businessType) {
          alert('Please fill Business Name and Business Type.');
          return false;
        }
        break;
      case 3:
        if (
          !formData.address ||
          !formData.state ||
          !formData.city ||
          !formData.pincode.match(/^\d{6}$/)
        ) {
          alert('Please fill all fields correctly in Location Details.');
          return false;
        }
        break;
      default:
        return true;
    }
    return true;
  };

  const increaseIndex = () => {
    if (validateFields()) {
      setIndex((prevIndex) => Math.min(prevIndex + 1, 4));
    }
  };

  const decreaseIndex = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 1));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      businessType: '',
      gst: '',
      businessRegNo: '',
      logoLink: '',
      address: '',
      state: '',
      city: '',
      pincode: '',
    });
    setIndex(1);
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="registerVendorpage">
      <div className="formcard">
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
        {index === 1 ? (
          <div className="forminputs forminput1">
            <div className="group nameinput">
              <img src="/user.png" alt="user" className="icon" />
              <input
                className="input"
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="space"></div>
            <div className="group phoneinput">
              <img src="/phone.png" alt="phone" className="icon" />
              <input
                className="input"
                type="number"
                placeholder="Enter Your Phone No."
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            <div className="group phoneinput">
              <img src="/email.png" alt="email" className="icon" />
              <input
                className="input"
                type="email"
                placeholder="Enter Your Email."
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
          </div>
        ) : index === 2 ? (
          <div className="forminputs forminput2">
            <div className="group businessnameinput">
              <img src="/business.png" alt="Business name" className="icon" />
              <input
                className="input"
                type="text"
                placeholder="Enter Business Name"
                value={formData.businessName}
                onChange={(e) => handleChange('businessName', e.target.value)}
              />
            </div>
            <div className="space"></div>
            <div className="group businesstypeinput">
              <img
                src="/businesstype.png"
                alt="business type"
                className="icon"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter Business type."
                value={formData.businessType}
                onChange={(e) => handleChange('businessType', e.target.value)}
              />
            </div>
            <div className="group gstinput">
              <img src="/gst.png" alt="gst" className="icon" />
              <input
                className="input"
                type="text"
                placeholder="Enter GST Number."
                value={formData.gst}
                onChange={(e) => handleChange('gst', e.target.value)}
              />
            </div>
            <div className="space"></div>
            <div className="group businessregnoinput">
              <img
                src="/registration.png"
                alt="registration number"
                className="icon"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter Business Reg Number."
                value={formData.businessRegNo}
                onChange={(e) => handleChange('businessRegNo', e.target.value)}
              />
            </div>
            <div className="group logolinkinput">
              <img src="/logo.png" alt="logolink" className="icon" />
              <input
                className="input"
                type="text"
                placeholder="Enter Business Logo Link."
                value={formData.logoLink}
                onChange={(e) => handleChange('logoLink', e.target.value)}
              />
            </div>
          </div>
        ) : index === 3 ? (
          <div className="forminputs forminput2">
            <div className="group businessnameinput">
              <img src="/address.png" alt="Business Address" className="icon" />
              <input
                className="input"
                type="text"
                placeholder="Enter Business Address."
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
            </div>
            <div className="space"></div>
            <div className="group businessstateinput">
              <img src="/state.png" alt="business state" className="icon" />
              <input
                className="input"
                type="text"
                placeholder="Enter Business State."
                value={formData.state}
                onChange={(e) => handleChange('state', e.target.value)}
              />
            </div>
            <div className="group cityinput">
              <img src="/city.png" alt="city" className="icon" />
              <input
                className="input"
                type="text"
                placeholder="Enter City Name."
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
              />
            </div>
            <div className="space"></div>
            <div className="group picondeinput">
              <img src="/postalcode.png" alt="postal Code" className="icon" />
              <input
                className="input"
                type="number"
                placeholder="Enter Pincode."
                value={formData.pincode}
                onChange={(e) => handleChange('pincode', e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="review">
            <div className="review-card">
              <h3 className="review-title">
                {formData.businessName + ' - ' + formData.businessType}
              </h3>
              {/* <p className="review-subtitle">{formData.businessType}</p> */}
              <div className="review-details">
                <div className="review-row">
                  <span className="review-label">Name:</span>
                  <span className="review-value">{formData.name}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">Phone:</span>
                  <span className="review-value">{formData.phone}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">Email:</span>
                  <span className="review-value">{formData.email}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">GST:</span>
                  <span className="review-value">{formData.gst}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">Registration No:</span>
                  <span className="review-value">{formData.businessRegNo}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">Logo Link:</span>
                  <span className="review-value">{formData.logoLink}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">Address:</span>
                  <span className="review-value">{formData.address}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">State:</span>
                  <span className="review-value">{formData.state}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">City:</span>
                  <span className="review-value">{formData.city}</span>
                </div>
                <div className="review-row">
                  <span className="review-label">Pincode:</span>
                  <span className="review-value">{formData.pincode}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="formbuttons">
          <div className="formbutton" onClick={increaseIndex}>
            {index == 4 ? 'Submit' : 'Next'}
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
    </div>
  );
}
