import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenstrualHealthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenstrualHealthW100Filled'

      short_name='MenstrualHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-756v276q0 109 59.5 195T345-159q-48-32-77.5-85T238-360q0-46 23.5-110T328-609L132-756Zm348-26q-97 117-155.5 232T266-360q0 89 62.5 151.5T480-146q89 0 151.5-62.5T694-360q0-75-58.5-190.5T480-782Zm348 26L632-609q42 74 66 138.5T722-360q0 63-29.5 116T615-159q94-40 153.5-126T828-480v-276Z"/>
    </Icon>
  );
});

IconMaterialMenstrualHealthW100Filled.displayName = 'OnesyIconMaterialMenstrualHealthW100Filled';

export default IconMaterialMenstrualHealthW100Filled;
