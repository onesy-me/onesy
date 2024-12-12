import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneEnabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledFilled'

      short_name='PhoneEnabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M162-120h-42v-235l200-41 116 116q40-23 74.5-49.5T574-385q31-30 58-65t49-74L567-639l37-201h236v42q0 126-54 248T632-328Q532-228 409.5-174T162-120Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledFilled.displayName = 'OnesyIconMaterialPhoneEnabledFilled';

export default IconMaterialPhoneEnabledFilled;
