import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPillOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillOffFilled'

      short_name='PillOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-376 376-694l80-80q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73l-80 80Zm98 324L581-263l-77 77q-32 32-73 49t-86 17q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l77-77L56-788l56-56 736 736-56 56Z"/>
    </Icon>
  );
});

IconMaterialPillOffFilled.displayName = 'OnesyIconMaterialPillOffFilled';

export default IconMaterialPillOffFilled;
