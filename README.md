# Stylekit

A comprehensive SCSS module library providing colors, typography, animations, utilities, and layout dimensions for building consistent user interfaces.

## Installation

```bash
npm install @portfolio/stylekit
```

## Usage

### Import All Styles

```scss
@use '@portfolio/stylekit' as styles;

.my-element {
  color: styles.$color--primary;
  font-size: styles.$font-size--h1;
}
```

### Import Individual Modules

```scss
@use '@portfolio/stylekit/colors' as colors;
@use '@portfolio/stylekit/typography' as typography;
@use '@portfolio/stylekit/utils' as utils;

.my-element {
  color: colors.$color--primary;
  font-size: typography.$font-size--h1;
  padding: utils.space(3);
}
```

## Modules

### Colors

Comprehensive color palette including primary, secondary, accent, error, and greyscale colors.

**Primary Colors:**
- `$color--primary`: #4242fa
- `$color--primary-light`: rgba(66, 66, 250, 0.05)
- `$color--primary-accent`: #fed600

**Secondary Colors:**
- `$color--secondary`: #3dad84
- `$color--secondary-light`: #ecf7f3

**Base Colors:**
- `$color--base`: #ffffff
- `$color--surface`: #f6f6f6
- `$color--dark`: #313030
- `$color--black`: #000

**Greyscale:**
- `$color--grey-light` through `$color--grey-darker`

**Utility Colors:**
- `$color--error`: #ff4232
- `$color--link`: #0d6efd
- `$color--pink`: #e60067
- `$color--glass`: rgba(255, 255, 255, 0.85)

### Typography

Font families, sizes, weights, and line heights with utility classes.

**Font Families:**
- `$font-family--primary`: 'Rubik', sans-serif
- `$font-family--secondary`: 'Montserrat', sans-serif
- `$font-family--code`: 'JetBrains Mono', monospace

**Font Sizes:**
- `$font-size--h1` through `$font-size--h6`
- `$font-size--big`, `$font-size--p`, `$font-size--small`
- `$font-size--button`, `$font-size--very-small`

**Font Weights:**
- `$font-weight--400` through `$font-weight--800`

**Line Heights:**
- `$line-height--large`: 1.9
- `$line-height--normal`: 1.6
- `$line-height--small`: 1.4

**Utility Classes:**
- `.font--primary`, `.font--secondary`, `.font--code`
- `.font-weight--400` through `.font-weight--800`
- `.font-size--h1` through `.font-size--small`
- `.line-height--large`, `.line-height--normal`, `.line-height--small`
- `.category__header` - Pink uppercase header style
- `.a--highlighted` - Underlined link style

### Utils

Helper functions and spacing utilities.

**Functions:**
- `rem($px)` - Convert pixels to rem units
- `em($px)` - Convert pixels to em units
- `space($n, $useEm)` - Get spacing value from scale (0-9)

**Spacing Scale:**
- 0: 4px, 1: 8px, 2: 16px, 3: 24px, 4: 32px
- 5: 40px, 6: 48px, 7: 56px, 8: 64px, 9: 96px

**Utility Classes:**
- `.margin-{direction}--{0-9}` - Margin utilities
- `.padding-{direction}--{0-9}` - Padding utilities
- Directions: top, bottom, left, right
- Both regular and `!important` variants available

Example:
```scss
@use '@portfolio/stylekit/utils' as utils;

.element {
  padding: utils.space(3); // 24px = 1.5rem
  margin-top: utils.rem(16);
}
```

### Dimensions

Layout dimensions, containers, pages, border radius, and responsive breakpoints.

**Containers:**
- `.container` - Flexible container with padding
- `.container--contents-centered` - Centered content
- `.container--no-padding` - Remove padding

**Page Layout:**
- `.page` - Main page container with max-width 1216px
- `.page--contents-max-width` - Limit content width to 780px
- `.page--no-extra-padding` - Reduced padding
- `.page--no-max-width` - Full width

**Border Radius:**
- `$border-radius`: 4px through `$border-radius--4`: 32px

**Breakpoints:**
- Mobile: 320px, 375px, 568px
- Tablet: 768px, 812px, 834px
- Automatically adjusts page padding

**Utility Classes:**
- `.hr` - Horizontal rule
- `.li--disabled` - Disabled list item
- `.block` - Display block

### Animations

Keyframe animations for common UI patterns.

**Available Animations:**
- `loading_animation` - Background position animation
- `MoveInTop` - Slide in from bottom
- `fadeInDown` - Fade in from top
- `fadeUp` - Fade up and left

Example:
```scss
@use '@portfolio/stylekit/animations';

.my-element {
  animation: fadeInDown 0.3s ease-out;
}
```

### Globals

Global styles and resets to be imported once in your application.

```scss
@use '@portfolio/stylekit/globals';
```

## Package Exports

The package provides the following export paths:

- `@portfolio/stylekit` - All styles (index)
- `@portfolio/stylekit/colors` - Colors only
- `@portfolio/stylekit/typography` - Typography only
- `@portfolio/stylekit/utils` - Utilities only
- `@portfolio/stylekit/dimensions` - Dimensions only
- `@portfolio/stylekit/animations` - Animations only
- `@portfolio/stylekit/globals` - Global styles

## License

MIT
