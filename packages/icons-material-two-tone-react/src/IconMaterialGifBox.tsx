import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGifBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBox'

      short_name='GifBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5,5v14h14V5H5z M9.5,13v-1h1v1c0,0.55-0.45,1-1,1h-1c-0.55,0-1-0.45-1-1v-2c0-0.55,0.45-1,1-1h1 c0.55,0,1,0.45,1,1h-2v2H9.5z M12.5,14h-1v-4h1V14z M16.5,11h-2v0.5H16v1h-1.5V14h-1v-4h3V11z" opacity=".3"/><path d="M19,19H5V5h14V19z M5,3C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5z M11.5,14h1v-4h-1V14z M13.5,14h1v-1.5H16v-1h-1.5V11h2v-1h-3V14z M9.5,12v1h-1v-2h2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h1 c0.55,0,1-0.45,1-1v-1H9.5z"/>
    </Icon>
  );
});

IconMaterialGifBox.displayName = 'OnesyIconMaterialGifBox';

export default IconMaterialGifBox;
