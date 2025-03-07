import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPostW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostW100'

      short_name='Post'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-172H232q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172Zm4-126H228v76h504v-76Zm-504-28h504v-76H228v76Zm0-110h504v-296H228v296Zm0 138v76-76Zm0-28v-76 76Zm0-110v-296 296Zm0 34v-34 34Zm0 104v-28 28Z"/>
    </Icon>
  );
});

IconMaterialPostW100.displayName = 'OnesyIconMaterialPostW100';

export default IconMaterialPostW100;
