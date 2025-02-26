import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdW100'

      short_name='Hd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-376h28v-80h112v80h28v-208h-28v100H300v-100h-28v208Zm248 0h146l22-23v-163l-22-22H520v208Zm28-28v-152h112v152H548ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialHdW100.displayName = 'OnesyIconMaterialHdW100';

export default IconMaterialHdW100;
