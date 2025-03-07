import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllW100Filled'

      short_name='BorderAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M554-172q-24.75 0-42.37-17.63Q494-207.25 494-232v-174q0-24.75 17.63-42.38Q529.25-466 554-466h174q24.75 0 42.38 17.62Q788-430.75 788-406v174q0 24.75-17.62 42.37Q752.75-172 728-172H554Zm0-322q-24.75 0-42.37-17.63Q494-529.25 494-554v-174q0-24.75 17.63-42.38Q529.25-788 554-788h174q24.75 0 42.38 17.62Q788-752.75 788-728v174q0 24.75-17.62 42.37Q752.75-494 728-494H554Zm-322 0q-24.75 0-42.37-17.63Q172-529.25 172-554v-174q0-24.75 17.63-42.38Q207.25-788 232-788h174q24.75 0 42.38 17.62Q466-752.75 466-728v174q0 24.75-17.62 42.37Q430.75-494 406-494H232Zm0 322q-24.75 0-42.37-17.63Q172-207.25 172-232v-174q0-24.75 17.63-42.38Q207.25-466 232-466h174q24.75 0 42.38 17.62Q466-430.75 466-406v174q0 24.75-17.62 42.37Q430.75-172 406-172H232Z"/>
    </Icon>
  );
});

IconMaterialBorderAllW100Filled.displayName = 'OnesyIconMaterialBorderAllW100Filled';

export default IconMaterialBorderAllW100Filled;
