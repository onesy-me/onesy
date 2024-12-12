import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKebabDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KebabDiningFilled'

      short_name='KebabDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-40v-160h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40H120v-200h130v-40h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40h60v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v40h130v200H310v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v160h-60Zm400 0v-160h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40H520v-200h130v-40h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40h60v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v40h130v200H710v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v160h-60Z"/>
    </Icon>
  );
});

IconMaterialKebabDiningFilled.displayName = 'OnesyIconMaterialKebabDiningFilled';

export default IconMaterialKebabDiningFilled;
