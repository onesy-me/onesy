import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAdd'

      short_name='NoteAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360v80q0 17 11.5 28.5T480-240q17 0 28.5-11.5T520-280v-80h80q17 0 28.5-11.5T640-400q0-17-11.5-28.5T600-440h-80v-80q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v80h-80q-17 0-28.5 11.5T320-400q0 17 11.5 28.5T360-360h80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-440H560q-17 0-28.5-11.5T520-640ZM240-800v200-200 640-640Z"/>
    </Icon>
  );
});

IconMaterialNoteAdd.displayName = 'OnesyIconMaterialNoteAdd';

export default IconMaterialNoteAdd;
