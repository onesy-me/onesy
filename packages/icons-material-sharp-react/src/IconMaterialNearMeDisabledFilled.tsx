import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledFilled'

      short_name='NearMeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-120 402-402 120-516v-56l195-73-203-203 57-57 736 736-57 57-203-203-73 195h-56Zm191-361L481-707l359-133-133 359Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledFilled.displayName = 'OnesyIconMaterialNearMeDisabledFilled';

export default IconMaterialNearMeDisabledFilled;
