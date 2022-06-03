module.exports = {
  "stories": [
    "../client/**/*.stories.mdx",
    "../client/**/*.stories.@(js|jsx|ts|tsx)",
    "../client/game/SocialExposure.stories.jsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}