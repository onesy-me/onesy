import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermMediaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaW100Filled'

      short_name='PermMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-184v-480h28v452h628v28H92Zm108-108v-536h258l80 80h330v456H200Zm184-148h332L614-576 514-452l-64-74-66 86Z"/>
    </Icon>
  );
});

IconMaterialPermMediaW100Filled.displayName = 'OnesyIconMaterialPermMediaW100Filled';

export default IconMaterialPermMediaW100Filled;
