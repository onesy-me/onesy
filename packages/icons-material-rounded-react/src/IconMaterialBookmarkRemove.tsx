import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemove'

      short_name='BookmarkRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-680q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h160q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H640ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h200q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760H280v518l200-86 200 86v-238q0-17 11.5-28.5T720-520q17 0 28.5 11.5T760-480v239q0 43-36 66.5t-76 6.5l-168-72Zm0-520H280h240-40Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemove.displayName = 'OnesyIconMaterialBookmarkRemove';

export default IconMaterialBookmarkRemove;
