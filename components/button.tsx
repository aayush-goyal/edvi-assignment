import Colors from '../core/constants/colors';
import Dimens from '../core/constants/dimens';

/**
 * This function is used as the component for Button.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2022-02-03
 * @modifier
 * @modified
 * @since 1.0.0
 */
type ButtonProps = {
	buttonOnClick: React.MouseEventHandler<HTMLButtonElement>;
	buttonShadowColor?: string;
	buttonText: string;
	id: string;
	width: string;
};

const Button = (props: ButtonProps) => (
	<button id={props.id} onClick={props.buttonOnClick} type="button">
		{props.buttonText}
		<style jsx>
			{`
				button {
					appearance: none;
					background-color: ${Colors.GRAY_E1};
					border: 2px solid ${Colors.BLACK};
					border-radius: ${Dimens.BORDER_RADIUS};
					box-shadow: 2px 2px 4px ${props.buttonShadowColor};
					cursor: pointer;
					display: inline-block;
					width: ${props.width};
					font-family: 'Titillium Web', sans-serif;
					font-size: 16px;
					font-weight: 700;
					text-transform: uppercase;
					height: ${Dimens.BUTTON_HEIGHT};
					color: ${Colors.BLACK};
					outline: none;
					padding: 4px 0px;
					text-align: center;
					touch-action: manipulation;
					user-select: none;
				}
				button:active {
					box-shadow: 1px 1px 2px ${props.buttonShadowColor};
					transform: scale(0.98);
				}
				button:hover {
					background-color: ${Colors.BUTTON_HOVER};
				}
			`}
		</style>
	</button>
);

export default Button;
