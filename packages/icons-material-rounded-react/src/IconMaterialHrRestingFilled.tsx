import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHrRestingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HrRestingFilled'

      short_name='HrResting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm57-384q-29-27-42.5-64T161-644q0-81 55.5-138.5T352-840q36 0 69 13t59 38q26-25 59-38t69-13q81 0 136.5 58T800-643q0 39-14.5 74.5T744-505L535-302q-11 11-25 16.5t-30 5.5q-16 0-30-5.5T425-302L217-504Z"/>
    </Icon>
  );
});

IconMaterialHrRestingFilled.displayName = 'OnesyIconMaterialHrRestingFilled';

export default IconMaterialHrRestingFilled;
