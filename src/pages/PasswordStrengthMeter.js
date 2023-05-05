import React from "react";
import zxcvbn from "zxcvbn";

function PasswordStrengthMeter(props) {
  const password = props.password;
  const testedResult = zxcvbn(password);

  const createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return "WEAK";
      case 1:
        return "WEAK";
      case 2:
        return "FAIR";
      case 3:
        return "GOOD";
      case 4:
        return "STRONG";
      default:
        return "WEAK";
    }
  };

  return (
    <div className="password-strength-meter flex gap-4 items-center">
      <label className="password-strength-meter-label">
        <h2>{createPasswordLabel(testedResult)}</h2>
      </label>
      <progress
        className={`password-strength-meter-progress strength-${createPasswordLabel(
          testedResult
        )}`}
        value={testedResult.score}
        max="4"
      />
    </div>
  );
}
export default PasswordStrengthMeter;
