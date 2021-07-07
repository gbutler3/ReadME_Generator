// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown (data) {
  return `
  # ${data.title}

  # Table of Contents
  * [Description](#description)
  * [License](#License)
  * [Installation](#install)
  * [Directions](#directions)
  * [Test](#test)
  * [Contributors](#contributors)
  * [Contact](#Contact)
  
  # Description
  ${data.description}

  ## License

  ${data.License}

  ## Installation

  ${data.install}

  ## Directions

  ${data.directions}

  ## Test

  ${data.test}

  ## Contributors

  ${data.Contribution}

  ## Contact 
`;
}

module.exports = generateMarkdown;
