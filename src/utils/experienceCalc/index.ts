const experienceCalc = (progress: number) => {
  const levels = ["básico", "intermediário", "avançado"];

  if (progress <= 49) return levels[0];
  if (progress > 49 && progress <= 74) return levels[1];

  return levels[2];
};

export { experienceCalc };
