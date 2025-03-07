import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcodeReaderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeReaderW100'

      short_name='BarcodeReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240.09-200Q206-200 186-226.5T174-285l77-289q-32-8-55.5-37.5T172-680q0-44.55 31.73-76.28Q235.45-788 280-788h365L537-572H391l-16 61h29v108h-58l-40 154q-6.25 21.72-24.43 35.36T240.09-200Zm-.09-28q14 0 24-8t14-21l84-315h-83l-78 294q-5 19 7 34.5t32 15.5Zm467-550-13-29 119-54 13 29-119 54Zm106 279-119-53 13-29 119 54-13 28Zm-99-165v-32h132v32H714Zm-394 92Zm-40-28h240l80-160H280q-33 0-56.5 23.5T200-680q0 33 23.5 56.5T280-600Zm114-80Z"/>
    </Icon>
  );
});

IconMaterialBarcodeReaderW100.displayName = 'OnesyIconMaterialBarcodeReaderW100';

export default IconMaterialBarcodeReaderW100;
