import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardW100'

      short_name='Keyboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-252v-456h696v456H132Zm28-28h640v-400H160v400Zm172-52h296v-56H332v56ZM212-452h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM212-572h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM160-280v-400 400Z"/>
    </Icon>
  );
});

IconMaterialKeyboardW100.displayName = 'OnesyIconMaterialKeyboardW100';

export default IconMaterialKeyboardW100;
