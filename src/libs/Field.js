class Field {
  constructor(id, label, fieldType, handleOnChange) {
    this.id = id;
    this.label = label;
    this.fieldType = fieldType;
    this.handleOnChange = handleOnChange;
  }
}

export default Field;
