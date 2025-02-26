import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUndo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Undo'

      short_name='Undo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/>
    </Icon>
  );
});

IconMaterialUndo.displayName = 'OnesyIconMaterialUndo';

export default IconMaterialUndo;
