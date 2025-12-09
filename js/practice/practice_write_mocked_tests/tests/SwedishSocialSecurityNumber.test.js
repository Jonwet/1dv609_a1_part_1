import { SwedishSocialSecurityNumber } from "../src/correct/SwedishSocialSecurityNumber";

// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck";
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoTrim";
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn";
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberWrongYear";

import { beforeEach, expect, jest } from "@jest/globals";

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe("SwedishSocialSecurityNumber Tests", () => {
  //put constants here to increase readability

  let mockHelper;
  const ssn = "020614-0774";
  const ssnWithSpaces = " 020614-0774 ";

  beforeEach(() => {
    mockHelper = {
      isCorrectLength: jest.fn().mockReturnValue(true),
      isCorrectFormat: jest.fn().mockReturnValue(true),
      isValidMonth: jest.fn().mockReturnValue(true),
      isValidDay: jest.fn().mockReturnValue(true),
      luhnisCorrect: jest.fn().mockReturnValue(true),
    };
  });

  // NoLenCheck
  test("constructor should throw exception when length is invalid", () => {
    mockHelper.isCorrectLength.mockReturnValue(false);
    expect(() => new SwedishSocialSecurityNumber(ssn, mockHelper)).toThrow(
      "To short, must be 11 characters"
    );
    expect(mockHelper.isCorrectLength).toHaveBeenCalled();
  });

  // NoTrim
  test("constructor should trim input", () => {
    new SwedishSocialSecurityNumber(ssnWithSpaces, mockHelper);
    expect(mockHelper.isCorrectLength).toHaveBeenCalledWith(ssn);
  });

  // NoLuhn
  test("constructor should throw exception when luhn is not correct", () => {
    mockHelper.luhnisCorrect.mockReturnValue(false);
    expect(() => new SwedishSocialSecurityNumber(ssn, mockHelper)).toThrow(
      "Invalid SSN according to Luhn's algorithm"
    );
    expect(mockHelper.luhnisCorrect).toHaveBeenCalled();
  });

  // WrongYear
  test("getYear should extract first two characters of SSN", () => {
    const ssnObject = new SwedishSocialSecurityNumber(ssn, mockHelper);
    expect(ssnObject.getYear()).toBe("02");
  });
});
