import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSprinklerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SprinklerW100Filled'

      short_name='Sprinkler'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-492q-11 0-19.5-8.5T452-520q0-11 8.5-19.5T480-548q11 0 19.5 8.5T508-520q0 11-8.5 19.5T480-492Zm0-160q-11 0-19.5-8.5T452-680q0-11 8.5-19.5T480-708q11 0 19.5 8.5T508-680q0 11-8.5 19.5T480-652Zm0-160q-11 0-19.5-8.5T452-840q0-11 8.5-19.5T480-868q11 0 19.5 8.5T508-840q0 11-8.5 19.5T480-812Zm120 400q-11 0-19.5-8.5T572-440q0-11 8.5-19.5T600-468q11 0 19.5 8.5T628-440q0 11-8.5 19.5T600-412Zm113-114q-11 0-19.5-8.5T685-554q0-11 8.5-19.5T713-582q11 0 19.5 8.5T741-554q0 11-8.5 19.5T713-526Zm113-112q-11 0-19.5-8.5T798-666q0-11 8.5-19.5T826-694q11 0 19.5 8.5T854-666q0 11-8.5 19.5T826-638ZM360-412q-11 0-19.5-8.5T332-440q0-11 8.5-19.5T360-468q11 0 19.5 8.5T388-440q0 11-8.5 19.5T360-412ZM247-526q-11 0-19.5-8.5T219-554q0-11 8.5-19.5T247-582q11 0 19.5 8.5T275-554q0 11-8.5 19.5T247-526ZM134-638q-11 0-19.5-8.5T106-666q0-11 8.5-19.5T134-694q11 0 19.5 8.5T162-666q0 11-8.5 19.5T134-638Zm332 532v-160H306v-28h348v28H494v160h-28Z"/>
    </Icon>
  );
});

IconMaterialSprinklerW100Filled.displayName = 'OnesyIconMaterialSprinklerW100Filled';

export default IconMaterialSprinklerW100Filled;
