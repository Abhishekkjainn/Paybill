import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterVendor() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    gstNumber: '',
    registrationNumber: '',
    logoLink: '',
    address: '',
    citystatepincode: '',
  });

  const [currentStep, setCurrentStep] = useState(0); // Track the current step
  const totalSteps = 10; // Total number of steps (including all fields)
  const [errors, setErrors] = useState({}); // Track validation errors

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the current field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1); // Move to the next step
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1); // Move to the previous step
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      gstNumber: '',
      registrationNumber: '',
      logoLink: '',
      address: '',
      citystatepincode: '',
    });
    setCurrentStep(0); // Reset the step to 0
    setErrors({}); // Clear any validation errors
  };

  const validateCurrentStep = () => {
    let isValid = true;
    const newErrors = {};

    // Validate based on the current step
    if (currentStep === 0 && !formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (
      currentStep === 1 &&
      (formData.phone.length !== 10 || isNaN(formData.phone))
    ) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
      isValid = false;
    }
    if (currentStep === 2 && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }
    if (currentStep === 3 && !formData.businessName) {
      newErrors.businessName = 'Business name is required';
      isValid = false;
    }
    if (currentStep === 4 && formData.gstNumber.length !== 15) {
      newErrors.gstNumber = 'GST number must be exactly 15 characters long';
      isValid = false;
    }

    if (currentStep === 7 && !formData.address) {
      newErrors.address = 'Address is required';
      isValid = false;
    }
    if (currentStep === 8 && !formData.citystatepincode) {
      newErrors.citystatepincode = 'City, State, and Pincode are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="registerVendorpage">
      {/* Dynamic form steps */}
      <div className="formtag">
        <img
          src={
            currentStep === 0 || currentStep === 1 || currentStep === 2
              ? '/personal.png'
              : currentStep === 3 ||
                currentStep === 4 ||
                currentStep === 5 ||
                currentStep === 6
              ? '/businessicon.png'
              : currentStep === 9
              ? '/preview.png'
              : '/location.png'
          }
          alt=""
          className="formtagimage"
        />
        <div className="formtagtext">
          {currentStep === 0 || currentStep === 1 || currentStep === 2
            ? 'Personal Details'
            : currentStep === 3 ||
              currentStep === 4 ||
              currentStep === 5 ||
              currentStep === 6
            ? 'Business Details'
            : currentStep === 9
            ? 'Review Information'
            : 'Location Details'}
        </div>
      </div>
      <div className="formheading">
        {currentStep === 0
          ? 'What Should we call You?'
          : currentStep === 1
          ? 'Enter Your Phone Number !'
          : currentStep === 2
          ? 'Enter Your Email Address !'
          : currentStep === 3
          ? 'Enter Your Business Name.'
          : currentStep === 4
          ? 'Enter GST Number.'
          : currentStep === 5
          ? 'Enter Business Registration Number.'
          : currentStep === 6
          ? 'Enter Business Logo Link.'
          : currentStep === 7
          ? 'Enter Complete Address.'
          : currentStep === 8
          ? 'Enter City, State, Pincode'
          : 'Review Your Details'}
      </div>

      {/* Display input based on the current step */}
      {currentStep === 0 && (
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="inputregister"
          autoComplete="on"
        />
      )}
      {errors.name && <div className="error">{errors.name}</div>}

      {currentStep === 1 && (
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="inputregister"
          autoComplete="on"
        />
      )}
      {errors.phone && <div className="error">{errors.phone}</div>}

      {currentStep === 2 && (
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="inputregister"
          autoComplete="on"
        />
      )}
      {errors.email && <div className="error">{errors.email}</div>}

      {currentStep === 3 && (
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleInputChange}
          className="inputregister"
          autoComplete="on"
        />
      )}
      {errors.businessName && (
        <div className="error">{errors.businessName}</div>
      )}

      {currentStep === 4 && (
        <input
          type="text"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleInputChange}
          className="inputregister"
          autoComplete="on"
        />
      )}
      {errors.gstNumber && <div className="error">{errors.gstNumber}</div>}

      {currentStep === 5 && (
        <input
          type="text"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleInputChange}
          className="inputregister"
          autoComplete="on"
        />
      )}

      {currentStep === 6 && (
        <input
          type="text"
          name="logoLink"
          value={formData.logoLink}
          onChange={handleInputChange}
          className="inputregister"
          autoComplete="on"
        />
      )}

      {currentStep === 7 && (
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="inputregister"
          autoComplete="on"
        />
      )}
      {errors.address && <div className="error">{errors.address}</div>}

      {currentStep === 8 && (
        <input
          type="text"
          name="citystatepincode"
          value={formData.citystatepincode}
          onChange={handleInputChange}
          className="inputregister"
          placeholder="Enter City, State, Pincode (e.g., Vellore, Tamil Nadu, 632014)"
          autoComplete="on"
        />
      )}
      {errors.citystatepincode && (
        <div className="error">{errors.citystatepincode}</div>
      )}

      {/* Display form review step */}
      {currentStep === 9 && (
        <div className="formReview">
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="buttonssection">
        <div className="resetbutton" onClick={handleResetForm}>
          Reset
        </div>
        <div className="nextbutton" onClick={handlePrevStep}>
          <img src="/back.png" alt="" className="arrowsectionback" />
          Prev
        </div>
        <div
          className="nextbutton"
          onClick={handleNextStep}
          disabled={isLastStep} // Disable next button on the last step
        >
          {isLastStep ? 'Submit' : 'Next'}{' '}
          <img src="/next.png" alt="" className="arrowsection" />
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`pg ${index === currentStep ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
