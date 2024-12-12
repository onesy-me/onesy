import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcodeReaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeReaderW100Filled'

      short_name='BarcodeReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200q-34 0-54-26.5T174-285l77-289q-32-8-55.5-37.5T172-680q0-45 31.5-76.5T280-788h365L537-572H391l-16 61h29v108h-58l-40 154q-6 22-24.5 35.5T240-200Zm467-578-13-29 119-54 13 29-119 54Zm106 279-119-53 13-29 119 54-13 28Zm-99-165v-32h132v32H714Z"/>
    </Icon>
  );
});

IconMaterialBarcodeReaderW100Filled.displayName = 'OnesyIconMaterialBarcodeReaderW100Filled';

export default IconMaterialBarcodeReaderW100Filled;
