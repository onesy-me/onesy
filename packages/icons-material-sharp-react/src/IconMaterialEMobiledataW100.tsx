import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataW100'

      short_name='EMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-280v-400h268v28H374v158h240v28H374v158h240v28H346Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataW100.displayName = 'OnesyIconMaterialEMobiledataW100';

export default IconMaterialEMobiledataW100;
