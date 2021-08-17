import React, { forwardRef, memo } from 'react';

const PdfD = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path
          fill="var(--color35, #43201f)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color36, #de4944)"
          d="M11.919 8h4.752l5.551 4.785v9.059c0 .605-.207 1.116-.62 1.532S20.681 24 20.08 24h-8.161c-.601 0-1.108-.208-1.522-.624s-.62-.927-.62-1.532V10.156c0-.605.207-1.116.62-1.532S11.317 8 11.919 8z"
        />
        <path
          fill="var(--color20, #f1f1f1)"
          d="M15.208 10.748a.834.834 0 01.9.225l.049.057.048.066c.262.387.35 1.05.28 2.02-.03.42-.166.975-.403 1.654l.041.05.959 1.201.267.328.236.281.26.297.17-.004.169-.001c1.613 0 2.705.34 3.075.981a.871.871 0 01.009.89c-.197.341-.602.552-1.096.579l-.102.003-.13-.004a2.44 2.44 0 01-.264-.033c-.653-.12-1.357-.6-2.209-1.497-.206.012-.417.028-.631.049-.768.074-1.605.222-2.4.469l-.183.323-.091.157c-.637 1.091-1.256 1.946-1.753 2.271a1.59 1.59 0 01-.722.268l-.097.004-.081-.003-.078-.009a.836.836 0 01-.667-.514c-.216-.53.084-1.232.802-1.933.546-.533 1.302-.972 2.25-1.306a24.63 24.63 0 001.257-2.712l-.08-.134-.076-.137c-.537-1.015-.695-2.253-.432-3.062.15-.459.408-.72.719-.825zm-2.156 8.19l-.164.096-.155.1c-.201.135-.38.279-.536.43-.421.411-.605.761-.604.91l.002.009.044-.004.05-.011a.854.854 0 00.233-.111c.235-.154.614-.622 1.048-1.291l.082-.128zm5.707-1.103l.104.086.111.088c.33.252.617.398.866.444l.079.012.074.007.078.003.067-.002a.612.612 0 00.328-.1l.02-.02-.024-.036-.03-.034c-.192-.193-.724-.372-1.534-.438l-.138-.01zm-3.049-2.097l-.128.3c-.175.404-.37.823-.577 1.239a13.522 13.522 0 011.719-.279l-.151-.182-.34-.42-.523-.658zm-.237-4.127l-.021.021-.022.029a.793.793 0 00-.088.19c-.147.451-.098 1.159.136 1.825.062-.246.1-.457.112-.626.058-.796-.002-1.231-.1-1.41l-.018-.029z"
        />
      </svg>
    ),
  ),
);
PdfD.displayName = 'PdfD';
PdfD['iconName'] = 'pdf-D';
export default PdfD;
