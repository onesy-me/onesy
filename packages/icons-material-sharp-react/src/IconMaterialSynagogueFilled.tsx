import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSynagogueFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueFilled'

      short_name='Synagogue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-640v-40q0-33 23.5-56.5T840-760q33 0 56.5 23.5T920-680v40H760Zm-720 0v-40q0-33 23.5-56.5T120-760q33 0 56.5 23.5T200-680v40H40Zm0 520v-480h160v480H40Zm200 0v-520l240-200 240 200v520H560v-280H400v280H240Zm520 0v-480h160v480H760ZM480-500q25 0 42.5-17.5T540-560q0-25-17.5-42.5T480-620q-25 0-42.5 17.5T420-560q0 25 17.5 42.5T480-500Z"/>
    </Icon>
  );
});

IconMaterialSynagogueFilled.displayName = 'OnesyIconMaterialSynagogueFilled';

export default IconMaterialSynagogueFilled;
