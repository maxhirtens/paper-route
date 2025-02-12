import { extract } from "./extract";

describe("extract function", function () {
  test("works: 1 item", function () {
    const articles = {
      data: {
        results: [
          { title: "test title 1", abstract: "test abstract 1" },
          { title: "test title 2", abstract: "test abstract 2" },
          { title: "test title 3", abstract: "test abstract 3" },
          { title: "test title 4", abstract: "test abstract 4" },
        ],
      },
    };
    const result = extract(articles);
    expect(result).toContain("test title 1");
    expect(result).not.toContain("test title 4");
  });
});
