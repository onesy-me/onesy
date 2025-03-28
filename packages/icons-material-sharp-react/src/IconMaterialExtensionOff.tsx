import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOff'

      short_name='ExtensionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-232q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-232l80 80v88q54 20 87 67t33 105q0 57-33 104t-87 68v88h88q21-54 68-87t104-33q57 0 104 33t68 87h88l80 80H568q0-48-30.5-84T460-240q-47 0-77.5 36T352-120H120Zm680-154-80-80v-86h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-240H480v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80h-86l-80-80h86q0-42 29-71t71-29q42 0 71 29t29 71h240v240q42 0 71 29t29 71q0 42-29 71t-71 29v86Zm-9 219L55-791l57-57 736 736-57 57ZM537-537Zm-77 77Z"/>
    </Icon>
  );
});

IconMaterialExtensionOff.displayName = 'OnesyIconMaterialExtensionOff';

export default IconMaterialExtensionOff;
