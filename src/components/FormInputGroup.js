import React from "react";
import PropTypes from "prop-types";

export default function FormInputGroup({ label, name, type, value, onChange }) {
  return (
    <div className="form-control">
      <label htmlFor="type">{label}</label>
      <input name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
}

FormInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInputGroup.defaultProps = {
  type: "text",
};
