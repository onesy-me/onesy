import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWakeOnPressFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressFilled'

      short_name='NestWakeOnPress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-440q-25 0-42.5-17.5T760-500v-240q0-25 17.5-42.5T820-800q25 0 42.5 17.5T880-740v240q0 25-17.5 42.5T820-440ZM328-120q-18 0-36.5-6.5T262-144L107-307q-11-12-11-28.5t11-27.5l6-6q7-7 16.5-10t20.5-1l130 30v-430q0-25 17.5-42.5T340-840q25 0 42.5 17.5T400-780v240h36q8 0 18 2t18 6l164 82q23 11 35 34.5t8 48.5l-25 178q-5 30-27 49.5T575-120H328Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressFilled.displayName = 'OnesyIconMaterialNestWakeOnPressFilled';

export default IconMaterialNestWakeOnPressFilled;
