import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddW100'

      short_name='NoteAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-266h28v-120h120v-28H494v-120h-28v120H346v28h120v120ZM212-132v-696h374l162 162v534H212Zm360-520v-148H240v640h480v-492H572ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialNoteAddW100.displayName = 'OnesyIconMaterialNoteAddW100';

export default IconMaterialNoteAddW100;
