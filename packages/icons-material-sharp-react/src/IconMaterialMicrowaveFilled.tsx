import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicrowaveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveFilled'

      short_name='Microwave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h400v-480H160v480Zm520-360h80v-80h-80v80Zm40 160q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520q-17 0-28.5 11.5T680-480q0 17 11.5 28.5T720-440Zm0 160q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Zm-310-40q-24 0-41.5-9T338-346q-10-7-16-10.5t-12-3.5q-11 0-22 9t-16 15l-57-56q11-12 35.5-30t59.5-18q24 0 41.5 9.5T382-413q9 6 16 9.5t12 3.5q11 0 22-9t16-15l57 56q-11 12-35.5 30T410-320Zm0-200q-24 0-41.5-9T338-546q-10-7-16-10.5t-12-3.5q-11 0-22 9t-16 15l-57-56q11-12 35.5-30t59.5-18q24 0 41.5 9.5T382-613q9 6 16 9.5t12 3.5q11 0 22-9t16-15l57 56q-11 12-35.5 30T410-520Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveFilled.displayName = 'OnesyIconMaterialMicrowaveFilled';

export default IconMaterialMicrowaveFilled;
