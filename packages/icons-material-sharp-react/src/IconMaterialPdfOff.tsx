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
      <path d="M280 556h40v-40h-40v40Zm-60 140V456h120l40 40v120H280v80h-60Zm196 0V512l60 60v64h64l-4 60H416Zm160-137L473 456h63l40 40v63Zm104 104-60-60V456h120v60h-60v40h60v60h-60v47Zm160 160-80-80V296H313l-80-80h607v607ZM120 936V217l80 79v560h560l79 80H120Zm671 64L56 264l56-56 736 736-57 56ZM424 632Zm113-113Z"/>
    </Icon>
  );
});

IconMaterialPdfOff.displayName = 'OnesyIconMaterialPdfOff';

export default IconMaterialPdfOff;
