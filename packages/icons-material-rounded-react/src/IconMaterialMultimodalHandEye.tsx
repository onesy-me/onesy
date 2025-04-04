import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMultimodalHandEye = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultimodalHandEye'

      short_name='MultimodalHandEye'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M313-40q-24 0-46-9t-39-26L52-252q-11-11-11.5-27.5T51-308l6-6q14-14 34-19t40 0l69 20v-327q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640v380q0 20-15.5 31.5T229-222l-47-13 103 103q6 6 13 9t15 3h167q33 0 56.5-23.5T560-200v-160q0-17 11.5-28.5T600-400q17 0 28.5 11.5T640-360v160q0 66-47 113T480-40H313Zm7-320v-120q0-17 11.5-28.5T360-520q17 0 28.5 11.5T400-480v120q0 17-11.5 28.5T360-320q-17 0-28.5-11.5T320-360Zm120 0v-80q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440v80q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360Zm120 240H280h280Zm80-400q-83 0-154-40T374-672q-4-7-5.5-13.5T367-700q0-8 1.5-14.5T374-728q40-72 111.5-112T640-880q83 0 154 40t112 112q4 7 5.5 13.5T913-700q0 8-1.5 14.5T906-672q-40 72-111.5 112T640-520Zm0-80q57 0 107.5-26t82.5-74q-32-48-82.5-74T640-800q-57 0-107.5 26T450-700q32 48 82.5 74T640-600Zm0-40q-25 0-42.5-17.5T580-700q0-25 17.5-42.5T640-760q25 0 42.5 17.5T700-700q0 25-17.5 42.5T640-640Z"/>
    </Icon>
  );
});

IconMaterialMultimodalHandEye.displayName = 'OnesyIconMaterialMultimodalHandEye';

export default IconMaterialMultimodalHandEye;
