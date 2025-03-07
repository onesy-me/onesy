import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewKanbanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewKanbanFilled'

      short_name='ViewKanban'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-560q-17 0-28.5 11.5T280-640v320q0 17 11.5 28.5T320-280q17 0 28.5-11.5T360-320v-320q0-17-11.5-28.5T320-680Zm320 0q-17 0-28.5 11.5T600-640v240q0 17 11.5 28.5T640-360q17 0 28.5-11.5T680-400v-240q0-17-11.5-28.5T640-680Zm-160 0q-17 0-28.5 11.5T440-640v120q0 17 11.5 28.5T480-480q17 0 28.5-11.5T520-520v-120q0-17-11.5-28.5T480-680Z"/>
    </Icon>
  );
});

IconMaterialViewKanbanFilled.displayName = 'OnesyIconMaterialViewKanbanFilled';

export default IconMaterialViewKanbanFilled;
