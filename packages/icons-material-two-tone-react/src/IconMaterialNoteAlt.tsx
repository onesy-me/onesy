import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAlt'

      short_name='NoteAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M5,19h14V5H5V19z M14.73,7.15c0.2-0.2,0.51-0.2,0.71,0l1.41,1.41c0.2,0.2,0.2,0.51,0,0.71l-1.06,1.06 l-2.12-2.12L14.73,7.15z M7,14.86l5.96-5.96l2.12,2.12L9.1,17H7V14.86z" opacity=".3"/><path d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5 C21,3.9,20.1,3,19,3z M12,2.75c0.41,0,0.75,0.34,0.75,0.75S12.41,4.25,12,4.25s-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75z M19,19H5 V5h14V19z"/><polygon points="15.08,11.03 12.96,8.91 7,14.86 7,17 9.1,17"/><path d="M16.85,9.27c0.2-0.2,0.2-0.51,0-0.71l-1.41-1.41c-0.2-0.2-0.51-0.2-0.71,0l-1.06,1.06l2.12,2.12L16.85,9.27z"/></g></g>
    </Icon>
  );
});

IconMaterialNoteAlt.displayName = 'OnesyIconMaterialNoteAlt';

export default IconMaterialNoteAlt;
