import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditDocumentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentFilled'

      short_name='EditDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v63q0 11-6.5 19T777-513q-16 6-30.5 15.5T720-476L504-260q-11 11-17.5 25.5T480-204v84q0 17-11.5 28.5T440-80H240Zm320-40v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-6 6-13.5 9T666-80h-66q-17 0-28.5-11.5T560-120Zm263-184 37-39-37-37-38 38 38 38ZM560-600h160L520-800l200 200-200-200v160q0 17 11.5 28.5T560-600Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentFilled.displayName = 'OnesyIconMaterialEditDocumentFilled';

export default IconMaterialEditDocumentFilled;
