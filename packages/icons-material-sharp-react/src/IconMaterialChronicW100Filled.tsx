import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChronicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChronicW100Filled'

      short_name='Chronic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M413-213q-118-11-199.5-98.5T132-520q0-128.33 89.76-218.17 89.77-89.83 218-89.83Q568-828 658-738.17q90 89.84 90 218.17 0 62-23 116t-62 96H518q-41 0-70.5 27.5T413-213Zm107-207 20-20-86-86v-168h-28v180l94 94Zm0 300h240q33 0 56.5-23.5T840-200q0-33-23.5-56.5T760-280H520q-33 0-56.5 23.5T440-200q0 33 23.5 56.5T520-120Zm.04-54q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5Zm120 0q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5Zm120 0q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialChronicW100Filled.displayName = 'OnesyIconMaterialChronicW100Filled';

export default IconMaterialChronicW100Filled;
