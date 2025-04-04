import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLogoDevW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoDevW100Filled'

      short_name='LogoDev'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M323-376q21 0 35.5-15t14.5-36v-107q0-21-14.5-35.5T323-584h-59q-6 0-10 4t-4 10v180q0 6 4 10t10 4h59Zm-45-28v-152h45q11 0 16.5 5.5T345-534v107q0 11-5.5 17t-16.5 6h-45Zm165 28h66q6 0 10-4t4-10q0-6-4-10t-10-4h-66v-62h43q6 0 10-4t4-10q0-6-4-10t-10-4h-43v-62h66q6 0 10-4t4-10q0-6-4-10t-10-4h-66q-11 0-19.5 8.5T415-556v152q0 11 8.5 19.5T443-376Zm193 0q11 0 19-8t11-19l45-163q2-7-2-12.5t-12-5.5q-5 0-8.5 3t-5.5 8l-47 168-49-169q-2-5-5.5-7.5T573-584q-8 0-12 5.5t-2 12.5l46 163q3 11 11.5 19t19.5 8ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialLogoDevW100Filled.displayName = 'OnesyIconMaterialLogoDevW100Filled';

export default IconMaterialLogoDevW100Filled;
