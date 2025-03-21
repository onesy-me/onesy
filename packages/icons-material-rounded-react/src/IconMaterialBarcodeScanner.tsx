import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcodeScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeScanner'

      short_name='BarcodeScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q0 17-11.5 28.5T200-120H80q-17 0-28.5-11.5T40-160v-120q0-17 11.5-28.5T80-320q17 0 28.5 11.5T120-280v80h80q17 0 28.5 11.5T240-160Zm640-160q17 0 28.5 11.5T920-280v120q0 17-11.5 28.5T880-120H760q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200h80v-80q0-17 11.5-28.5T880-320Zm-700 80q-8 0-14-6t-6-14v-440q0-8 6-14t14-6h40q8 0 14 6t6 14v440q0 8-6 14t-14 6h-40Zm120 0q-8 0-14-6t-6-14v-440q0-8 6-14t14-6q8 0 14 6t6 14v440q0 8-6 14t-14 6Zm120 0q-8 0-14-6t-6-14v-440q0-8 6-14t14-6h40q8 0 14 6t6 14v440q0 8-6 14t-14 6h-40Zm120 0q-8 0-14-6t-6-14v-440q0-8 6-14t14-6h80q8 0 14 6t6 14v440q0 8-6 14t-14 6h-80Zm160 0q-8 0-14-6t-6-14v-440q0-8 6-14t14-6q8 0 14 6t6 14v440q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14v-440q0-8 6-14t14-6q8 0 14 6t6 14v440q0 8-6 14t-14 6ZM240-800q0 17-11.5 28.5T200-760h-80v80q0 17-11.5 28.5T80-640q-17 0-28.5-11.5T40-680v-120q0-17 11.5-28.5T80-840h120q17 0 28.5 11.5T240-800Zm480 0q0-17 11.5-28.5T760-840h120q17 0 28.5 11.5T920-800v120q0 17-11.5 28.5T880-640q-17 0-28.5-11.5T840-680v-80h-80q-17 0-28.5-11.5T720-800Z"/>
    </Icon>
  );
});

IconMaterialBarcodeScanner.displayName = 'OnesyIconMaterialBarcodeScanner';

export default IconMaterialBarcodeScanner;
