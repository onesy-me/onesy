import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualW100'

      short_name='Equal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-332v-68h536v68H212Zm0-228v-68h536v68H212Z"/>
    </Icon>
  );
});

IconMaterialEqualW100.displayName = 'OnesyIconMaterialEqualW100';

export default IconMaterialEqualW100;
