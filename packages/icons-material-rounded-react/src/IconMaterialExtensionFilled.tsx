import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionFilled'

      short_name='Extension'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-120H200q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-33 23.5-56.5T200-800h160q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v160q42 0 71 29t29 71q0 42-29 71t-71 29v160q0 33-23.5 56.5T720-120H568q0-50-31.5-85T460-240q-45 0-76.5 35T352-120Z"/>
    </Icon>
  );
});

IconMaterialExtensionFilled.displayName = 'OnesyIconMaterialExtensionFilled';

export default IconMaterialExtensionFilled;
