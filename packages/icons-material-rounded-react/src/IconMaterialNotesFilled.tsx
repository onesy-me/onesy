import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesFilled'

      short_name='Notes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h400q17 0 28.5 11.5T600-280q0 17-11.5 28.5T560-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/>
    </Icon>
  );
});

IconMaterialNotesFilled.displayName = 'OnesyIconMaterialNotesFilled';

export default IconMaterialNotesFilled;
