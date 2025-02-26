import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnifyDockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyDockedW100'

      short_name='MagnifyDocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-108h640v-400H160v400Zm426-96h28v-90h90v-28h-90v-90h-28v90h-90v28h90v90Z"/>
    </Icon>
  );
});

IconMaterialMagnifyDockedW100.displayName = 'OnesyIconMaterialMagnifyDockedW100';

export default IconMaterialMagnifyDockedW100;
