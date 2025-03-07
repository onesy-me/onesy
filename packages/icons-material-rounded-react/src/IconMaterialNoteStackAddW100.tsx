import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteStackAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackAddW100'

      short_name='NoteStackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-192v-376q0-25.06 17.5-42.53Q367-628 392-628h376q24.75 0 42.38 17.62Q828-592.75 828-568v241q0 12.44-5 23.72T810-284L676-150q-8 8-19.28 13-11.28 5-23.72 5H392q-24.75 0-42.37-17.63Q332-167.25 332-192ZM133-692q-5-25 9.45-45.21T182-762l370-65q25-5 45 9.5t25 39.5l5 34q1 7-2.57 11.15-3.57 4.16-8.43 4.85-5 1-9.64-1.57-4.64-2.57-6.36-9.43l-7-39q-2-11-12-17.5t-22-4.5l-372 66q-14 2-21 13t-5 25l77 436q1 5-2 10t-8.5 7q-5.5 2-11-2t-6.5-10l-77-437Zm227 124v376q0 14 9 23t23 9h248l160-160v-248q0-14-9-23t-23-9H392q-14 0-23 9t-9 23Zm220 188Zm-14 14v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H594v-106q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v106H460q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106Z"/>
    </Icon>
  );
});

IconMaterialNoteStackAddW100.displayName = 'OnesyIconMaterialNoteStackAddW100';

export default IconMaterialNoteStackAddW100;
