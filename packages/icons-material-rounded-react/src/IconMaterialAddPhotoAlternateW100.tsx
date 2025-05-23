import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddPhotoAlternateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateW100'

      short_name='AddPhotoAlternate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172q-24.75 0-42.37-17.63Q152-207.25 152-232v-496q0-24.75 17.63-42.38Q187.25-788 212-788h314q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H212q-14 0-23 9t-9 23v496q0 14 9 23t23 9h496q14 0 23-9t9-23v-314q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v314q0 24.75-17.62 42.37Q732.75-172 708-172H212Zm488-548h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-66ZM428-318l-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-1.75 16t12.75 8h272q8.5 0 12.75-8t-.75-16l-72-97q-5-6-12-6t-12.07 6.26L428-318Zm32-162Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateW100.displayName = 'OnesyIconMaterialAddPhotoAlternateW100';

export default IconMaterialAddPhotoAlternateW100;
