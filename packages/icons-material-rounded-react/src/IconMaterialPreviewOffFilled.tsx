import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPreviewOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewOffFilled'

      short_name='PreviewOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-82 0-146.5-44.5T240-440q20-48 56-84t84-56l47 47q-39 11-70 34.5T306-440q26 47 72 73.5T480-340q30 0 58-8t51-23l43 43q-32 23-70.5 35.5T480-280Zm209-104-43-43q2-3 4-6.5t4-6.5q-18-33-47-56.5T542-531l-69-69q82 0 150 44.5T720-440q-6 15-13.5 29T689-384ZM200-120q-33 0-56.5-23.5T120-200v-527l-37-37q-11-11-11-27.5T84-820q11-11 28-11t28 11l680 680q12 12 11.5 28T819-84q-12 11-28 11.5T763-84l-36-36H200Zm0-80h447L200-647v447Zm640-33-80-80v-327H433L233-840h527q33 0 56.5 23.5T840-760v527Z"/>
    </Icon>
  );
});

IconMaterialPreviewOffFilled.displayName = 'OnesyIconMaterialPreviewOffFilled';

export default IconMaterialPreviewOffFilled;
