import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltW100Filled'

      short_name='NoteAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h194q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h194q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm248-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM335-320h1q5.57 0 10.78-2 5.22-2 10.2-6.98L584-554l-30-30-225 225q-5 5-7 10.22-2 5.21-2 10.78v3q0 6 4.5 10.5T335-320Zm269-254 30-30q6-6 6-14t-6-14l-2-2q-6-6-14-6t-14 6l-30 30 30 30Z"/>
    </Icon>
  );
});

IconMaterialNoteAltW100Filled.displayName = 'OnesyIconMaterialNoteAltW100Filled';

export default IconMaterialNoteAltW100Filled;
