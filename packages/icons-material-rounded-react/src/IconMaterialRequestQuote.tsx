import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestQuote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuote'

      short_name='RequestQuote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240v20q0 8 6 14t14 6h40q8 0 14-6t6-14v-20h40q17 0 28.5-11.5T600-280v-120q0-17-11.5-28.5T560-440H440v-40h120q17 0 28.5-11.5T600-520q0-17-11.5-28.5T560-560h-40v-20q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14v20h-40q-17 0-28.5 11.5T360-520v120q0 17 11.5 28.5T400-360h120v40H400q-17 0-28.5 11.5T360-280q0 17 11.5 28.5T400-240h40ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 200v520q0 33-23.5 56.5T720-80H240Zm0-80h480v-480H600q-17 0-28.5-11.5T560-680v-120H240v640Zm0-640v160-160 640-640Z"/>
    </Icon>
  );
});

IconMaterialRequestQuote.displayName = 'OnesyIconMaterialRequestQuote';

export default IconMaterialRequestQuote;
