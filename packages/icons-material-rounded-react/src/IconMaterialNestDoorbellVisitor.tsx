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
      <path d="M720-240q-33 0-56.5-23.5T640-320q0-33 23.5-56.5T720-400q33 0 56.5 23.5T800-320q0 33-23.5 56.5T720-240ZM560-80v-23q0-44 44-70.5T720-200q72 0 116 26.5t44 70.5v23H560Zm-80-480q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0 80Zm-80 160q0 33 23.5 56.5T480-240q33 0 56.5-23.5T560-320q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320Zm80 40q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280ZM280-680q0-85 57.5-142.5T480-880q85 0 142.5 57.5T680-680v160q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-160q0-51-36-85.5T480-800q-48 0-84 34.5T360-680v400q0 42 27 75t66 42q14 3 23.5 14t9.5 25q0 20-15 32t-35 7q-68-15-112-68.5T280-280v-400Z"/>
    </Icon>
  );
});

IconMaterialNestDoorbellVisitor.displayName = 'OnesyIconMaterialNestDoorbellVisitor';

export default IconMaterialNestDoorbellVisitor;
