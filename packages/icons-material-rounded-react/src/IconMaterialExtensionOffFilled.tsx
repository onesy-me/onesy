import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffFilled'

      short_name='ExtensionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-17 6-31.5t17-25.5l634 634q-11 11-25.5 17t-31.5 6H568q0-48-30.5-84T460-240q-47 0-77.5 36T352-120H200Zm600-154L274-800h86q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v160q42 0 71 29t29 71q0 42-29 71t-71 29v86ZM763-84 83-763q-12-12-11.5-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffFilled.displayName = 'OnesyIconMaterialExtensionOffFilled';

export default IconMaterialExtensionOffFilled;
