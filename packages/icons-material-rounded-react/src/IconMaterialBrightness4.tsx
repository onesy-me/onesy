import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4'

      short_name='Brightness4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M492-280q83 0 141.5-58.5T692-480q0-83-58.5-141.5T492-680h-16.5q-8.5 0-16.5 2-15 3-19 17.5t7 22.5q38 28 58 69.5t20 88.5q0 48-19 90.5T447-322q-12 8-8.5 22.5T459-283q8 2 16.5 2.5t16.5.5ZM346-160H240q-33 0-56.5-23.5T160-240v-106l-77-78q-11-12-17-26.5T60-480q0-15 6-29.5T83-536l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q12-11 26.5-17t29.5-6q15 0 29.5 6t26.5 17l78 77h106q33 0 56.5 23.5T800-720v106l77 78q11 12 17 26.5t6 29.5q0 15-6 29.5T877-424l-77 78v106q0 33-23.5 56.5T720-160H614l-78 77q-12 11-26.5 17T480-60q-15 0-29.5-6T424-83l-78-77Zm34-80 100 100 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140Zm100-240Z"/>
    </Icon>
  );
});

IconMaterialBrightness4.displayName = 'OnesyIconMaterialBrightness4';

export default IconMaterialBrightness4;
