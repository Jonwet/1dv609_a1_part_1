import { SSNHelper } from "../src/correct/SSNHelper";

// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowDayUpTo30";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperWrongLength";

describe("SSNHelper Tests", () => {
  const ssn = new SSNHelper();

  test("isValidDay should return true if input is between 1-31", () => {
    expect(ssn.isValidDay("31")).toBe(true);
  });

  test("isValidMonth should return false when month input is invalid", () => {
    expect(ssn.isValidMonth("0")).toBe(false);
  });

  test("isCorrectFormat should return false when input is invalid", () => {
    expect(ssn.isCorrectFormat("0206140774")).toBe(false);
  });

  test("luhnisCorrect should return false if the input is not valid SSN", () => {
    expect(ssn.luhnisCorrect("020614-0774")).toBe(true);
  });

  test("isCorrectLength should return false when input is longer than 11 characters", () => {
    expect(ssn.isCorrectLength("020614-07741")).toBe(false);
  });
});
