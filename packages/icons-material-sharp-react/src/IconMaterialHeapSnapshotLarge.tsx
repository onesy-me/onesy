import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeapSnapshotLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotLarge'

      short_name='HeapSnapshotLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-220q25 0 42.5-17.5T640-280q0-25-17.5-42.5T580-340q-25 0-42.5 17.5T520-280q0 25 17.5 42.5T580-220Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-480q0-25-17.5-42.5T380-540q-25 0-42.5 17.5T320-480q0 25 17.5 42.5T380-420ZM160-80v-800h400l240 240v560H160Zm360-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotLarge.displayName = 'OnesyIconMaterialHeapSnapshotLarge';

export default IconMaterialHeapSnapshotLarge;
