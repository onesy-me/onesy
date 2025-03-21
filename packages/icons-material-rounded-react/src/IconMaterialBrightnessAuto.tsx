import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAuto'

      short_name='BrightnessAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M408-412h146l25 73q3 8 10.5 13.5T606-320q15 0 23.5-12.5T633-359L519-661q-3-9-11-14t-17-5h-22q-9 0-17 5t-11 14L327-360q-5 14 3.5 27t24.5 13q10 0 17.5-5.5T383-340l25-72Zm18-52 52-150h4l52 150H426Zm-80 304H240q-33 0-56.5-23.5T160-240v-106l-77-78q-11-12-17-26.5T60-480q0-15 6-29.5T83-536l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q12-11 26.5-17t29.5-6q15 0 29.5 6t26.5 17l78 77h106q33 0 56.5 23.5T800-720v106l77 78q11 12 17 26.5t6 29.5q0 15-6 29.5T877-424l-77 78v106q0 33-23.5 56.5T720-160H614l-78 77q-12 11-26.5 17T480-60q-15 0-29.5-6T424-83l-78-77Zm34-80 100 100 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140Zm100-240Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAuto.displayName = 'OnesyIconMaterialBrightnessAuto';

export default IconMaterialBrightnessAuto;
