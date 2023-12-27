import StringSchema from './StringSchema.js';
import FunctionSchema from './FunctionSchema.js';

export default class Validator {
  string() {
    return new StringSchema([(val) => typeof val === 'string']);
  }

  function() {
    return new FunctionSchema([(val) => typeof val === 'function']);
  }
}
