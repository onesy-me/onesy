import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodWatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodWatchW100Filled'

      short_name='AodWatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-500v-28h208v28H376Zm40 88v-28h128v28H416Zm-18 238-30-108q-51-27-83.5-80T252-480q0-65 32.5-118t83.5-80l30-108h164l30 108q51 27 83.5 80T708-480q0 65-32.5 118T592-282l-30 108H398Zm82-106q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialAodWatchW100Filled.displayName = 'OnesyIconMaterialAodWatchW100Filled';

export default IconMaterialAodWatchW100Filled;
