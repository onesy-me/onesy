import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDoorbellVisitor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDoorbellVisitor'

      short_name='NestDoorbellVisitor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-240q-33 0-56.5-23.5T640-320q0-33 23.5-56.5T720-400q33 0 56.5 23.5T800-320q0 33-23.5 56.5T720-240ZM560-80v-23q0-44 44-70.5T720-200q72 0 116 26.5t44 70.5v23H560Zm120-400h-80v-200q0-51-36-85.5T480-800q-48 0-84 34.5T360-680v400q0 48 36 84t84 36v80q-85 0-142.5-57.5T280-280v-400q0-85 57.5-142.5T480-880q85 0 142.5 57.5T680-680v200Zm-200-80q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0 80Zm-80 160q0 33 23.5 56.5T480-240q33 0 56.5-23.5T560-320q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320Zm80 40q-18 0-29-12.5T440-320q0-15 11-27.5t29-12.5q18 0 29 11t11 29q0 15-11 27.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialNestDoorbellVisitor.displayName = 'OnesyIconMaterialNestDoorbellVisitor';

export default IconMaterialNestDoorbellVisitor;
