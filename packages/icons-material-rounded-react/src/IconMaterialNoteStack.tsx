import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteStack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStack'

      short_name='NoteStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-600v440h280v-120q0-17 11.5-28.5T680-320h120v-280H360Zm220 220ZM280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v287q0 16-6 30.5T857-257L703-103q-11 11-25.5 17T647-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q32-6 58 13.5t34 51.5l7 31q5 20-6 32t-26 14q-15 2-28.5-5.5T600-770l-7-30-433 77 60 344q3 17-6 30.5T188-332q-17 3-30-6.5T142-365L81-710Z"/>
    </Icon>
  );
});

IconMaterialNoteStack.displayName = 'OnesyIconMaterialNoteStack';

export default IconMaterialNoteStack;
