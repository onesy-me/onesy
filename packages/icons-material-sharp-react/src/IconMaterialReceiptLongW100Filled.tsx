import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReceiptLongW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongW100Filled'

      short_name='ReceiptLong'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-132q-29 0-48.5-19.5T172-199.53V-268h120v-540l48 28 50-28 50 28 50-28 50 28 50-28 50 28 50-28 50 28 48-28v608q0 29-19.5 48.5T720-132H240Zm480-28q17 0 28.5-11.5T760-200v-560H320v492h360v68q0 17 11.5 28.5T720-160ZM380-626v-28h206v28H380Zm0 120v-28h206v28H380Zm294-106q-11 0-19.5-8.5T646-640q0-11 8.5-19.5T674-668q11 0 19.5 8.5T702-640q0 11-8.5 19.5T674-612Zm0 120q-11 0-19.5-8.5T646-520q0-11 8.5-19.5T674-548q11 0 19.5 8.5T702-520q0 11-8.5 19.5T674-492Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongW100Filled.displayName = 'OnesyIconMaterialReceiptLongW100Filled';

export default IconMaterialReceiptLongW100Filled;
