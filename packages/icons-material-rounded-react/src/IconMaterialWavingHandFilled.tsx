import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWavingHandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHandFilled'

      short_name='WavingHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-39q-17 0-28.5-12T640-80q0-17 11.5-28.5T680-120q66 0 113-47t47-113q0-17 12-29t29-12q17 0 28.5 12t11.5 29q0 100-70.5 170.5T680-39ZM80-640q-17 0-29-11.5T39-680q0-100 70.5-170.5T280-921q17 0 29 11.5t12 28.5q0 17-12 29t-29 12q-66 0-113 47t-47 113q0 17-11.5 28.5T80-640Zm132 429q-91-91-91-219t91-219l58-59q5-5 12-5t12 5q29 29 29 70.5T294-567l-14 14q-12 12-12 28.5t12 28.5l36 36q26 26 26 63t-26 63q-9 9-9 21.5t9 21.5q9 9 21.5 9t21.5-9q44-44 44-105.5T358-503l-22-22q26-26 37-58.5t9-66.5l179-179q12-12 28.5-12t28.5 12q12 12 12 28.5T618-772L431-585l42 42 241-240q12-12 28-12t28 12q12 12 12 28t-12 28L530-486l42 42 212-212q12-12 28.5-12t28.5 12q12 12 12 28.5T841-599L629-387l42 42 162-162q12-12 28.5-12t28.5 12q12 12 12 28.5T890-450L650-211q-91 91-219 91t-219-91Z"/>
    </Icon>
  );
});

IconMaterialWavingHandFilled.displayName = 'OnesyIconMaterialWavingHandFilled';

export default IconMaterialWavingHandFilled;
