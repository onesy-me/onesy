import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeapSnapshotLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotLargeFilled'

      short_name='HeapSnapshotLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-220q25 0 42.5-17.5T640-280q0-25-17.5-42.5T580-340q-25 0-42.5 17.5T520-280q0 25 17.5 42.5T580-220Zm-230-30q11 11 28 11t28-11l204-204q11-11 11-28t-11-28q-11-11-28-11t-28 11L350-306q-11 11-11 28t11 28Zm30-170q25 0 42.5-17.5T440-480q0-25-17.5-42.5T380-540q-25 0-42.5 17.5T320-480q0 25 17.5 42.5T380-420ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm480-520L520-800v120q0 33 23.5 56.5T600-600h120Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotLargeFilled.displayName = 'OnesyIconMaterialHeapSnapshotLargeFilled';

export default IconMaterialHeapSnapshotLargeFilled;
