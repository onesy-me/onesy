import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsCarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCarW100Filled'

      short_name='DirectionsCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-252v66q0 5.83-4.12 9.92-4.12 4.08-10 4.08t-9.88-4.08q-4-4.09-4-9.92v-276q0-5 .5-10t2.27-10.23L241-668q5.89-17.78 21.37-28.89Q277.84-708 297-708h366q19.16 0 34.63 11.11Q713.11-685.78 719-668l66.23 185.77Q787-477 787.5-472t.5 10v276q0 5.83-4.12 9.92-4.12 4.08-10 4.08t-9.88-4.08q-4-4.09-4-9.92v-66H200Zm12-248h536l-56-159q-4-10-12-15.5t-19-5.5H299q-11 0-19 5.5T268-659l-56 159Zm84.24 164q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm368 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsCarW100Filled.displayName = 'OnesyIconMaterialDirectionsCarW100Filled';

export default IconMaterialDirectionsCarW100Filled;
