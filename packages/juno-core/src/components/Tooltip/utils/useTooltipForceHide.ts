import { useRef } from 'react';

import {
  useChange,
  useEventCallback,
  useEventListener,
  usePrevious,
  useRefState,
} from '../../../foundation';
import { RcTooltipProps } from '../Tooltip';

type UseTooltipForceHide = {
  ref: React.RefObject<HTMLElement>;
} & Pick<RcTooltipProps, 'tooltipForceHide' | 'open' | 'onClose' | 'onOpen'>;

export const useTooltipForceHide = ({
  tooltipForceHide,
  open: openProp,
  onClose,
  onOpen,
  ref,
}: UseTooltipForceHide):
  | Pick<
      RcTooltipProps,
      | 'disableFocusListener'
      | 'disableHoverListener'
      | 'disableTouchListener'
      | 'open'
      | 'onOpen'
      | 'onClose'
    >
  | undefined => {
  const [openRef, setOpen] = useRefState(false);
  const isOverRef = useRef(false);

  let openState = tooltipForceHide ? false : openProp ?? openRef.current;

  const prevOpenState = usePrevious(() => openState);

  useChange(
    () => {
      // * when switch to not tooltipForceHide and that mouse keep on element should show tooltip
      if (tooltipForceHide === false && isOverRef.current === true) {
        // * check is that have set open by props, if not set true directly
        openState = openProp ?? true;
      }

      if (tooltipForceHide && prevOpenState) {
        setOpen(false, false);
        onClose?.({} as any);
      } else if (openState) {
        setOpen(true, false);
        onOpen?.({} as any);
      }
    },
    () => tooltipForceHide,
  );

  useEventListener(ref, 'mouseover', () => (isOverRef.current = true));

  const leaveFn = () => (isOverRef.current = false);

  useEventListener(ref, 'mouseleave', leaveFn);
  // * also need blur check for when item become pointer-event none
  useEventListener(ref, 'blur', leaveFn);

  const handleOpen: RcTooltipProps['onOpen'] = useEventCallback((event) => {
    setOpen(true);
    onOpen?.(event);
  });

  const handleClose: RcTooltipProps['onClose'] = useEventCallback((event) => {
    setOpen(false);
    onClose?.(event);
  });

  return tooltipForceHide !== undefined
    ? {
        disableFocusListener: tooltipForceHide,
        disableHoverListener: tooltipForceHide,
        disableTouchListener: tooltipForceHide,
        open: openState,
        onOpen: handleOpen,
        onClose: handleClose,
      }
    : undefined;
};
