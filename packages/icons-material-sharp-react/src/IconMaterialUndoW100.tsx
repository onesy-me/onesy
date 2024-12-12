import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUndoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoW100'

      short_name='Undo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M301-252v-28h292q62 0 105-43.5T741-429q0-62-43-105t-105-43H266l123 123-20 20-157-157 157-157 20 20-123 123h327q73 0 124.5 51.5T769-429q0 73-51.5 125T593-252H301Z"/>
    </Icon>
  );
});

IconMaterialUndoW100.displayName = 'OnesyIconMaterialUndoW100';

export default IconMaterialUndoW100;
