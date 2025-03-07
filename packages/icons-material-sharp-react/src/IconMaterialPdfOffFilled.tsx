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
      <path d="M280 556v-40h40v40h-40Zm-60 140h60v-80h100V496l-40-40H220v240Zm196 0h120l4-60h-64v-64l-60-60v184ZM120 936V242l-8-34 728 728H120Zm664 56L56 264l56-56 728 728-56 56ZM233 216h607v607L680 663v-47h60v-60h-60v-40h60v-60H620v147l-44-44v-63l-40-40h-63L233 216Z"/>
    </Icon>
  );
});

IconMaterialPdfOffFilled.displayName = 'OnesyIconMaterialPdfOffFilled';

export default IconMaterialPdfOffFilled;
