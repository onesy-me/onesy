import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPasswordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasswordW100Filled'

      short_name='Password'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-226v-28h748v28H106Zm14-238-24-14 40-70H56v-28h80l-40-68 24-14 40 68 40-68 24 14-40 68h80v28h-80l40 70-24 14-40-70-40 70Zm320 0-24-14 40-70h-80v-28h80l-40-68 24-14 40 68 40-68 24 14-40 68h80v28h-80l40 70-24 14-40-70-40 70Zm320 0-24-14 40-70h-80v-28h80l-40-68 24-14 40 68 40-68 24 14-40 68h80v28h-80l40 70-24 14-40-70-40 70Z"/>
    </Icon>
  );
});

IconMaterialPasswordW100Filled.displayName = 'OnesyIconMaterialPasswordW100Filled';

export default IconMaterialPasswordW100Filled;
