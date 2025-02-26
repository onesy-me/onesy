import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQrCodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeW100Filled'

      short_name='QrCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-520v-268h268v268H172Zm28-28h212v-212H200v212Zm-28 376v-268h268v268H172Zm28-28h212v-212H200v212Zm320-320v-268h268v268H520Zm28-28h212v-212H548v212Zm173 376v-67h67v67h-67ZM520-373v-67h67v67h-67Zm67 67v-67h67v67h-67Zm-67 67v-67h67v67h-67Zm67 67v-67h67v67h-67Zm67-67v-67h67v67h-67Zm0-134v-67h67v67h-67Zm67 67v-67h67v67h-67Z"/>
    </Icon>
  );
});

IconMaterialQrCodeW100Filled.displayName = 'OnesyIconMaterialQrCodeW100Filled';

export default IconMaterialQrCodeW100Filled;
