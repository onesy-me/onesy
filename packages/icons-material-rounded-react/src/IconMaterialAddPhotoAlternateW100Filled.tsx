import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddPhotoAlternateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateW100Filled'

      short_name='AddPhotoAlternate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M713.96-640q-5.96 0-9.96-4.03-4-4.02-4-9.97v-66h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM328-306h272q8.5 0 12.75-8t-.75-16l-72-97q-5-6-12-6t-12.07 6.26L428-318l-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-1.75 16t12.75 8ZM212-172q-24.75 0-42.37-17.63Q152-207.25 152-232v-496q0-24.75 17.63-42.38Q187.25-788 212-788h314q5.95 0 9.97 4.03Q540-779.95 540-774v104q0 12.75 8.63 21.37Q557.25-640 570-640h50v50q0 12.75 8.63 21.37Q637.25-560 650-560h104q5.95 0 9.97 4.03Q768-551.95 768-546v314q0 24.75-17.62 42.37Q732.75-172 708-172H212Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateW100Filled.displayName = 'OnesyIconMaterialAddPhotoAlternateW100Filled';

export default IconMaterialAddPhotoAlternateW100Filled;
