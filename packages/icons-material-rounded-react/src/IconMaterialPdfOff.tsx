import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPdfOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PdfOff'

      short_name='PdfOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 556h40v-40h-40v40Zm-60 110V496q0-17 11.5-28.5T260 456h80q17 0 28.5 11.5T380 496v80q0 17-11.5 28.5T340 616h-60v50q0 13-8.5 21.5T250 696q-13 0-21.5-8.5T220 666Zm236 30q-17 0-28.5-11.5T416 656V512l60 60v64h40v-24l58 58q-5 12-15 19t-23 7h-80Zm120-137-52-51-51-52h63q17 0 28.5 11.5T576 496v63Zm104 104-60-60V496q0-17 11.5-28.5T660 456h50q13 0 21.5 8.5T740 486q0 13-8.5 21.5T710 516h-30v40h30q13 0 21.5 8.5T740 586q0 13-8.5 21.5T710 616h-30v47Zm160 160-80-80V296H313l-80-80h527q33 0 56.5 23.5T840 296v527ZM200 936q-33 0-56.5-23.5T120 856V296q0-16 6-30.5t17-25.5l57 56v560h560l56 57q-11 11-25.5 17t-30.5 6H200Zm563 36L84 292q-11-11-11.5-27.5T84 236q11-11 28-11t28 11l680 680q12 12 11.5 28T819 972q-12 11-28 11.5T763 972ZM424 632Zm113-113Z"/>
    </Icon>
  );
});

IconMaterialPdfOff.displayName = 'OnesyIconMaterialPdfOff';

export default IconMaterialPdfOff;
