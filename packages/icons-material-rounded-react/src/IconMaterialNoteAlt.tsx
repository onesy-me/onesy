import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAlt'

      short_name='NoteAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Zm100-80h48q8 0 15.5-3.5T376-292l228-226-86-86-226 226q-6 6-9 13.5t-3 15.5v49q0 8 6 14t14 6Zm332-266 42-44q6-6 6-14t-6-14l-56-56q-6-6-14-6t-14 6l-44 42 86 86Z"/>
    </Icon>
  );
});

IconMaterialNoteAlt.displayName = 'OnesyIconMaterialNoteAlt';

export default IconMaterialNoteAlt;
