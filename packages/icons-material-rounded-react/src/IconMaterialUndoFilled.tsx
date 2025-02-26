import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUndoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoFilled'

      short_name='Undo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200q-17 0-28.5-11.5T280-240q0-17 11.5-28.5T320-280h244q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11L188-572q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l144-144q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H320Z"/>
    </Icon>
  );
});

IconMaterialUndoFilled.displayName = 'OnesyIconMaterialUndoFilled';

export default IconMaterialUndoFilled;
