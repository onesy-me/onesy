import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoAutoMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAutoMerge'

      short_name='PhotoAutoMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h195q17 0 28.5 11.5T595-840q0 17-11.5 28.5T555-800H360v408q45-42 101.5-65T580-480q61 0 118 23t102 65q1 1 0 0v-163q0-17 11.5-28.5T840-595q17 0 28.5 11.5T880-555v195q0 33-23.5 56.5T800-280H360Zm220-350Zm184-114-11 31q-2 6-7 9.5t-11 3.5q-11 0-17-8t-2-18l57-160q2-6 7.5-10t12.5-4h14q7 0 12.5 4t7.5 10l57 159q4 10-1.5 18.5T866-700q-7 0-12.5-4t-7.5-10l-10-30h-72Zm10-30h52l-26-82-26 82ZM580-400q-35 0-69 10t-63 30h264q-29-20-63-30t-69-10Zm0-340q46 0 78 32t32 78q0 46-32 78t-78 32q-46 0-78-32t-32-78q0-46 32-78t78-32Zm0 80q-13 0-21.5 8.5T550-630q0 13 8.5 21.5T580-600q13 0 21.5-8.5T610-630q0-13-8.5-21.5T580-660ZM222-81q-33 4-59.5-16T132-150L80-588q-4-33 16.5-58.5T150-677h2q17-3 30.5 9t13.5 30q0 15-10.5 26T160-598h-1l54 438 474-58q17-2 30 8t15 27q2 17-8 29.5T697-139L222-81Zm-9-79Z"/>
    </Icon>
  );
});

IconMaterialPhotoAutoMerge.displayName = 'OnesyIconMaterialPhotoAutoMerge';

export default IconMaterialPhotoAutoMerge;
