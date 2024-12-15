export function validatePassport(passport: string): boolean {
  // Basic passport validation
  // - Must be between 6-15 characters
  // - Can contain letters and numbers
  // - No special characters except hyphen and underscore
  const passportRegex = /^[A-Za-z0-9-_]{6,15}$/;
  return passportRegex.test(passport);
}