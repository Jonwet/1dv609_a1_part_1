// Select one of the Password versions to test

// import { Password } from "../src/BugDoesNotHash";
// import { Password } from "../src/BugDoesNotTrim";
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from "../src/Correct";

describe("Password class, test suite", () => {
  //put constants here to increase readability
  const testPassword = "Jonatan123456789";

test("Passwords can be different", () => {
  const password = new Password("Jonatan123456789")
  const passwordReversed = new Password("987654321natanoJ")

  expect(password.isPasswordSame(passwordReversed)).toBe(false)
})

  test("Constructor should trim password", () => {
    const passwordWithSpaces = new Password("  Jonatan123456789  ");
    const passwordWithoutSpaces = new Password("Jonatan123456789");

    expect(passwordWithSpaces.isPasswordSame(passwordWithoutSpaces)).toBe(true)
  });

  test("Constructor should hash password", () => {
    const password = new Password(testPassword);

    let hash = 7;
    for (let i = 0; i < testPassword.length; i++) {
      hash = hash * 31 + testPassword.charCodeAt(i);
    }
    expect(password.getPasswordHash()).toBe(hash);
  });
});
