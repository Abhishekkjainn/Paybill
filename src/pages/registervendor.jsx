import React, { useState } from 'react';

const FormInputGroup = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon,
}) => (
  <div className="group">
    <img src={icon} alt={label} className="icon" />
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const ReviewInfo = ({ formData }) => {
  const logolink = formData.logoLink;

  // Filter out 'logoLink' from the formData
  const filteredData = Object.entries(formData).filter(
    ([key]) => key !== 'logoLink'
  );

  return (
    <div className="review">
      <div className="review-card">
        <h3 className="review-title">
          {logolink ? (
            <img className="logoimg" src={logolink} alt="Business Logo" />
          ) : (
            <span>No Logo Available</span> // Fallback message if no logo is available
          )}
          {`${formData.businessName} - ${formData.businessType}`}
        </h3>
        <div className="review-details">
          {filteredData.map(([key, value]) => (
            <div key={key} className="review-row">
              <span className="review-label">
                {key
                  .replace(/([A-Z])/g, ' $1') // Add spaces before uppercase letters
                  .replace(/^./, (str) => str.toUpperCase())}
                :
              </span>
              <span className="review-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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

  const decreaseIndex = () =>
    setIndex((prevIndex) => Math.max(prevIndex - 1, 1));

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

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
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
          <div className="formbutton" onClick={increaseIndex}>
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
    </div>
  );
}
