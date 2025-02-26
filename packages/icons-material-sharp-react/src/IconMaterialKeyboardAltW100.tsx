import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltW100'

      short_name='KeyboardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-172v-576h776v576H92Zm28-28h720v-520H120v520Zm206-86h308v-28H326v28ZM212-412h56v-56h-56v56Zm160 0h56v-56h-56v56Zm160 0h56v-56h-56v56Zm160 0h56v-56h-56v56ZM212-572h56v-56h-56v56Zm160 0h56v-56h-56v56Zm160 0h56v-56h-56v56Zm160 0h56v-56h-56v56ZM120-200v-520 520Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAltW100.displayName = 'OnesyIconMaterialKeyboardAltW100';

export default IconMaterialKeyboardAltW100;
