export default class StringSchema {
  constructor(valid) {
    this.validators = [...valid];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  hasSpaces() {
    const validator = (string) => string.includes(' ');
    return new StringSchema([...this.validators, validator]);
  }
}
