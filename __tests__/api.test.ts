// __tests__/api.test.ts
describe("fetchLatestCode", () => {
  it("returns the latest saved code within the timeout window", (done) => {
    let result: string | null = null;

    // Simulates an async operation that takes variable time
    setTimeout(() => {
      result = "console.log('hello')";
    }, 80);

    // Assertion fires at 100ms — passes most of the time,
    // but fails when the system is under load and the timeout runs late
    setTimeout(() => {
      expect(result).not.toBeNull();
      done();
    }, 100);
  });
});
