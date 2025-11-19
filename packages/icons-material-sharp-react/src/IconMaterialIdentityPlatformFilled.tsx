import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIdentityPlatformFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IdentityPlatformFilled'

      short_name='IdentityPlatform'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-153 224-137q-50-35-107-52.5T480-360q-60 0-117.5 17.5T254-291l226 138Zm0-287q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 380L120-280v-400l360-220 360 220v400L480-60Z"/>
    </Icon>
  );
});

IconMaterialIdentityPlatformFilled.displayName = 'OnesyIconMaterialIdentityPlatformFilled';

export default IconMaterialIdentityPlatformFilled;
