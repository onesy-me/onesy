import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPdfOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PdfOffFilled'

      short_name='PdfOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 556v-40h40v40h-40Zm-30 140q13 0 21.5-8.5T280 666v-50h60q17 0 28.5-11.5T380 576v-80q0-17-11.5-28.5T340 456h-80q-17 0-28.5 11.5T220 496v170q0 13 8.5 21.5T250 696Zm206 0h80q13 0 23-7t15-19l-58-58v24h-40v-64l-60-60v144q0 17 11.5 28.5T456 696ZM200 936q-33 0-56.5-23.5T120 856V296q0-16 5.5-31t14.5-29l680 680q-14 9-29 14.5t-31 5.5H200Zm563 36L84 292q-11-11-11.5-27.5T84 236q11-11 28-11t28 11l680 680q12 12 11.5 28T819 972q-12 11-28 11.5T763 972Zm77-149L680 663v-47h30q13 0 21.5-8.5T740 586q0-13-8.5-21.5T710 556h-30v-40h30q13 0 21.5-8.5T740 486q0-13-8.5-21.5T710 456h-50q-17 0-28.5 11.5T620 496v107l-44-44v-63q0-17-11.5-28.5T536 456h-63L233 216h527q33 0 56.5 23.5T840 296v527Z"/>
    </Icon>
  );
});

IconMaterialPdfOffFilled.displayName = 'OnesyIconMaterialPdfOffFilled';

export default IconMaterialPdfOffFilled;
