import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStickyNote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote'

      short_name='StickyNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120H120v-720h720v520L640-120Zm-40-80v-160h160v-400H200v560h400ZM440-320h80v-240h120v-80H320v80h120v240Zm160 120Zm-400 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialStickyNote.displayName = 'OnesyIconMaterialStickyNote';

export default IconMaterialStickyNote;
