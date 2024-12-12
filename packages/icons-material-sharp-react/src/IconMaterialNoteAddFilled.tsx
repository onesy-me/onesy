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
      <path d="M440-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z"/>
    </Icon>
  );
});

IconMaterialNoteAddFilled.displayName = 'OnesyIconMaterialNoteAddFilled';

export default IconMaterialNoteAddFilled;
