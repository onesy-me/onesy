import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBikeScooterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooterFilled'

      short_name='BikeScooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-200v-80h164q11-68 56.5-119T332-470l-58-250H160q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800h114q27 0 49.5 17.5T352-738l78 338h-30q-66 0-113 47t-47 113v40H0Zm400 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm360-120q-72 0-126.5-44.5T564-400h-94l-18-80h112q5-23 13.5-43t22.5-37H434l-18-80h226l-44-120h-64q-17 0-28.5-11.5T494-800q0-17 11.5-28.5T534-840h64q26 0 46.5 14t29.5 38l54 146h32q83 0 141.5 58.5T960-442q0 85-58.5 143.5T760-240Zm-78-292 24 68q5 16 20.5 23t31.5 1q16-6 23-21t1-31l-26-68-74 28Z"/>
    </Icon>
  );
});

IconMaterialBikeScooterFilled.displayName = 'OnesyIconMaterialBikeScooterFilled';

export default IconMaterialBikeScooterFilled;
