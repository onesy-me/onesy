import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchema = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Schema'

      short_name='Schema'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80q0-33 23.5-56.5T240-280h20v-80h-20q-33 0-56.5-23.5T160-440v-80q0-33 23.5-56.5T240-600h20v-80h-20q-33 0-56.5-23.5T160-760v-80q0-33 23.5-56.5T240-920h120q33 0 56.5 23.5T440-840v80q0 33-23.5 56.5T360-680h-20v80h20q33 0 56.5 23.5T440-520h120q0-33 23.5-56.5T640-600h120q33 0 56.5 23.5T840-520v80q0 33-23.5 56.5T760-360H640q-33 0-56.5-23.5T560-440H440q0 33-23.5 56.5T360-360h-20v80h20q33 0 56.5 23.5T440-200v80q0 33-23.5 56.5T360-40H240q-33 0-56.5-23.5T160-120Zm80 0h120v-80H240v80Zm0-320h120v-80H240v80Zm400 0h120v-80H640v80ZM240-760h120v-80H240v80Zm60-40Zm0 320Zm400 0ZM300-160Z"/>
    </Icon>
  );
});

IconMaterialSchema.displayName = 'OnesyIconMaterialSchema';

export default IconMaterialSchema;
