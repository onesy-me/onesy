import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllW100Filled'

      short_name='BorderAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-172v-294h294v294H494Zm0-322v-294h294v294H494Zm-322 0v-294h294v294H172Zm0 322v-294h294v294H172Z"/>
    </Icon>
  );
});

IconMaterialBorderAllW100Filled.displayName = 'OnesyIconMaterialBorderAllW100Filled';

export default IconMaterialBorderAllW100Filled;
