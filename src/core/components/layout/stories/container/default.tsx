import React from "react"
import { Container, Columns, Column } from "../../index"
import { sport } from "@guardian/src-foundations/palette"
import { css } from "@emotion/core"

export const defaultLight = () => <Container>Hello world</Container>

defaultLight.story = {
	name: "default light",
}

export const withBorder = () => <Container border={true}>Hello world</Container>

withBorder.story = {
	name: "with border",
}

const contents = css`
	text-align: center;
	background-color: ${sport[600]};
`

export const withColumns = () => (
	<Container border={true}>
		<Columns>
			<Column>
				<div css={contents}>1</div>
			</Column>
			<Column>
				<div css={contents}>2</div>
			</Column>
			<Column>
				<div css={contents}>3</div>
			</Column>
			<Column>
				<div css={contents}>4</div>
			</Column>
		</Columns>
	</Container>
)

withColumns.story = {
	name: "with columns",
}