import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddNotes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddNotes'

      short_name='AddNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v348q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H120Zm80-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Z"/>
    </Icon>
  );
});

IconMaterialAddNotes.displayName = 'OnesyIconMaterialAddNotes';

export default IconMaterialAddNotes;
