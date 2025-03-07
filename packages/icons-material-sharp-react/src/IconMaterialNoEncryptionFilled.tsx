import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoEncryptionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionFilled'

      short_name='NoEncryption'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-274 434-640h166v-80q0-50-34.5-85T481-840q-50 0-84 34.5T363-720v9l-73-73q22-61 75-98.5T481-920q83 0 141 58.5T680-720v80h120v366Zm20 246-52-52H160v-556h52L28-820l56-56L876-84l-56 56ZM424-422q-11 11-17 25.5t-6 31.5q0 33 23.5 56.5T481-285q17 0 31.5-6t25.5-17L424-422Z"/>
    </Icon>
  );
});

IconMaterialNoEncryptionFilled.displayName = 'OnesyIconMaterialNoEncryptionFilled';

export default IconMaterialNoEncryptionFilled;
