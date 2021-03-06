import React, { SelectHTMLAttributes, OptionHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import { InlineError, InlineSuccess } from '@guardian/src-user-feedback';
import { Label } from '@guardian/src-label';
import {
	select,
	selectWrapper,
	errorChevron,
	successChevron,
	errorInput,
	successInput,
} from './styles';
import { Props } from '@guardian/src-helpers';
import { SvgChevronDownSingle } from '@guardian/src-icons';

import {
	visuallyHidden as _visuallyHidden,
	descriptionId,
	generateSourceId,
} from '@guardian/src-foundations/accessibility';
export { selectDefault } from '@guardian/src-foundations/themes';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, Props {
	id?: string;
	label: string;
	optional?: boolean;
	hideLabel?: boolean;
	supporting?: string;
	error?: string;
	success?: string;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: JSX.Element | JSX.Element[];
}

const Select = ({
	id,
	label: labelText,
	optional,
	hideLabel,
	supporting,
	error,
	success,
	cssOverrides,
	children,
	...props
}: SelectProps) => {
	const selectId = id || generateSourceId();
	return (
		<Label
			text={labelText}
			optional={!!optional}
			supporting={supporting}
			hideLabel={hideLabel}
		>
			{error && (
				<InlineError id={descriptionId(selectId)}>{error}</InlineError>
			)}
			{!error && success && (
				<InlineSuccess id={descriptionId(selectId)}>
					{success}
				</InlineSuccess>
			)}
			<div
				css={(theme) => [
					selectWrapper(theme.select && theme),
					error ? errorChevron(theme.select && theme) : '',
					!error && success
						? successChevron(theme.select && theme)
						: '',
				]}
			>
				<select
					css={(theme) => [
						select(theme.select && theme),
						error ? errorInput(theme.select && theme) : '',
						!error && success
							? successInput(theme.select && theme)
							: '',
						cssOverrides,
					]}
					aria-required={!optional}
					aria-invalid={!!error}
					aria-describedby={
						error || success ? descriptionId(selectId) : ''
					}
					id={selectId}
					{...props}
				>
					{children}
				</select>
				<SvgChevronDownSingle />
			</div>
		</Label>
	);
};

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement>, Props {
	cssOverrides?: SerializedStyles | SerializedStyles[];
	children: string;
}

const Option = ({ cssOverrides, children, ...props }: OptionProps) => {
	return (
		<option css={cssOverrides} {...props}>
			{children}
		</option>
	);
};

export { Select, Option };
