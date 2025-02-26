import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4gMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledata'

      short_name='4gMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-120H120v-280h80v200h80v-200h80v200h80v80h-80v120h-80Zm200 0v-400h360v80H560v240h200v-80H660v-80h180v240H480Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledata.displayName = 'OnesyIconMaterial4gMobiledata';

export default IconMaterial4gMobiledata;
