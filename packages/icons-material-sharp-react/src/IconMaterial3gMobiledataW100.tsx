import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3gMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataW100'

      short_name='3gMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-306v-28h200v-132H146v-28h200v-132H146v-28h228v348H146Zm668-188v188H506v-348h308v28H534v292h252v-132H686v-28h128Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataW100.displayName = 'OnesyIconMaterial3gMobiledataW100';

export default IconMaterial3gMobiledataW100;
