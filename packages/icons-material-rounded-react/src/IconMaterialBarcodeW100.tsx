import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeW100'

      short_name='Barcode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M128-236v-448h64v448h-64Zm96 0v-448h64v448h-64Zm96 0v-448h32v448h-32Zm96 0v-448h64v448h-64Zm96 0v-448h96v448h-96Zm128 0v-448h32v448h-32Zm96 0v-448h96v448h-96Z"/>
    </Icon>
  );
});

IconMaterialBarcodeW100.displayName = 'OnesyIconMaterialBarcodeW100';

export default IconMaterialBarcodeW100;
