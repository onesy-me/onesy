import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRedoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoFilled'

      short_name='Redo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"/>
    </Icon>
  );
});

IconMaterialRedoFilled.displayName = 'OnesyIconMaterialRedoFilled';

export default IconMaterialRedoFilled;
