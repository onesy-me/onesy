import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcodeScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeScannerW100'

      short_name='BarcodeScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-146v-148h28v120h120v28H66Zm680 0v-28h120v-120h28v148H746Zm-586-94v-480h80v480h-80Zm120 0v-480h40v480h-40Zm120 0v-480h80v480h-80Zm120 0v-480h120v480H520Zm160 0v-480h40v480h-40Zm80 0v-480h40v480h-40ZM66-666v-148h148v28H94v120H66Zm800 0v-120H746v-28h148v148h-28Z"/>
    </Icon>
  );
});

IconMaterialBarcodeScannerW100.displayName = 'OnesyIconMaterialBarcodeScannerW100';

export default IconMaterialBarcodeScannerW100;
