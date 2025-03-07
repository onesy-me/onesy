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
      <path d="M760-640v-40q0-33 23.5-56.5T840-760q33 0 56.5 23.5T920-680v40H760Zm-720 0v-40q0-33 23.5-56.5T120-760q33 0 56.5 23.5T200-680v40H40Zm0 440v-400h160v480h-80q-33 0-56.5-23.5T40-200Zm200 80v-520l189-157q11-9 24-14t27-5q14 0 27 5t24 14l189 157v520H600q-17 0-28.5-11.5T560-160v-160q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320v160q0 17-11.5 28.5T360-120H240Zm520 0v-480h160v400q0 33-23.5 56.5T840-120h-80ZM480-500q25 0 42.5-17.5T540-560q0-25-17.5-42.5T480-620q-25 0-42.5 17.5T420-560q0 25 17.5 42.5T480-500Z"/>
    </Icon>
  );
});

IconMaterialSynagogueFilled.displayName = 'OnesyIconMaterialSynagogueFilled';

export default IconMaterialSynagogueFilled;
