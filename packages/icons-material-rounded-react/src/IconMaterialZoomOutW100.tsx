import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomOutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutW100'

      short_name='ZoomOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M308-566q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h148q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H308Zm74 206q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l240 240q4 4 4.5 9.5T788-174q-5 5-10 5t-10-5L528-414q-30 26-69 40t-77 14Zm0-28q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/>
    </Icon>
  );
});

IconMaterialZoomOutW100.displayName = 'OnesyIconMaterialZoomOutW100';

export default IconMaterialZoomOutW100;
