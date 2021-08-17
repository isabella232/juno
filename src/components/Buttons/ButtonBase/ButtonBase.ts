import MuiButtonBase from '@material-ui/core/ButtonBase';
import { ComponentProps } from 'react';

import { styled } from '../../../foundation';

type RcButtonBaseProps = ComponentProps<typeof MuiButtonBase>;

/** @release */
const RcButtonBase = styled(MuiButtonBase)``;

RcButtonBase.displayName = 'RcButtonBase';

export { RcButtonBase, RcButtonBaseProps };
