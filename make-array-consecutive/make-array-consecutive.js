function solution(statues) {
  const missingStatues = [];
  statues.sort(function (a, b) {
    return a - b;
  });

  console.log(statues);

  for (let i = 0; i < statues.length; i++) {
    const diff = statues[i + 1] - statues[i] - 1;
    missingStatues.push(diff);
  }

  console.log(missingStatues.length - 1);
}

solution([6, 2, 3, 8]);
