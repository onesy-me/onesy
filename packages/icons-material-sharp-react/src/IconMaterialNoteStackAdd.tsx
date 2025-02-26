import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteStackAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackAdd'

      short_name='NoteStackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-601h600v401L680-80H280Zm80-80h280l160-160v-280H360v440Zm-188-37L67-788l591-105 24 133h-82l-7-40-433 77 40 226v295l-28 5Zm368-23h80v-120h120v-80H620v-120h-80v120H420v80h120v120Zm40-160Z"/>
    </Icon>
  );
});

IconMaterialNoteStackAdd.displayName = 'OnesyIconMaterialNoteStackAdd';

export default IconMaterialNoteStackAdd;
