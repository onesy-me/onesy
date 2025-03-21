import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumerusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusFilled'

      short_name='Humerus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M362-80q-51 0-86.5-35T240-201q0-24 9.5-46t26.5-39l85-83v-151q-1-14-12-23t-23-17q-45-34-65.5-70T240-710q0-71 52.5-120.5T420-880q17 0 32.5 4.5T480-865q13 5 21.5 10t17.5 5q20 0 40-14 11-6 23-11t27-5q48 0 79.5 33.5T720-765q0 23-9.5 46.5T682-676l-81 83v223l84 84q17 17 26 39t9 46q0 51-34.5 86T600-80q-24 0-46-9t-39-26q-7-7-15.5-10.5T481-129q-10 0-18.5 3.5T447-115q-17 17-39 26t-46 9Z"/>
    </Icon>
  );
});

IconMaterialHumerusFilled.displayName = 'OnesyIconMaterialHumerusFilled';

export default IconMaterialHumerusFilled;
