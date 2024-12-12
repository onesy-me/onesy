import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualW100Filled'

      short_name='Equal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-332v-68h536v68H212Zm0-228v-68h536v68H212Z"/>
    </Icon>
  );
});

IconMaterialEqualW100Filled.displayName = 'OnesyIconMaterialEqualW100Filled';

export default IconMaterialEqualW100Filled;
