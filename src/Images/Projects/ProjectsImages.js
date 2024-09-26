const projectImages = {};

for (let i = 1; i <= 12; i++) {
  const projectName = `project${i}`;

  projectImages[projectName] = {
    thumb: require(`./${projectName}/project-${i}-thumb.png`),
    large: require(`./${projectName}/project-${i}-large.png`),
  };
}

export default projectImages;