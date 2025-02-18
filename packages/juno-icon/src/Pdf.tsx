import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import PdfD from './PdfD';

const Pdf = memo(
  forwardRef(
    (
      inProps: React.SVGProps<SVGSVGElement> & {
        themeType?: PaletteType;
      },
      svgRef?: React.Ref<SVGSVGElement>,
    ) => {
      const theme = useTheme();
      const { themeType = theme.palette.type, ...props } = inProps;
      return themeType === 'dark' ? (
        <PdfD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color2, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color60, #e6413c)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color60, #e6413c)"
            d="M11.919 8h4.752l5.551 4.785v9.059c0 .605-.207 1.116-.62 1.532S20.681 24 20.08 24h-8.161c-.601 0-1.108-.208-1.522-.624s-.62-.927-.62-1.532V10.156c0-.605.207-1.116.62-1.532S11.317 8 11.919 8zm4.239 3.029l-.049-.057a.839.839 0 00-.9-.225c-.311.104-.569.365-.719.825-.264.808-.106 2.047.432 3.062l.076.137.08.134a24.63 24.63 0 01-1.257 2.712c-.948.334-1.704.773-2.25 1.306-.718.701-1.018 1.403-.802 1.933.115.282.36.467.667.514l.078.009.081.003.097-.004a1.59 1.59 0 00.722-.268c.497-.325 1.116-1.18 1.753-2.271l.091-.157.183-.324a12.122 12.122 0 012.4-.469c.213-.021.425-.037.631-.049.852.897 1.556 1.376 2.209 1.497.088.016.177.027.264.033l.13.004.102-.003c.494-.026.899-.237 1.096-.579a.871.871 0 00-.009-.89c-.37-.641-1.462-.981-3.075-.981l-.169.001-.17.004-.26-.297-.236-.281-.267-.328-.959-1.201-.041-.05c.237-.679.373-1.234.403-1.654.07-.97-.018-1.633-.28-2.02l-.048-.066zm-3.106 7.909l-.164.096-.155.1c-.201.135-.38.279-.536.43-.421.411-.605.761-.604.91l.001.009.044-.004.05-.011a.854.854 0 00.233-.111c.235-.154.614-.622 1.048-1.291l.082-.128zm5.707-1.103l.104.087.111.088c.33.251.617.398.866.444l.079.012.074.007.078.003.067-.002a.612.612 0 00.328-.1l.02-.02-.024-.036-.03-.034c-.192-.193-.724-.372-1.534-.438l-.138-.01zm-3.049-2.097l-.127.3c-.175.404-.37.823-.577 1.239a13.522 13.522 0 011.719-.279l-.151-.182-.34-.42-.523-.658zm-.237-4.127l-.021.021-.022.029a.793.793 0 00-.088.19c-.147.451-.098 1.159.136 1.825.062-.246.1-.457.112-.626.058-.796-.002-1.231-.1-1.41l-.018-.029z"
          />
        </svg>
      );
    },
  ),
);
Pdf.displayName = 'Pdf';
Pdf['iconName'] = 'pdf';
export default Pdf;
