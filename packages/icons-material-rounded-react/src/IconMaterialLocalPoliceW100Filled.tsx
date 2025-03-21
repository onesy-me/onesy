import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPoliceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceW100Filled'

      short_name='LocalPolice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-446 53 41q5 4 9.5.5t2.5-8.5l-21-67 61-47q5-3 2.5-8t-7.5-5h-70l-23-70q-2-5-7-5t-7 5l-23 70h-70q-5 0-7.5 5t2.5 8l59 47-21 69q-2 5 2.5 8.5t9.5-.5l55-43Zm0 307q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceW100Filled.displayName = 'OnesyIconMaterialLocalPoliceW100Filled';

export default IconMaterialLocalPoliceW100Filled;
