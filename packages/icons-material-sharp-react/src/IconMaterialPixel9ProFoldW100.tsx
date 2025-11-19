import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPixel9ProFoldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pixel9ProFoldW100'

      short_name='Pixel9ProFold'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-616h696v616H132Zm348-28h320v-560H480v560Zm-80-306v-28H212v28h188Zm240-146q11 0 19.5-8.5T668-680q0-11-8.5-19.5T640-708q-11 0-19.5 8.5T612-680q0 11 8.5 19.5T640-652Zm-240-14v-28H212v28h188Z"/>
    </Icon>
  );
});

IconMaterialPixel9ProFoldW100.displayName = 'OnesyIconMaterialPixel9ProFoldW100';

export default IconMaterialPixel9ProFoldW100;
