import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOffFilled'

      short_name='ContentPasteOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-280q-15 0-27.5-10.5T760-321v-439h-80v80q0 17-11.5 28.5T640-640H467q-16 0-30.5-6T411-663L302-772q-6-6-9-13t-3-15q0-16 11.5-28t29.5-12h36q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v440q0 20-12.5 30T800-280ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Zm166 560L200-646v446h446Zm-446 80q-33 0-56.5-23.5T120-200v-526l-37-37q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84l-37-36H200Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOffFilled.displayName = 'OnesyIconMaterialContentPasteOffFilled';

export default IconMaterialContentPasteOffFilled;
