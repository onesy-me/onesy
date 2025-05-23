import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddFilled'

      short_name='NoteAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Zm-80 280v80q0 17 11.5 28.5T480-240q17 0 28.5-11.5T520-280v-80h80q17 0 28.5-11.5T640-400q0-17-11.5-28.5T600-440h-80v-80q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v80h-80q-17 0-28.5 11.5T320-400q0 17 11.5 28.5T360-360h80Z"/>
    </Icon>
  );
});

IconMaterialNoteAddFilled.displayName = 'OnesyIconMaterialNoteAddFilled';

export default IconMaterialNoteAddFilled;
