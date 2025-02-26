import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVrpanoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoW100Filled'

      short_name='Vrpano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-218v-522q81 23 161.5 38.5T480-686q106 0 186.5-15.5T828-740v522q-81-23-161.5-37.5T480-270q-106 0-186.5 14.5T132-218Zm140-154q52-5 104-7.5t104-2.5q52 0 104 2.5t104 7.5L560-526 455-401l-80-96-103 125Z"/>
    </Icon>
  );
});

IconMaterialVrpanoW100Filled.displayName = 'OnesyIconMaterialVrpanoW100Filled';

export default IconMaterialVrpanoW100Filled;
