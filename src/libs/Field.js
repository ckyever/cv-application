class Field {
  constructor(id, label, fieldType, initialValue, handleOnChange) {
    this.id = id;
    this.label = label;
    this.fieldType = fieldType;
    this.initialValue = initialValue;
    this.handleOnChange = handleOnChange;
  }
}

export default Field;
