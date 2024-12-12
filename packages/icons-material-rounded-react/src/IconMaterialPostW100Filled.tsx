import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPostW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostW100Filled'

      short_name='Post'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-172H232q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172ZM228-402h504v-34H228v34Zm0 104h504v-28H228v28Z"/>
    </Icon>
  );
});

IconMaterialPostW100Filled.displayName = 'OnesyIconMaterialPostW100Filled';

export default IconMaterialPostW100Filled;
