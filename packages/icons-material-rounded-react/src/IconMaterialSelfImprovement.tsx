import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelfImprovement = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfImprovement'

      short_name='SelfImprovement'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-160q-30 0-51-21t-21-51q0-21 12-39.5t32-26.5l156-62v-90q-48 55-108 87.5T162-322q-17 2-29.5-9.5T120-360q0-17 11-29t28-14q55-8 101-34t84-71l54-64q12-14 28-21t34-7h40q18 0 34 7t28 21l54 64q38 45 84 71t101 34q17 2 28 14t11 29q0 17-12.5 28.5T798-322q-70-8-130-40.5T560-450v90l156 62q20 8 32 26.5t12 39.5q0 30-21 51t-51 21H400v-20q0-26 17-43t43-17h120q9 0 14.5-5.5T600-260q0-9-5.5-14.5T580-280H460q-42 0-71 29t-29 71v20h-88Zm208-480q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
    </Icon>
  );
});

IconMaterialSelfImprovement.displayName = 'OnesyIconMaterialSelfImprovement';

export default IconMaterialSelfImprovement;
