import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteStackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackW100'

      short_name='NoteStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-568v376q0 14 9 23t23 9h248v-130q0-13 8.5-21.5T670-320h130v-248q0-14-9-23t-23-9H392q-14 0-23 9t-9 23Zm220 188ZM332-192v-376q0-25 17.5-42.5T392-628h376q25 0 42.5 17.5T828-568v241q0 12-5 23.5T810-284L676-150q-8 8-19.5 13t-23.5 5H392q-25 0-42.5-17.5T332-192ZM133-692q-5-25 9.5-45t39.5-25l370-65q25-5 45 9.5t25 39.5l5 34q1 7-2.5 11t-8.5 5q-5 1-9.5-1.5T600-739l-7-39q-2-11-12-17.5t-22-4.5l-372 66q-14 2-21 13t-5 25l77 436q1 5-2 10t-8 7q-6 2-11.5-2t-6.5-10l-77-437Z"/>
    </Icon>
  );
});

IconMaterialNoteStackW100.displayName = 'OnesyIconMaterialNoteStackW100';

export default IconMaterialNoteStackW100;
