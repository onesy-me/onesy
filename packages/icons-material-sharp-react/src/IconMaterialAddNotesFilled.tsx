import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddNotesFilled'

      short_name='AddNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-600h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Zm-580 0v-720h720v348q-29-14-58.5-21t-61.5-7q-11 0-20.5.5T680-517v-3H280v80h244q-17 17-31.5 37T467-360H280v80h163q-2 10-2.5 19.5T440-240q0 33 6 61.5t21 58.5H120Z"/>
    </Icon>
  );
});

IconMaterialAddNotesFilled.displayName = 'OnesyIconMaterialAddNotesFilled';

export default IconMaterialAddNotesFilled;
