import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddW100Filled'

      short_name='NoteAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12.44 0 23.72 5T604-810l126 126q8 8 13 19.28 5 11.28 5 23.72v449q0 26-17 43t-43 17H272Zm300-549.6q0 12.58 8.51 21.09T601.6-652H720L572-800v118.4ZM466-386v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106Z"/>
    </Icon>
  );
});

IconMaterialNoteAddW100Filled.displayName = 'OnesyIconMaterialNoteAddW100Filled';

export default IconMaterialNoteAddW100Filled;
