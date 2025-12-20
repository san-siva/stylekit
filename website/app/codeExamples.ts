// Code examples used in the StyleKit documentation

export const INSTALL_NPM = `npm install @san-siva/stylekit`;

export const INSTALL_YARN = `yarn add @san-siva/stylekit`;

export const IMPORT_ALL_MODULES = `@use '@san-siva/stylekit/index.module.scss' as stylekit;

.my-component {
  color: stylekit.$color--primary;
  padding: stylekit.space(2);
  font-size: stylekit.$font-size--h3;
}`;

export const IMPORT_SPECIFIC_MODULES = `@use '@san-siva/stylekit/colors.module.scss' as colors;
@use '@san-siva/stylekit/utils.module.scss' as utils;

.card {
  background-color: colors.$color--base;
  border: 1px solid colors.$color--border;
  padding: utils.space(3);
  border-radius: utils.rem(8);
}`;

export const USE_UTILITY_CLASSES = `import styles from '@san-siva/stylekit/index.module.scss';

export function MyComponent() {
  return (
    <div className={styles['margin-bottom--3']}>
      <h1 className={styles['font-size--h1']}>Title</h1>
      <p className={styles['margin-top--2']}>Content</p>
    </div>
  );
}`;

export const COLORS_EXAMPLE_USAGE = `@use '@san-siva/stylekit/colors.module.scss' as colors;

.button--primary {
  background-color: colors.$color--primary;
  color: colors.$color--base;

  &:hover {
    background-color: colors.$color--primary-light;
  }
}

.alert--error {
  background-color: colors.$color--error-light;
  border-left: 3px solid colors.$color--error;
  color: colors.$color--dark;
}`;

export const TYPOGRAPHY_EXAMPLE_USAGE = `@use '@san-siva/stylekit/typography.module.scss' as type;

.heading {
  font-family: type.$font-family--secondary;
  font-size: type.$font-size--h2;
  font-weight: type.$font-weight--700;
  line-height: type.$line-height--small;
}

.body-text {
  font-family: type.$font-family--primary;
  font-size: type.$font-size--p;
  line-height: type.$line-height--normal;
}`;

export const TYPOGRAPHY_UTILITY_CLASSES = `import styles from '@san-siva/stylekit/typography.module.scss';

<h1 className={\`\${styles['font-size--h1']} \${styles['font-weight--700']}\`}>
  Welcome
</h1>`;

export const SPACING_UTILITIES_LIST = `.margin-top--0 through .margin-top--9
.margin-bottom--0 through .margin-bottom--9
.margin-left--0 through .margin-left--9
.margin-right--0 through .margin-right--9

.padding-top--0 through .padding-top--9
.padding-bottom--0 through .padding-bottom--9
.padding-left--0 through .padding-left--9
.padding-right--0 through .padding-right--9`;

export const UTILS_EXAMPLE_USAGE_WITH_FUNCTIONS = `@use '@san-siva/stylekit/utils.module.scss' as utils;

.card {
  padding: utils.space(3);        // 24px (1.5rem)
  margin-bottom: utils.space(4);  // 32px (2rem)
  border-radius: utils.rem(8);    // 0.5rem

  .card-header {
    margin-bottom: utils.space(2); // 16px (1rem)
    font-size: utils.rem(20);       // 1.25rem
  }
}`;

export const UTILS_EXAMPLE_USAGE_WITH_CLASSES = `import styles from '@san-siva/stylekit/utils.module.scss';

<div className={styles['padding-top--4']}>
  <h2 className={styles['margin-bottom--2']}>Section Title</h2>
  <p className={styles['margin-bottom--3']}>Content here</p>
</div>`;

export const ANIMATIONS_EXAMPLE_USAGE = `@use '@san-siva/stylekit/animations.module.scss';

.modal-enter {
  animation: MoveInTop 0.3s ease-out;
}

.notification {
  animation: fadeInDown 0.4s ease-out;
}

.loading-bar {
  animation: loading_animation 4s linear infinite;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
}`;

export const CONTAINER_SYSTEM = `.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 18px;
  min-height: calc(100% - 36px);
  width: calc(100% - 36px);
}

.container--contents-centered {
  justify-content: center;
  align-items: center;
}

.container--no-padding {
  padding: 0;
}`;

export const PAGE_LAYOUT = `.page {
  --topbar-height: 80px;
  max-width: 1216px;
  margin: 0 auto;
  padding: 48px calculated-sides;

  // Responsive padding and width management
  // Automatically adjusts for mobile, tablet, and desktop
}

.page--contents-max-width {
  > * {
    max-width: 780px;
  }
}

.page--no-extra-padding {
  --width-sections: calc(100% - 32px);
  --padding-sections-left: 32px;
}`;

export const DIMENSIONS_EXAMPLE_USAGE = `@use '@san-siva/stylekit/dimensions.module.scss' as dims;

.card {
  border-radius: dims.$border-radius--2;
  max-width: dims.$max-width--page-contents;
}

.rounded-button {
  border-radius: dims.$border-radius--1;
}

// Use built-in container
.my-container {
  @extend .container;
  @extend .container--contents-centered;
}`;

export const BEST_PRACTICES_MODULE_ORGANIZATION = `// Good: Use namespaces with @use
@use '@san-siva/stylekit/colors.module.scss' as colors;
@use '@san-siva/stylekit/utils.module.scss' as utils;

.component {
  color: colors.$color--primary;
  padding: utils.space(2);
}

// Avoid: @import mixes everything into global scope
@import '@san-siva/stylekit/colors.module.scss';  // Don't do this`;

export const BEST_PRACTICES_SPACING = `// Good: Use spacing scale
.section {
  margin-bottom: utils.space(4);  // 32px from scale
  padding: utils.space(3);         // 24px from scale
}

// Avoid: Arbitrary values break consistency
.section {
  margin-bottom: 35px;  // Don't do this
  padding: 22px;        // Don't do this
}`;

export const BEST_PRACTICES_COLORS = `// Good: Semantic naming makes intent clear
.error-message {
  color: colors.$color--error;
  background: colors.$color--error-light;
}

.primary-button {
  background: colors.$color--primary;
  color: colors.$color--base;
}

// Avoid: Direct hex values lose semantic meaning
.error-message {
  color: #ff4232;  // What does this color represent?
}`;

export const BEST_PRACTICES_TYPOGRAPHY = `// Good: Use predefined sizes
h1 {
  font-size: type.$font-size--h1;  // 36px
}

.small-text {
  font-size: type.$font-size--small;  // 12px
}

// Avoid: Random font sizes
h1 {
  font-size: 37px;  // Why not 36px from the scale?
}`;

export const BEST_PRACTICES_UTILITY_COMPOSITION = `// Good: Compose utilities for rapid development
<div className={\`
  \${styles['margin-bottom--4']}
  \${styles['padding-top--3']}
  \${styles['font-size--h2']}
\`}>
  Content
</div>

// Also good: Use SCSS variables for complex components
.complex-component {
  margin-bottom: utils.space(4);
  padding-top: utils.space(3);
  font-size: type.$font-size--h2;
  color: colors.$color--primary;
}`;

export const REACT_NEXTJS_INTEGRATION = `// Import SCSS module
import styles from '@san-siva/stylekit/index.module.scss';

export function Card({ children }) {
  return (
    <div className={styles['padding-top--4']}>
      <h2 className={\`\${styles['font-size--h2']} \${styles['margin-bottom--2']}\`}>
        Card Title
      </h2>
      <div className={styles['margin-top--3']}>
        {children}
      </div>
    </div>
  );
}`;

export const VUE_INTEGRATION = `<template>
  <div :class="$style['padding-top--4']">
    <h2 :class="[\$style['font-size--h2'], $style['margin-bottom--2']]">
      Card Title
    </h2>
  </div>
</template>

<style module>
@use '@san-siva/stylekit/index.module.scss' as *;
</style>`;

export const ANGULAR_INTEGRATION = `// component.scss
@use '@san-siva/stylekit/colors.module.scss' as colors;
@use '@san-siva/stylekit/utils.module.scss' as utils;

:host {
  display: block;
  padding: utils.space(4);
}

.card {
  background: colors.$color--base;
  border: 1px solid colors.$color--border;
}`;

export const CUSTOMIZATION_COLORS = `// your-colors.scss
@use '@san-siva/stylekit/colors.module.scss' as stylekit-colors;

// Add your custom colors
$color--brand: #your-color;
$color--custom: #another-color;

// Use both StyleKit and custom colors
.my-component {
  background: stylekit-colors.$color--primary;
  border-color: $color--brand;
}`;

export const CUSTOMIZATION_SPACING = `@use '@san-siva/stylekit/utils.module.scss' as utils;

// Define custom spacing
$spacing-custom: utils.rem(72);

.special-section {
  margin-bottom: $spacing-custom;
  // Or use the built-in space function
  padding: utils.space(5);  // 40px
}`;

export const CUSTOMIZATION_TYPOGRAPHY = `@use '@san-siva/stylekit/typography.module.scss' as type;

// Override with your font
$custom-font-family: 'Your Font', sans-serif;

.heading {
  font-family: $custom-font-family;
  // But still use StyleKit's scale
  font-size: type.$font-size--h1;
  font-weight: type.$font-weight--700;
}`;

export const PERFORMANCE_BUNDLE_SIZE = `// Smaller bundle: Import specific modules
@use '@san-siva/stylekit/colors.module.scss' as colors;
@use '@san-siva/stylekit/utils.module.scss' as utils;

// vs.

// Larger bundle: Import everything
@use '@san-siva/stylekit/index.module.scss' as stylekit;`;
