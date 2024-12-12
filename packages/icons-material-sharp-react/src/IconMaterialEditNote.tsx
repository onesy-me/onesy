import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNote'

      short_name='EditNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l263-262 123 122-263 263H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
});

IconMaterialEditNote.displayName = 'OnesyIconMaterialEditNote';

export default IconMaterialEditNote;
