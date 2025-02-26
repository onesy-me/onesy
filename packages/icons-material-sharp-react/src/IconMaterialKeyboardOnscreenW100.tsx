import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardOnscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOnscreenW100'

      short_name='KeyboardOnscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-292h296v-56H332v56ZM212-412h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM132-212v-536h696v536H132Zm28-362h640v-146H160v146Zm0 334h640v-306H160v306Zm0 0v-306 306Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOnscreenW100.displayName = 'OnesyIconMaterialKeyboardOnscreenW100';

export default IconMaterialKeyboardOnscreenW100;
