import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeapSnapshotThumbnail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotThumbnail'

      short_name='HeapSnapshotThumbnail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h560v560H40Zm640-320v-240h240v240H680Zm80-80h80v-80h-80v80ZM120-280h400v-400H120v400Zm560 80v-240h240v240H680Zm80-80h80v-80h-80v80Zm-640 0v-400 400Zm640-320v-80 80Zm0 320v-80 80Zm-340-40q25 0 42.5-17.5T480-380q0-25-17.5-42.5T420-440q-25 0-42.5 17.5T360-380q0 25 17.5 42.5T420-320Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T280-580q0-25-17.5-42.5T220-640q-25 0-42.5 17.5T160-580q0 25 17.5 42.5T220-520Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotThumbnail.displayName = 'OnesyIconMaterialHeapSnapshotThumbnail';

export default IconMaterialHeapSnapshotThumbnail;
