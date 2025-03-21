import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeapSnapshotMultiple = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotMultiple'

      short_name='HeapSnapshotMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-500q21 0 35.5-14.5T500-550q0-21-14.5-35.5T450-600q-21 0-35.5 14.5T400-550q0 21 14.5 35.5T450-500Zm36 151 166-166q12-12 12-28.5T652-572q-12-12-28.5-12T595-572L428-405q-12 12-11.5 28t12.5 28q12 12 28.5 12t28.5-12Zm144 29q21 0 35.5-14.5T680-370q0-21-14.5-35.5T630-420q-21 0-35.5 14.5T580-370q0 21 14.5 35.5T630-320Zm130 120H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h247q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v367q0 33-23.5 56.5T760-200Zm0-440H620q-25 0-42.5-17.5T560-700v-140H320v560h440v-360ZM160-40q-33 0-56.5-23.5T80-120v-520q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v520h400q17 0 28.5 11.5T600-80q0 17-11.5 28.5T560-40H160Zm160-800v200-200 560-560Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotMultiple.displayName = 'OnesyIconMaterialHeapSnapshotMultiple';

export default IconMaterialHeapSnapshotMultiple;
