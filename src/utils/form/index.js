export const validate = (validation, value) => {
    for (let i = 0; i < validation.length; i++) {
        let error = validation[i](value);
        if (error !== "") {
            return error;
        }
    }

    return "";
};

export const validateFields = (fields) => {
    const keys = Object.keys(fields);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let validation = fields[key]["validation"];
        let value = fields[key]["value"];

        fields[key]["error"] = validate(validation, value);
    }

    return fields;
};

export const validateForm = (fields) => {
    const keys = Object.keys(fields);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (fields[key]["error"] !== "") return false;
    }

    return true;
};

export const resetForm = (fields) => {
    const keys = Object.keys(fields);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        fields[key]["value"] = "";
    }

    return fields;
};

export const isRequired = (value) => {
    return !value ? "Preencha para continuar!" : "";
};
