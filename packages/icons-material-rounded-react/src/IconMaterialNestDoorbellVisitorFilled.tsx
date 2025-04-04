import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDoorbellVisitorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDoorbellVisitorFilled'

      short_name='NestDoorbellVisitor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-141.5-58.5T280-280v-400q0-83 58.5-141.5T480-880q83 0 141.5 58.5T680-680v200H560q-33 0-56.5 23.5T480-400q-33 0-56.5 23.5T400-320q0 32 23.5 55t56.5 25v160Zm80 0v-23q0-52 50-75t110-23q60 0 110 23t50 75v23H560Zm160-160q-33 0-56.5-23.5T640-320q0-33 23.5-56.5T720-400q33 0 56.5 23.5T800-320q0 33-23.5 56.5T720-240Zm-240-40q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm0-280q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Z"/>
    </Icon>
  );
});

IconMaterialNestDoorbellVisitorFilled.displayName = 'OnesyIconMaterialNestDoorbellVisitorFilled';

export default IconMaterialNestDoorbellVisitorFilled;
