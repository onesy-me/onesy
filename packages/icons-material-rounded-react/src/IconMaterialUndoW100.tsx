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
      <path d="M315-252q-6 0-10-4t-4-10q0-6 4-10t10-4h278q62 0 105-43.5T741-429q0-62-43-105t-105-43H266l113 113q5 5 5 10t-5 10q-5 5-10.5 4.5T359-444L233-570q-5-5-7-10t-2-11q0-6 2-11t7-10l126-126q5-5 10-5t10 5q5 5 4.5 10.5T379-718L266-605h327q73 0 124.5 51.5T769-429q0 73-51.5 125T593-252H315Z"/>
    </Icon>
  );
});

IconMaterialUndoW100.displayName = 'OnesyIconMaterialUndoW100';

export default IconMaterialUndoW100;
