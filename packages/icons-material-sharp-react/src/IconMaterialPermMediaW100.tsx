import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermMediaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaW100'

      short_name='PermMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-184v-480h28v452h628v28H92Zm108-108v-536h258l80 80h330v456H200Zm28-28h612v-400H527l-80-80H228v480Zm0 0v-480 480Zm156-120h332L614-576 514-452l-64-74-66 86Z"/>
    </Icon>
  );
});

IconMaterialPermMediaW100.displayName = 'OnesyIconMaterialPermMediaW100';

export default IconMaterialPermMediaW100;
