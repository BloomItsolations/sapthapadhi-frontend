export const isProfileComplete = (userDetails) => {
    if (!userDetails) return false;
  
    const requiredFields = [
      'name',
      'gender',
      'dateOfBirth',
      'age',
      'height',
      'weight',
      'lookingFor',
      'maritalStatus',
      'bodyType',
      'bodyComplexion',
      'physicalStatus',
      'motherTongue',
      'eatingHabits',
      'drinkingHabits',
      'smokingHabits',
      'religion',
      'caste',
      'subCaste',
      'gothra',
      'star',
      'highestEducation',
      'occupation',
      'annualIncome',
      'familyLocation',
      'country',
    ];

    // Check if all required fields are present and not empty
    return requiredFields.every((field) => {
      const value = userDetails[field];
      
      // Ensure value is not undefined, null, or an empty string
      return value !== undefined && value !== null && (typeof value !== 'string' || value.trim() !== '');
    });
  };
  