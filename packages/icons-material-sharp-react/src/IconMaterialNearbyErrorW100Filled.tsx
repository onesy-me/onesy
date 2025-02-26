import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearbyErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyErrorW100Filled'

      short_name='NearbyError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-240v-294h28v294h-28Zm13.65 90q-8.65 0-14.15-5.65t-5.5-14q0-8.35 5.65-14.35t14-6q8.35 0 14.35 5.85t6 14.5q0 8.65-5.85 14.15t-14.5 5.5ZM448-142 110-480l338-338 226 224v52L448-768 160-480l288 288 226-226v52L448-142Zm0-208L318-480l130-130 130 130-130 130Z"/>
    </Icon>
  );
});

IconMaterialNearbyErrorW100Filled.displayName = 'OnesyIconMaterialNearbyErrorW100Filled';

export default IconMaterialNearbyErrorW100Filled;
