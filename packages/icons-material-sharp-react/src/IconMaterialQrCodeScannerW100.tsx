import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQrCodeScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeScannerW100'

      short_name='QrCodeScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-678v-150h150v28H160v122h-28Zm0 546v-150h28v122h122v28H132Zm546 0v-28h122v-122h28v150H678Zm122-546v-122H678v-28h150v150h-28ZM671-289h45v45h-45v-45Zm0-90h45v45h-45v-45Zm-45 45h45v45h-45v-45Zm-45 45h45v45h-45v-45Zm-45-45h45v45h-45v-45Zm90-90h45v45h-45v-45Zm-45 45h45v45h-45v-45Zm-45-45h45v45h-45v-45Zm180-292v180H536v-180h180ZM424-424v180H244v-180h180Zm0-292v180H244v-180h180Zm-28 444v-124H272v124h124Zm0-292v-124H272v124h124Zm292 0v-124H564v124h124Z"/>
    </Icon>
  );
});

IconMaterialQrCodeScannerW100.displayName = 'OnesyIconMaterialQrCodeScannerW100';

export default IconMaterialQrCodeScannerW100;
