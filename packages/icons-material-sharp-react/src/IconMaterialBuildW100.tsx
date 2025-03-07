import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBuildW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildW100'

      short_name='Build'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M740-122 452-410q-23 11-47 17.5t-51 6.5q-89 0-151.5-62.5T140-600q0-23 4.5-44.5T158-686l140 138 108-108-136-138q20-9 40.5-14.5T354-814q89 0 151.5 62.5T568-600q0 29-6 53t-18 45l288 288-92 92Zm0-40 52-52-283-283q15-22 23-48.5t8-54.5q0-77-62-139t-160-45l128 128-148 148-128-128q-14 109 49 165.5T354-414q27 0 53.5-7.5T457-445l283 283ZM472-484Z"/>
    </Icon>
  );
});

IconMaterialBuildW100.displayName = 'OnesyIconMaterialBuildW100';

export default IconMaterialBuildW100;
