import styled from 'styled-components';
import { maroon, white } from '../utils/Colors';

const HeaderDiv = styled.div`
	height: 10vh;
	background: ${maroon};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeaderText = styled.h1`
	color: ${white};
	font-size: ${props => (props.small ? '2.5vh' : '4vh')};
	font-family: 'raleway', monospace;
	font-style: ${props => (props.small ? 'italic' : 'normal')};
	padding: 2px;
	transform: ${props => (props.small ? 'rotate(-15deg)' : null)};
`;

export default () => (
	<HeaderDiv>
		<HeaderText>Dawa Tracker</HeaderText>
		<HeaderText small>3,000,000!</HeaderText>
	</HeaderDiv>
);
