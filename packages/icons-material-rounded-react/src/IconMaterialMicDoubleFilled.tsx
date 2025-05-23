import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicDoubleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicDoubleFilled'

      short_name='MicDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120q-17 0-28.5-11.5T280-160v-83q-93-13-157.5-77.5T44-475q-3-17 8-31t28-14q17 0 29 13.5t16 31.5q15 67 69 111t126 44h10q5 0 10-1 13 20 28 37.5t32 32.5q-10 3-19.5 4.5T360-243v83q0 17-11.5 28.5T320-120Zm320-280q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-340-2q-43-8-71.5-40.5T200-520v-240q0-50 35-85t85-35q50 0 85 35t35 85v167q-10-4-19.5-5.5T400-600q-50 0-83.5 35T283-482q0 19 5.5 40.5T300-402Zm340 82q72 0 126-44t69-111q4-18 16-31.5t29-13.5q17 0 28 14t8 31q-14 90-78.5 154.5T680-243v83q0 17-11.5 28.5T640-120q-17 0-28.5-11.5T600-160v-83q-93-13-157.5-77.5T364-475q-3-17 8-31t28-14q17 0 29 13.5t16 31.5q15 67 69 111t126 44Z"/>
    </Icon>
  );
});

IconMaterialMicDoubleFilled.displayName = 'OnesyIconMaterialMicDoubleFilled';

export default IconMaterialMicDoubleFilled;
