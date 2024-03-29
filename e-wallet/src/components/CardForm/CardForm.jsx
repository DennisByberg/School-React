// sass
import "./CardForm.scss";

const Form = (cardFormData) => {
  // HANDLES
  function handleCCV(e) {
    cardFormData.setIsCcvValid(validateCcv(e.target.value));
    cardFormData.setCcv(e.target.value);
  }

  function handleVendor(e) {
    cardFormData.setIsVendorValid(validateVendor(e.target.value));
    cardFormData.setVendor(e.target.value);
  }

  function handleValidThruMM(e) {
    cardFormData.setIsValidThruMMValid(validateValidThru(e.target.value));
    cardFormData.setValidThruMM(e.target.value);
  }

  function handleValidThruYY(e) {
    cardFormData.setIsValidThruYYValid(validateValidThru(e.target.value));
    cardFormData.setValidThruYY(e.target.value);
  }

  function handleFirstName(e) {
    cardFormData.setIsFirstNameValid(validateName(e.target.value));
    cardFormData.setFirstName(e.target.value);
  }

  function handleLastName(e) {
    cardFormData.setIsLastNameValid(validateName(e.target.value));
    cardFormData.setLastName(e.target.value);
  }

  function handleCardNumberSectionOne(e) {
    cardFormData.setIsCardNumberSectionOneValid(
      validateCardNumber(e.target.value)
    );
    cardFormData.setCardNumberSectionOne(e.target.value);
  }
  function handleCardNumberSectionTwo(e) {
    cardFormData.setIsCardNumberSectionTwoValid(
      validateCardNumber(e.target.value)
    );
    cardFormData.setCardNumberSectionTwo(e.target.value);
  }
  function handleCardNumberSectionThree(e) {
    cardFormData.setIsCardNumberSectionThreeValid(
      validateCardNumber(e.target.value)
    );
    cardFormData.setCardNumberSectionThree(e.target.value);
  }

  function handleCardNumberSectionFour(e) {
    cardFormData.setIsCardNumberSectionFourValid(
      validateCardNumber(e.target.value)
    );
    cardFormData.setCardNumberSectionFour(e.target.value);
  }

  // VALIDATES
  function validateCcv(ccvString) {
    // kontrollerar om ccv är ett tresiffrigt nummer...
    if (ccvString.length === 3 && !isNaN(ccvString)) {
      // parsa ccv till number...
      const ccvNumber = parseInt(ccvString, 10);
      // kontrollerar om ccvNumber är mellan 0 till 999...
      if (ccvNumber >= 0 && ccvNumber <= 999) {
        return true;
      }
    }
    return false;
  }

  function validateVendor(vendor) {
    return vendor.length > 0;
  }

  function validateValidThru(MMorYY) {
    // kontrollerar om MMorYY är ett tvåsiffrigt nummer...
    if (MMorYY.length === 2 && !isNaN(MMorYY)) {
      // parsa MMorYY till number...
      const MMorYYNumber = parseInt(MMorYY);
      // kontrollerar om MMorYYNumber är mellan 0 till 99...
      if (MMorYYNumber >= 0 && MMorYYNumber <= 99) {
        return true;
      }
    }
    return false;
  }

  function validateName(name) {
    // kontrollerar om namnet är minst 3 tecken långt...
    if (name.length < 3) {
      return false;
    }

    // konverterar namnparametern till gemener...
    name = name.toLowerCase();
    const validChars = "abcdefghijklmnopqrstuvwxyzåäö";
    // loopar genom varje tecken i namnparametern...
    for (let i = 0; i < name.length; i++) {
      // om tecknet inte finns i validChars-matrisen, returnera false...
      if (validChars.indexOf(name.charAt(i)) === -1) {
        return false;
      }
    }
    // om alla tecken är giltiga och namnet är minst 3 tecken långt, returnera true...
    return true;
  }

  function validateCardNumber(cardNumber) {
    // kontrollerar om kortnummer är ett 4-siffrigt nummer...
    if (cardNumber.length === 4 && !isNaN(cardNumber)) {
      // parsa cardNumber till ett heltal...
      const cardNumberInt = parseInt(cardNumber);
      // kontrollerar om kortnummer är inom 0 till 9999
      if (cardNumberInt >= 0 && cardNumberInt <= 9999) {
        return true;
      }
    }
    return false;
  }

  return (
    <form className="form">
      {/* CARD NUMBER */}
      <div className="form__group">
        <label className="form__label">CARD NUMBER</label>
        <div className="form__card-numbers-inputs-container">
          <input
            className={`form__input ${
              cardFormData.isCardNumberSectionOneValid
                ? "form__input--success"
                : ""
            }`}
            placeholder="1234"
            type="text"
            maxLength={4}
            onChange={handleCardNumberSectionOne}
          />
          <input
            className={`form__input ${
              cardFormData.isCardNumberSectionTwoValid
                ? "form__input--success"
                : ""
            }`}
            placeholder="1234"
            type="text"
            maxLength={4}
            onChange={handleCardNumberSectionTwo}
          />
          <input
            className={`form__input ${
              cardFormData.isCardNumberSectionThreeValid
                ? "form__input--success"
                : ""
            }`}
            placeholder="1234"
            type="text"
            maxLength={4}
            onChange={handleCardNumberSectionThree}
          />
          <input
            className={`form__input ${
              cardFormData.isCardNumberSectionFourValid
                ? "form__input--success"
                : ""
            }`}
            placeholder="1234"
            type="text"
            maxLength={4}
            onChange={handleCardNumberSectionFour}
          />
        </div>
      </div>

      {/* CARDHOLDER NAME */}
      <div className="form__group">
        <label className="form__label">CARDHOLDER NAME</label>
        <div className="form__cardholder-inputs-container">
          {/* FIRSTNAME */}
          <input
            className={`form__input ${
              cardFormData.isFirstNameValid ? "form__input--success" : ""
            }`}
            placeholder="FIRSTNAME"
            type="text"
            maxLength={11}
            onChange={handleFirstName}
          />
          {/* LASTNAME */}
          <input
            className={`form__input ${
              cardFormData.isLastNameValid ? "form__input--success" : ""
            }`}
            placeholder="LASTNAME"
            type="text"
            maxLength={11}
            onChange={handleLastName}
          />
        </div>
      </div>

      {/* VALID THRU & CCV CONTAINER */}
      <div className="form__group-valid-and-ccv">
        {/* VALID THRU */}
        <div className="form__group-valid">
          <label className="form__label">VALID THRU</label>
          <div className="form__valid-inputs-container">
            {/* MM */}
            <input
              className={`form__input ${
                cardFormData.isValidThruMMValid ? "form__input--success" : ""
              }`}
              placeholder="MM"
              type="text"
              maxLength={2}
              onChange={handleValidThruMM}
            />
            {/* YY */}
            <input
              className={`form__input ${
                cardFormData.isValidThruYYValid ? "form__input--success" : ""
              }`}
              placeholder="YY"
              type="text"
              maxLength={2}
              onChange={handleValidThruYY}
            />
          </div>
        </div>

        {/* CCV */}
        <div className="form__group-ccv">
          <label className="form__label">CCV</label>
          <input
            className={`form__input ${
              cardFormData.isCcvValid ? "form__input--success" : ""
            }`}
            placeholder="e.g. 999"
            type="text"
            maxLength={3}
            onChange={handleCCV}
          />
        </div>
      </div>

      {/* VENDOR */}
      <div className="form__group">
        <label className="form__label">VENDOR</label>
        <select
          className={`form__select ${
            cardFormData.isVendorValid ? "form__select--success" : ""
          }`}
          onChange={handleVendor}
        >
          <option value=""></option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninja">NINJA BANK</option>
          <option value="blockchain">BLOCK CHAIN INC</option>
          <option value="evil">EVIL CORP</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
