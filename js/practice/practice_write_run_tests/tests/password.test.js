// Select one of the Password versions to test

// import { Password } from "../src/BugDoesNotHash";
// import { Password } from "../src/BugDoesNotTrim";
// import { Password } from "../src/BugisPasswordAlwaysSame";
// import { Password } from "../src/BugMissingNumberCheck";
// import { Password } from "../src/BugMissingPasswordCheck";
// import { Password } from "../src/BugNeverContainsNumbers";
import { Password } from "../src/BugToShortPassword";
// import { Password } from "../src/BugVeryShort";
// import { Password } from "../src/BugWrongHashingAlgorithm";
// import { Password } from "../src/BugWrongMessage";
// import { Password } from "../src/Correct";
// import { Password } from "../src/MyBuggyVersion";

describe("Password class, test suite", () => {
  //put constants here to increase readability
  const testPassword = "1Jonatan123456789";
  const shortPassword = "1Jonatan123";
  const veryShortPassword = "1Jonata";

  // DoesNotTrim
  test("Constructor should trim password", () => {
    const passwordWithSpaces = new Password(
      "  1Jonatan123456789  "
    ).getPasswordHash();
    const passwordWithoutSpaces = new Password(
      "1Jonatan123456789"
    ).getPasswordHash();

    expect(passwordWithSpaces).toEqual(passwordWithoutSpaces);
  });

  // AlwaysSame
  test("isPasswordSame Should distinguish between different passwords", () => {
    const firstPassword = new Password("1Jonatan123456789");
    const secondPassword = new Password("1Jonatan12345678");

    expect(firstPassword.isPasswordSame(secondPassword)).toBe(false);
  });

  // MissingNumberCheck
  test("Contsructor Should throw error if no number in password", () => {
    expect(() => {
      new Password("JonatanJonatan");
    }).toThrow("No number found");
  });

  // ToShortPassword
  test("Constructor Should throw error if password is less than 12 characters long", () => {
    expect(() => {
      new Password(shortPassword);
    }).toThrow("Too short password");
  });

  // VeryShortPassword
  test("Constructor Should throw error for very short passwords, less than 6 characters", () => {
    expect(() => {
      new Password(veryShortPassword);
    }).toThrow("Too short password");
  });

  // WrongHashingAlgorithm + DoesNotHash
  test("Constructor Should hash passwords correctly", () => {
    const password = new Password(testPassword);

    let hash = 7;
    for (let i = 0; i < testPassword.length; i++) {
      hash = hash * 31 + testPassword.charCodeAt(i);
    }
    expect(password.getPasswordHash()).toBe(hash);
  });

  // WrongMessage
  test("Constructor should throw correct error message for too short input", () => {
    expect(() => new Password(shortPassword)).toThrow("Too short password");
  });
});
