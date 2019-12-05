import { css } from "@emotion/core"
import { palette, space, size, transitions } from "@guardian/src-foundations"
import { textSans } from "@guardian/src-foundations/typography"
import { focusHalo } from "@guardian/src-foundations/accessibility"

export const group = css`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`

export const label = css`
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	height: ${size.large}px;

	&:hover {
		input {
			border-color: ${palette.border.checkboxHover};
		}
	}
`

export const labelWithSupportingText = css`
	align-items: flex-start;
	margin-bottom: ${space[2]}px;
`

export const checkbox = css`
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	width: ${size.small}px;
	height: ${size.small}px;
	margin: 0 ${space[1]}px 0 0;

	border: 2px solid currentColor;
	position: relative;
	transition: box-shadow ${transitions.short};
	transition-delay: 0.08s;

	color: ${palette.border.checkbox};

	&:checked {
		border-color: ${palette.border.checkboxChecked};

		& ~ span:before {
			right: 0;
		}
		& ~ span:after {
			top: 0;
		}
	}

	&:focus {
		${focusHalo};
	}

	/*
	Take care: Emotion extracts @supports blocks and moves them below
	all other <style> elements, making these values hard to override.
	I have chosen to keep these styles in the @supports block as
	moving them out makes checkboxes look horrible on older browsers
	*/
	@supports (appearance: none) {
		appearance: none;

		&:after {
			position: absolute;
			content: "";
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			transform: scale(0);
			transform-origin: center;
			transition: transform ${transitions.short};
		}

		&:checked {
			& ~ span:before {
				right: 0;
			}
			& ~ span:after {
				top: 0;
			}
		}
	}
`

export const labelText = css`
	${textSans.medium()};
	color: ${palette.text.primary};
`

export const labelTextWithSupportingText = css`
	${textSans.medium({ fontWeight: "bold" })};
`

export const supportingText = css`
	${textSans.medium()};
	color: ${palette.text.secondary};
`

export const tick = css`
	@supports (appearance: none) {
		/* overall positional properties */
		position: absolute;
		top: 15px;
		left: 9px;
		width: 6px;
		height: 12px;
		transform: rotate(45deg);
		z-index: 5;

		/* the checkmark ✓ */
		&:after,
		&:before {
			position: absolute;
			display: block;
			background-color: ${palette.background.checkboxChecked};
			transition: all ${transitions.short} ease-in-out;
			content: "";
		}

		/* the short side */
		&:before {
			height: 2px;
			bottom: 0;
			left: 0;
			right: 100%;
			transition-delay: 0.05s;
		}

		/* the long side */
		&:after {
			bottom: 0;
			right: 0;
			top: 100%;
			width: 2px;
			transition-delay: 0.1s;
		}
	}
`

export const errorCheckbox = css`
	border: 4px solid ${palette.border.error};
`