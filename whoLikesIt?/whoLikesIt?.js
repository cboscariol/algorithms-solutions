function likes(names) {
  const likesCount = names.length;

  const obj = {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    default: `${names[0]}, ${names[1]} and ${
      names.length - 2
    } others like this`,
  };

  console.log(obj[likesCount] || obj.default);
  return obj[likesCount] || obj.default;
}

likes([]);
likes(["Peter"]);
likes(["Jacob", "Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Alex", "Jacob", "Mark", "Max"]);
