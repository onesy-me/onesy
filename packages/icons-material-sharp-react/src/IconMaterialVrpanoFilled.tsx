import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVrpanoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoFilled'

      short_name='Vrpano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M81-140v-681q75 35 180 58t220 23q115 0 220-23t180-58v681q-75-35-180-57.5T481-220q-115 0-220 22.5T81-140Zm139-204q65-8 129.5-12t130.5-4q66 0 130.5 4T740-344L560-560 446-424l-80-96-146 176Z"/>
    </Icon>
  );
});

IconMaterialVrpanoFilled.displayName = 'OnesyIconMaterialVrpanoFilled';

export default IconMaterialVrpanoFilled;
