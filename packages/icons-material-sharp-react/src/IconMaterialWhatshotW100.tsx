import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhatshotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotW100'

      short_name='Whatshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-51 0-102.5-17T278-198l20-20q42 29 88 43.5t94 14.5q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227h-28q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132ZM182-301l138-139 120 100 217-217v142h28v-190H495v28h140L440-380 320-480 167-328q4 7 7 12.5t8 14.5Zm298-179Z"/>
    </Icon>
  );
});

IconMaterialWhatshotW100.displayName = 'OnesyIconMaterialWhatshotW100';

export default IconMaterialWhatshotW100;
