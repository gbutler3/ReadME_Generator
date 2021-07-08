
function generateMarkdown (data) {
  return `
  # ${data.title}

  # Table of Contents
  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Directions](#directions)
  * [Test](#test)
  * [Contributors](#contributors)
  * [Questions](#Questions)
  
  # Description
  ${data.description}

  ## License

  ${data.license}

  ## Installation

  ${data.install}

  ## Directions

  ${data.directions}

  ## Test

  ${data.test}

  ## Contributors

  ${data.contributors}

  ## Questions 

  Github: [${data.github}](https://github.com/${data.github})

  Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
