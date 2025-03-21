import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTwoWheelerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoWheelerW100Filled'

      short_name='TwoWheeler'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-226q-56 0-95-39t-39-95q0-56 39-95t95-39h38l-74-62H40q-6 0-10-4t-4-10q0-6 4-10t10-4h116l122 72 156-58q5-2 10.5-3t10.5-1h165l-94-120q-5-6-11.5-9t-14.5-3h-60q-6 0-10-4t-4-10q0-6 4-10t10-4h61q14 0 26.5 6t20.5 17l54 69 94-30q8-2 14 2t6 12v19q0 6-4.5 10.5T701-624h-85l116 148q15-10 32.5-14t35.5-4q56 0 95 39t39 95q0 56-39 95t-95 39q-56 0-95-39t-39-95q0-29 11.5-54t32.5-44l-56-72-137 210q-5 6-11 10t-14 4h-71q-5 0-10-1.5t-9-5.5l-108-93v46q0 56-39 95t-95 39Zm0-28q45 0 75.5-30.5T266-360q0-45-30.5-75.5T160-466q-45 0-75.5 30.5T54-360q0 45 30.5 75.5T160-254Zm640 0q45 0 75.5-30.5T906-360q0-45-30.5-75.5T800-466q-45 0-75.5 30.5T694-360q0 45 30.5 75.5T800-254Z"/>
    </Icon>
  );
});

IconMaterialTwoWheelerW100Filled.displayName = 'OnesyIconMaterialTwoWheelerW100Filled';

export default IconMaterialTwoWheelerW100Filled;
