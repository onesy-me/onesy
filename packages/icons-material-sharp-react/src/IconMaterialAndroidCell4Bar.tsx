import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCell4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCell4Bar'

      short_name='AndroidCell4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M60-160v-320h120v320H60Zm240 0v-420h120v420H300Zm240 0v-520h120v520H540Zm240 0v-640h120v640H780Z"/>
    </Icon>
  );
});

IconMaterialAndroidCell4Bar.displayName = 'OnesyIconMaterialAndroidCell4Bar';

export default IconMaterialAndroidCell4Bar;
