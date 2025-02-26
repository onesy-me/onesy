import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutW100Filled'

      short_name='ZoomOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778-164 528-414q-30 26-69 40t-77 14q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Zm-88-178v-28h176v28H294Z"/>
    </Icon>
  );
});

IconMaterialZoomOutW100Filled.displayName = 'OnesyIconMaterialZoomOutW100Filled';

export default IconMaterialZoomOutW100Filled;
