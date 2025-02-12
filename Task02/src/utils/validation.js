/**
 * Validate user name
 * @param {string} name - User's full name
 * @returns {object} Validation result
 */
export const validateName = (name) => {
    if (!name || name.trim().length < 2) {
      return {
        isValid: false,
        error: 'Name must be at least 2 characters long'
      };
    }
    return { isValid: true };
  };
  
  /**
   * Validate email address
   * @param {string} email - User's email address
   * @returns {object} Validation result
   */
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return {
        isValid: false,
        error: 'Please enter a valid email address'
      };
    }
    return { isValid: true };
  };
  
  /**
   * Validate user age
   * @param {number} age - User's age
   * @returns {object} Validation result
   */
  export const validateAge = (age) => {
    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 120) {
      return {
        isValid: false,
        error: 'Age must be a number between 18 and 120'
      };
    }
    return { isValid: true };
  };
  
  /**
   * Validate entire user object
   * @param {object} user - User object to validate
   * @returns {object} Validation result
   */
  export const validateUser = (user) => {
    const nameValidation = validateName(user.name);
    const emailValidation = validateEmail(user.email);
    const ageValidation = validateAge(user.age);
  
    if (!nameValidation.isValid) return nameValidation;
    if (!emailValidation.isValid) return emailValidation;
    if (!ageValidation.isValid) return ageValidation;
  
    return { isValid: true };
  };