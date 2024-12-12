import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Barcode'

      short_name='Barcode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h80v560H40Zm120 0v-560h80v560h-80Zm120 0v-560h40v560h-40Zm120 0v-560h80v560h-80Zm120 0v-560h120v560H520Zm160 0v-560h40v560h-40Zm120 0v-560h120v560H800Z"/>
    </Icon>
  );
});

IconMaterialBarcode.displayName = 'OnesyIconMaterialBarcode';

export default IconMaterialBarcode;
