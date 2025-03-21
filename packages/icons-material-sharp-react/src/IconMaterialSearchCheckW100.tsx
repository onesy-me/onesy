import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSearchCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchCheckW100'

      short_name='SearchCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m358-511-75-73 20-20 54 54 100-99 20 19-119 119Zm420 347L528-414q-30 26-69 40t-77 14q-92 0-156-64t-64-156q0-92 64-156t156-64q92 0 156 64t64 156q0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/>
    </Icon>
  );
});

IconMaterialSearchCheckW100.displayName = 'OnesyIconMaterialSearchCheckW100';

export default IconMaterialSearchCheckW100;
