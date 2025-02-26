import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLteMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataW100Filled'

      short_name='LteMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-346v-268h28v240h120v28H220Zm258 0v-240h-80v-28h188v28h-80v240h-28Zm188 0v-268h148v28H694v92h120v28H694v92h120v28H666Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataW100Filled.displayName = 'OnesyIconMaterialLteMobiledataW100Filled';

export default IconMaterialLteMobiledataW100Filled;
