import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomInW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInW100Filled'

      short_name='ZoomIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778-164 528-414q-30 26-69 40t-77 14q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Zm-14-104v-74h-74v-28h74v-74h28v74h74v28h-74v74h-28Z"/>
    </Icon>
  );
});

IconMaterialZoomInW100Filled.displayName = 'OnesyIconMaterialZoomInW100Filled';

export default IconMaterialZoomInW100Filled;
