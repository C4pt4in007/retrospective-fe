import submitNewRetrospective from "./SubmitNewRetrospective";

test("should log error if response is not ok", async () => {
    const request = {
      name: "Hello"
    };

    const mockedResponse = { status: 500, statusText: "Internal Server Error" };

    jest.spyOn(window, "fetch").mockResolvedValueOnce({
      ok: false,
      ...mockedResponse,
    });

    const consoleSpy = jest.spyOn(console, "log");

    await submitNewRetrospective(request);

    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });