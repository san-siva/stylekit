import {
	Blog,
	BlogHeader,
	BlogSection,
	CodeBlock,
	Callout,
	Table,
} from '@san-siva/blogkit';
import styles from './page.module.scss';
import * as codeExamples from './codeExamples';

export default function StyleKitDocumentation() {
	return (
		<Blog>
			<BlogHeader
				title={['StyleKit']}
				desc={[
					'A modular SCSS design system with utilities, colors, typography, and animations',
				]}
			/>

			<BlogSection title="Overview">
				<p className={styles['margin-bottom--2']}>
					<strong>StyleKit</strong> is a comprehensive, modular SCSS design
					system that provides a consistent foundation for building modern web
					applications. It includes a complete set of design tokens, utility
					classes, typography scales, color palettes, spacing systems, and
					animations. Built with CSS Modules support, StyleKit ensures style
					encapsulation while maintaining flexibility for customization.
				</p>
				<p>
					Unlike Tailwind or Bootstrap,{' '}
					<mark>
						<strong>StyleKit</strong> focuses on developer-centric architecture
						rather than being a rigid framework or library.
					</mark>{' '}
					I would encourage you to use StyleKit as a starting point for your own
					design system, and then customize it to fit your needs.
				</p>
			</BlogSection>

			<BlogSection title="System Requirements">
				<Table
					headers={['Requirement', 'Details']}
					hasMarginDown
					rows={[
						['Package Manager', 'npm, yarn, or pnpm'],
						['SCSS Processor', 'sass >= 1.50.0'],
						['Module System', 'CSS Modules support'],
						['Framework', 'Framework agnostic (React, Vue, Angular, etc.)'],
					]}
				/>
			</BlogSection>

			<BlogSection title="Installation">
				<p className={styles['margin-bottom--2']}>Install StyleKit from npm:</p>
				<CodeBlock
					language="bash"
					code={codeExamples.INSTALL_NPM}
					hasMarginUp
					hasMarginDown
				/>
				<p className={styles['margin-bottom--2']}>Or using yarn:</p>
				<CodeBlock
					language="bash"
					code={codeExamples.INSTALL_YARN}
					hasMarginUp
					hasMarginDown
				/>
			</BlogSection>

			<BlogSection title="Module Structure">
				<p className={styles['margin-bottom--2']}>
					StyleKit is organized into specialized modules, each handling a
					specific aspect of your design system:
				</p>
				<Table
					headers={['Module', 'Purpose', 'Key Features']}
					hasMarginDown
					rows={[
						[
							<code>colors.module.scss</code>,
							'Color palette and variables',
							'Primary, secondary, accent, grey scale, semantic colors',
						],
						[
							<code>typography.module.scss</code>,
							'Font families, sizes, and weights',
							'Type scale, font families, line heights, utility classes',
						],
						[
							<code>utils.module.scss</code>,
							'Spacing and utility functions',
							'rem/em functions, spacing scale, margin/padding utilities',
						],
						[
							<code>dimensions.module.scss</code>,
							'Layout dimensions and breakpoints',
							'Container styles, page layout, border radius, responsive breakpoints',
						],
						[
							<code>animations.module.scss</code>,
							'Animation keyframes',
							'Loading, fade, and movement animations',
						],
						[
							<code>globals.scss</code>,
							'Global styles and resets',
							'Base styles, resets, global defaults',
						],
					]}
				/>
			</BlogSection>

			<BlogSection title="Usage Patterns">
				<BlogSection title="Import All Modules">
					<p className={styles['margin-bottom--2']}>
						Import the main module to access all design tokens and utilities:
					</p>
					<CodeBlock
						language="scss"
						code={codeExamples.IMPORT_ALL_MODULES}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Import Specific Modules">
					<p className={styles['margin-bottom--2']}>
						For better performance and explicit dependencies, import only what
						you need:
					</p>
					<CodeBlock
						language="scss"
						code={codeExamples.IMPORT_SPECIFIC_MODULES}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Use Utility Classes">
					<p className={styles['margin-bottom--2']}>
						Import utility classes in your component or globally:
					</p>
					<CodeBlock
						language="tsx"
						code={codeExamples.USE_UTILITY_CLASSES}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>
			</BlogSection>

			<BlogSection title="Colors Module">
				<p className={styles['margin-bottom--2']}>
					Provides a comprehensive color palette with semantic naming and
					variants.
				</p>

				<Table
					headers={['Category', 'Variables', 'Description']}
					hasMarginDown
					rows={[
						[
							'Primary',
							<code>
								$color--primary, $color--primary-light, $color--primary-lighter
							</code>,
							'Main brand color and variants',
						],
						[
							'Accent',
							<code>
								$color--primary-accent, $color--primary-accent-light,
								$color--primary-accent-lighter
							</code>,
							'Accent color for highlights and emphasis',
						],
						[
							'Secondary',
							<code>
								$color--secondary, $color--secondary-light,
								$color--secondary-lighter
							</code>,
							'Secondary brand color and variants',
						],
						[
							'Base',
							<code>$color--base, $color--surface, $color--code</code>,
							'Background and surface colors',
						],
						[
							'Grey Scale',
							<code>
								$color--grey-light, $color--grey-medium, $color--grey-dark,
								$color--grey-darker
							</code>,
							'Neutral colors for text and borders',
						],
						[
							'Semantic',
							<code>$color--error, $color--error-light, $color--link</code>,
							'Semantic colors for states and actions',
						],
					]}
				/>

				<Table
					headers={['Variable', 'Preview']}
					hasMarginDown
					rows={[
						[
							<code>$color--primary</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#4242fa',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#4242fa</code>
							</div>,
						],
						[
							<code>$color--primary-light</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: 'rgba(66, 66, 250, 0.05)',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>rgba(66, 66, 250, 0.05)</code>
							</div>,
						],
						[
							<code>$color--primary-lighter</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: 'rgba(66, 66, 250, 0.02)',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>rgba(66, 66, 250, 0.02)</code>
							</div>,
						],
						[
							<code>$color--primary-accent</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#fed600',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#fed600</code>
							</div>,
						],
						[
							<code>$color--primary-accent-light</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#fef1c4',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#fef1c4</code>
							</div>,
						],
						[
							<code>$color--primary-accent-lighter</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#fef8e0',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#fef8e0</code>
							</div>,
						],
						[
							<code>$color--secondary</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#3dad84',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#3dad84</code>
							</div>,
						],
						[
							<code>$color--secondary-light</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#ecf7f3',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#ecf7f3</code>
							</div>,
						],
						[
							<code>$color--secondary-lighter</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#f2f9f7',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#f2f9f7</code>
							</div>,
						],
						[
							<code>$color--base</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#ffffff',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#ffffff</code>
							</div>,
						],
						[
							<code>$color--surface</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#f6f6f6',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#f6f6f6</code>
							</div>,
						],
						[
							<code>$color--code</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#e8f1fc',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#e8f1fc</code>
							</div>,
						],
						[
							<code>$color--grey-light</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#e1e5e9',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#e1e5e9</code>
							</div>,
						],
						[
							<code>$color--grey-medium</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#c6c6c7',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#c6c6c7</code>
							</div>,
						],
						[
							<code>$color--grey-dark</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#6b7c93',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#6b7c93</code>
							</div>,
						],
						[
							<code>$color--grey-darker</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#4f5969',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#4f5969</code>
							</div>,
						],
						[
							<code>$color--error</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#ff4232',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#ff4232</code>
							</div>,
						],
						[
							<code>$color--error-light</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#ffecea',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#ffecea</code>
							</div>,
						],
						[
							<code>$color--link</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#0d6efd',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#0d6efd</code>
							</div>,
						],
						[
							<code>$color--dark</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#313030',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#313030</code>
							</div>,
						],
						[
							<code>$color--black</code>,
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
							>
								<div
									style={{
										width: '80px',
										height: '40px',
										backgroundColor: '#000',
										border: '1px solid #e1e5e9',
										borderRadius: '4px',
									}}
								></div>
								<code>#000</code>
							</div>,
						],
					]}
				/>

				<p className={styles['margin-top--3']}>Example usage:</p>
				<CodeBlock
					language="scss"
					code={codeExamples.COLORS_EXAMPLE_USAGE}
					hasMarginUp
					hasMarginDown
				/>
			</BlogSection>

			<BlogSection title="Typography Module">
				<p className={styles['margin-bottom--2']}>
					Defines a consistent typographic scale with font families, sizes,
					weights, and line heights.
				</p>

				<p className={styles['margin-bottom--2']}>
					<strong>Font Families:</strong>
				</p>
				<Table
					headers={['Variable', 'Value', 'Use Case']}
					hasMarginDown
					rows={[
						[
							<code>$font-family--primary</code>,
							"'Rubik', sans-serif",
							'Primary UI text',
						],
						[
							<code>$font-family--secondary</code>,
							"'Montserrat', sans-serif",
							'Headings and emphasis',
						],
						[
							<code>$font-family--code</code>,
							"'JetBrains Mono', monospace",
							'Code blocks and technical content',
						],
					]}
				/>

				<Table
					headers={['Variable', 'Preview']}
					hasMarginDown
					rows={[
						[
							'Rubik',
							<span
								style={{
									fontFamily: "'Rubik', sans-serif",
									fontSize: '18px',
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>,
						],
						[
							'Montserrat',
							<span
								style={{
									fontFamily: "'Montserrat', sans-serif",
									fontSize: '18px',
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>,
						],
						[
							'JetBrains Mono',
							<span
								style={{
									fontFamily: "'JetBrains Mono', monospace",
									fontSize: '18px',
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>,
						],
					]}
				/>

				<p
					className={`${styles['margin-top--3']} ${styles['margin-bottom--2']}`}
				>
					<strong>Font Sizes:</strong>
				</p>
				<Table
					headers={['Variable', 'Size', 'Utility Class']}
					hasMarginDown
					rows={[
						[
							<code>$font-size--very-large</code>,
							'64px (4rem)',
							<code>.font-size--very-large</code>,
						],
						[
							<code>$font-size--large</code>,
							'48px (3rem)',
							<code>.font-size--large</code>,
						],
						[
							<code>$font-size--h1</code>,
							'36px (2.25rem)',
							<code>.font-size--h1</code>,
						],
						[
							<code>$font-size--h2</code>,
							'32px (2rem)',
							<code>.font-size--h2</code>,
						],
						[
							<code>$font-size--h3</code>,
							'28px (1.75rem)',
							<code>.font-size--h3</code>,
						],
						[
							<code>$font-size--h4</code>,
							'24px (1.5rem)',
							<code>.font-size--h4</code>,
						],
						[
							<code>$font-size--h5</code>,
							'21px (1.3125rem)',
							<code>.font-size--h5</code>,
						],
						[
							<code>$font-size--h6</code>,
							'18px (1.125rem)',
							<code>.font-size--h6</code>,
						],
						[
							<code>$font-size--p</code>,
							'16px (1rem)',
							<code>.font-size--p</code>,
						],
						[
							<code>$font-size--small</code>,
							'12px (0.75rem)',
							<code>.font-size--small</code>,
						],
					]}
				/>

				<Table
					headers={['Variable', 'Preview']}
					hasMarginDown
					rows={[
						[
							'64px (very-large)',
							<span style={{ fontSize: '64px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'48px (large)',
							<span style={{ fontSize: '48px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'36px (h1)',
							<span style={{ fontSize: '36px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'32px (h2)',
							<span style={{ fontSize: '32px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'28px (h3)',
							<span style={{ fontSize: '28px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'24px (h4)',
							<span style={{ fontSize: '24px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'21px (h5)',
							<span style={{ fontSize: '21px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'18px (h6)',
							<span style={{ fontSize: '18px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'16px (p)',
							<span style={{ fontSize: '16px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
						[
							'12px (small)',
							<span style={{ fontSize: '12px', lineHeight: '1.2' }}>
								Lorem ipsum dolor sit amet
							</span>,
						],
					]}
				/>

				<p
					className={`${styles['margin-top--3']} ${styles['margin-bottom--2']}`}
				>
					<strong>Font Weights:</strong>
				</p>
				<Table
					headers={['Variable', 'Weight', 'Utility Class']}
					hasMarginDown
					rows={[
						[
							<code>$font-weight--400</code>,
							'400 (Regular)',
							<code>.font-weight--400</code>,
						],
						[
							<code>$font-weight--500</code>,
							'500 (Medium)',
							<code>.font-weight--500</code>,
						],
						[
							<code>$font-weight--600</code>,
							'600 (Semi-Bold)',
							<code>.font-weight--600</code>,
						],
						[
							<code>$font-weight--700</code>,
							'700 (Bold)',
							<code>.font-weight--700</code>,
						],
						[
							<code>$font-weight--800</code>,
							'800 (Extra-Bold)',
							<code>.font-weight--800</code>,
						],
					]}
				/>

				<Table
					headers={['Variable', 'Preview']}
					hasMarginDown
					rows={[
						[
							'400 (Regular)',
							<span style={{ fontSize: '18px', fontWeight: 400 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>,
						],
						[
							'500 (Medium)',
							<span style={{ fontSize: '18px', fontWeight: 500 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>,
						],
						[
							'600 (Semi-Bold)',
							<span style={{ fontSize: '18px', fontWeight: 600 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>,
						],
						[
							'700 (Bold)',
							<span style={{ fontSize: '18px', fontWeight: 700 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>,
						],
						[
							'800 (Extra-Bold)',
							<span style={{ fontSize: '18px', fontWeight: 800 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</span>,
						],
					]}
				/>

				<p
					className={`${styles['margin-top--3']} ${styles['margin-bottom--2']}`}
				>
					<strong>Line Heights:</strong>
				</p>
				<Table
					headers={['Variable', 'Value', 'Use Case']}
					hasMarginDown
					rows={[
						[
							<code>$line-height--large</code>,
							'1.9',
							'Loose spacing for readability',
						],
						[
							<code>$line-height--normal</code>,
							'1.6',
							'Standard paragraph text',
						],
						[<code>$line-height--small</code>, '1.4', 'Compact headings'],
						[<code>$line-height--very-small</code>, '1.2', 'Very compact text'],
					]}
				/>
				<div className={styles['margin-top--3']}>
					<p className={styles['margin-bottom--2']}>Example usage:</p>
				</div>
				<CodeBlock
					language="scss"
					code={codeExamples.TYPOGRAPHY_EXAMPLE_USAGE}
					hasMarginUp
					hasMarginDown
				/>

				<div className={styles['margin-top--3']}>
					<p className={styles['margin-bottom--2']}>
						Using utility classes in React/JSX:
					</p>
				</div>
				<CodeBlock
					language="tsx"
					code={codeExamples.TYPOGRAPHY_UTILITY_CLASSES}
					hasMarginUp
					hasMarginDown
				/>
			</BlogSection>

			<BlogSection title="Utils Module">
				<p className={styles['margin-bottom--2']}>
					Provides utility functions and a comprehensive spacing system.
				</p>

				<p className={styles['margin-bottom--2']}>
					<strong>Utility Functions:</strong>
				</p>
				<Table
					headers={['Function', 'Parameters', 'Description']}
					rows={[
						[
							<code>rem($px)</code>,
							'Number (unitless)',
							'Converts pixels to rem units (16px base)',
						],
						[
							<code>em($px)</code>,
							'Number (unitless)',
							'Converts pixels to em units (16px base)',
						],
						[
							<code>space($n, $useEm)</code>,
							'Number (0-9), Boolean',
							'Returns spacing value from scale',
						],
					]}
					hasMarginDown
				/>

				<p className={styles['margin-bottom--2']}>
					<strong>Spacing Scale:</strong>
				</p>
				<Table
					headers={['Key', 'Value (px)', 'Value (rem)', 'Use Case']}
					rows={[
						['0', '4px', '0.25rem', 'Micro spacing'],
						['1', '8px', '0.5rem', 'Tight spacing'],
						['2', '16px', '1rem', 'Default spacing'],
						['3', '24px', '1.5rem', 'Medium spacing'],
						['4', '32px', '2rem', 'Large spacing'],
						['5', '40px', '2.5rem', 'Extra large spacing'],
						['6', '48px', '3rem', 'Section spacing'],
						['7', '56px', '3.5rem', 'Large section spacing'],
						['8', '64px', '4rem', 'Major section spacing'],
						['9', '96px', '6rem', 'Page section spacing'],
					]}
					hasMarginDown
				/>

				<p className={styles['margin-bottom--2']}>
					<strong>Spacing Utility Classes:</strong>
				</p>
				<p className={styles['margin-bottom--2']}>
					Auto-generated margin and padding utilities for all sides (top,
					bottom, left, right):
				</p>
				<CodeBlock
					language="text"
					code={codeExamples.SPACING_UTILITIES_LIST}
					hasMarginUp
					hasMarginDown
				/>

				<Callout type="info" hasMarginDown>
					<p>
						All spacing utility classes are also available with{' '}
						<code>!important</code> modifiers to override other styles when
						needed.
					</p>
				</Callout>

				<p className={styles['margin-bottom--2']}>
					<strong>Example usage with functions:</strong>
				</p>
				<CodeBlock
					language="scss"
					code={codeExamples.UTILS_EXAMPLE_USAGE_WITH_FUNCTIONS}
					hasMarginUp
					hasMarginDown
				/>

				<p className={styles['margin-bottom--2']}>
					Example usage with utility classes:
				</p>
				<CodeBlock
					language="tsx"
					code={codeExamples.UTILS_EXAMPLE_USAGE_WITH_CLASSES}
					hasMarginUp
					hasMarginDown
				/>
			</BlogSection>

			<BlogSection title="Animations Module">
				<p className={styles['margin-bottom--2']}>
					Provides pre-built keyframe animations for common UI patterns.
				</p>

				<Table
					hasMarginDown
					headers={['Animation', 'Duration', 'Description']}
					rows={[
						[
							<code>loading_animation</code>,
							'4s linear infinite',
							'Background position animation for loading states',
						],
						[
							<code>MoveInTop</code>,
							'Custom',
							'Slide in from bottom with fade (200px translateY)',
						],
						[
							<code>fadeInDown</code>,
							'Custom',
							'Fade in while moving down (20px translateY)',
						],
						[
							<code>fadeUp</code>,
							'Custom',
							'Fade in while moving up with horizontal offset',
						],
					]}
				/>

				<p className={styles['margin-bottom--2']}>Example usage:</p>
				<CodeBlock
					language="scss"
					code={codeExamples.ANIMATIONS_EXAMPLE_USAGE}
					hasMarginUp
					hasMarginDown
				/>
			</BlogSection>

			<BlogSection title="Dimensions Module">
				<p className={styles['margin-bottom--2']}>
					Defines layout containers, page structures, border radius values, and
					responsive breakpoints.
				</p>

				<p className={styles['margin-bottom--2']}>
					<strong>Container System:</strong>
				</p>
				<CodeBlock
					language="scss"
					code={codeExamples.CONTAINER_SYSTEM}
					hasMarginUp
					hasMarginDown
				/>

				<p className={styles['margin-bottom--2']}>
					<strong>Page Layout:</strong>
				</p>
				<CodeBlock
					language="scss"
					code={codeExamples.PAGE_LAYOUT}
					hasMarginUp
					hasMarginDown
				/>

				<p
					className={`${styles['margin-top--3']} ${styles['margin-bottom--2']}`}
				>
					<strong>Border Radius Scale:</strong>
				</p>
				<Table
					hasMarginDown
					headers={['Variable', 'Value', 'Use Case']}
					rows={[
						[
							<code>$border-radius</code>,
							'4px (0.25rem)',
							'Default, small elements',
						],
						[<code>$border-radius--1</code>, '8px (0.5rem)', 'Buttons, inputs'],
						[
							<code>$border-radius--1-5</code>,
							'12px (0.75rem)',
							'Medium cards',
						],
						[<code>$border-radius--2</code>, '16px (1rem)', 'Cards, modals'],
						[
							<code>$border-radius--3</code>,
							'24px (1.5rem)',
							'Large containers',
						],
						[<code>$border-radius--4</code>, '32px (2rem)', 'Hero sections'],
					]}
				/>

				<p
					className={`${styles['margin-top--3']} ${styles['margin-bottom--2']}`}
				>
					<strong>Responsive Breakpoints:</strong>
				</p>
				<Table
					headers={['Breakpoint', 'Max Width', 'Device']}
					rows={[
						['Mobile S', '320px', 'Small mobile devices'],
						['Mobile', '375px', 'Standard mobile devices'],
						['Mobile Landscape', '568px', 'Mobile in landscape orientation'],
						['iPad S', '768px', 'Small tablets'],
						['Mobile L Landscape', '812px', 'Large mobile in landscape'],
						['iPad', '834px', 'Standard tablets'],
					]}
					hasMarginDown
				/>
				<Callout type="info" hasMarginDown>
					<p>
						The dimensions module automatically applies responsive padding
						adjustments at each breakpoint. The <code>.page</code> class uses
						CSS custom properties to maintain consistent spacing across
						different screen sizes.
					</p>
				</Callout>
				<CodeBlock
					language="scss"
					code={codeExamples.DIMENSIONS_EXAMPLE_USAGE}
					hasMarginUp
					hasMarginDown
				/>
			</BlogSection>

			<BlogSection title="Best Practices">
				<p className={styles['margin-bottom--2']}>
					Follow these guidelines to get the most out of StyleKit:
				</p>

				<BlogSection title="Module Organization">
					<p className={styles['margin-bottom--2']}>
						<strong>Use namespaces to avoid conflicts:</strong>
					</p>
					<CodeBlock
						language="scss"
						code={codeExamples.BEST_PRACTICES_MODULE_ORGANIZATION}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Spacing Consistency">
					<p className={styles['margin-bottom--2']}>
						<strong>Always use the spacing scale:</strong>
					</p>
					<CodeBlock
						language="scss"
						code={codeExamples.BEST_PRACTICES_SPACING}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Color Usage">
					<p className={styles['margin-bottom--2']}>
						<strong>Use semantic color names:</strong>
					</p>
					<CodeBlock
						language="scss"
						code={codeExamples.BEST_PRACTICES_COLORS}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Typography Scales">
					<p className={styles['margin-bottom--2']}>
						<strong>Stick to the type scale:</strong>
					</p>
					<CodeBlock
						language="scss"
						code={codeExamples.BEST_PRACTICES_TYPOGRAPHY}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Utility Class Composition">
					<p className={styles['margin-bottom--2']}>
						<strong>Combine utility classes effectively:</strong>
					</p>
					<CodeBlock
						language="tsx"
						code={codeExamples.BEST_PRACTICES_UTILITY_COMPOSITION}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>
			</BlogSection>

			<BlogSection title="Framework Integration">
				<BlogSection title="React / Next.js">
					<CodeBlock
						language="tsx"
						code={codeExamples.REACT_NEXTJS_INTEGRATION}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Vue.js">
					<CodeBlock
						language="vue"
						code={codeExamples.VUE_INTEGRATION}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Angular">
					<CodeBlock
						language="scss"
						code={codeExamples.ANGULAR_INTEGRATION}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>
			</BlogSection>

			<BlogSection title="Customization">
				<p className={styles['margin-bottom--2']}>
					While StyleKit provides sensible defaults, you can customize it for
					your needs:
				</p>

				<BlogSection title="Extending the Color Palette">
					<CodeBlock
						language="scss"
						code={codeExamples.CUSTOMIZATION_COLORS}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Custom Spacing Values">
					<CodeBlock
						language="scss"
						code={codeExamples.CUSTOMIZATION_SPACING}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>

				<BlogSection title="Typography Override">
					<CodeBlock
						language="scss"
						code={codeExamples.CUSTOMIZATION_TYPOGRAPHY}
						hasMarginUp
						hasMarginDown
					/>
				</BlogSection>
			</BlogSection>

			<BlogSection title="Performance Considerations">
				<Callout type="info" hasMarginDown>
					<p className={styles['margin-bottom--2']}>
						<strong>Import only what you need:</strong> StyleKit's modular
						architecture allows you to import specific modules rather than the
						entire library, reducing your bundle size.
					</p>
				</Callout>

				<CodeBlock
					language="scss"
					code={codeExamples.PERFORMANCE_BUNDLE_SIZE}
					hasMarginUp
					hasMarginDown
				/>

				<p className={styles['margin-bottom--2']}>
					<strong>Utility classes vs. SCSS variables:</strong>
				</p>
				<ul>
					<li>Use utility classes for rapid prototyping and simple layouts</li>
					<li>
						Use SCSS variables and functions for complex components with
						multiple computed styles
					</li>
					<li>
						Utility classes are included in the CSS bundle only when used (with
						proper tree-shaking)
					</li>
				</ul>
			</BlogSection>

			<BlogSection title="Migration Guide">
				<p className={styles['margin-bottom--2']}>
					If you're migrating from a custom design system or another framework:
				</p>

				<ol>
					<li className={styles['margin-bottom--2']}>
						<strong>Audit your current styles:</strong> Identify colors,
						spacing, and typography patterns in your existing codebase
					</li>
					<li className={styles['margin-bottom--2']}>
						<strong>Map to StyleKit tokens:</strong> Find equivalent values in
						StyleKit's design tokens
					</li>
					<li className={styles['margin-bottom--2']}>
						<strong>Incremental adoption:</strong> Start with new components,
						gradually refactor existing ones
					</li>
					<li className={styles['margin-bottom--2']}>
						<strong>Create custom tokens:</strong> For values not in StyleKit,
						create your own tokens using StyleKit's patterns
					</li>
					<li className={styles['margin-bottom--2']}>
						<strong>Test thoroughly:</strong> Visual regression testing helps
						catch unintended changes
					</li>
				</ol>
			</BlogSection>

			<BlogSection title="Contributing">
				<p className={styles['margin-bottom--1']}>
					Contributions are welcome! Please fork the repository and submit pull
					requests. For bugs or feature requests, open an issue on the
					repository.
				</p>
				<a
					href="https://github.com/san-siva/stylekit"
					target="_blank"
					rel="noopener noreferrer"
					className={styles['a--highlighted']}
				>
					View source code, report issues, and contribute
				</a>
			</BlogSection>

			<BlogSection title="License">
				<p>This project is licensed under the MIT License.</p>
			</BlogSection>

			<BlogSection title="About">
				<p>
					<strong>Author:</strong> Santhosh Siva
					<br />
					<strong>GitHub:</strong>{' '}
					<a
						href="https://github.com/san-siva"
						target="_blank"
						rel="noopener noreferrer"
						className={styles['a--highlighted']}
					>
						https://github.com/san-siva
					</a>
				</p>
			</BlogSection>
		</Blog>
	);
}
