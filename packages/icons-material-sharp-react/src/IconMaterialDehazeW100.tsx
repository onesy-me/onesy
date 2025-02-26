import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDehazeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeW100'

      short_name='Dehaze'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-680v-28h616v28H172Zm0 428v-28h616v28H172Zm0-214v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialDehazeW100.displayName = 'OnesyIconMaterialDehazeW100';

export default IconMaterialDehazeW100;
