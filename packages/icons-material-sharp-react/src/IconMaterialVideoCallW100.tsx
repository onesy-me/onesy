import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallW100'

      short_name='VideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M157-212v-536h536v248l110-110v260L693-460v248H157Zm28-28h480v-480H185v480Zm0 0v-480 480Zm226-106h28v-120h120v-28H439v-120h-28v120H291v28h120v120Z"/>
    </Icon>
  );
});

IconMaterialVideoCallW100.displayName = 'OnesyIconMaterialVideoCallW100';

export default IconMaterialVideoCallW100;
