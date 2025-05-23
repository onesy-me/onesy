import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNeurologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NeurologyFilled'

      short_name='Neurology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M570-120q-13 0-25.5-2.5T520-130v-700q12-5 24.5-7.5T570-840q52 0 89.5 35t40.5 86q59 8 99.5 53T840-560q0 22-5.5 42T818-480q11 18 16.5 38.5T840-400q0 62-40.5 106.5T699-241q-5 50-41.5 85.5T570-120Zm-180 0q-51 0-88-35.5T260-241q-60-8-100-53t-40-106q0-21 5.5-41.5T142-480q-11-18-16.5-38t-5.5-42q0-61 40-105.5t99-52.5q3-51 41-86.5t90-35.5q13 0 25.5 3t24.5 8v699q-12 5-24.5 7.5T390-120Z"/>
    </Icon>
  );
});

IconMaterialNeurologyFilled.displayName = 'OnesyIconMaterialNeurologyFilled';

export default IconMaterialNeurologyFilled;
