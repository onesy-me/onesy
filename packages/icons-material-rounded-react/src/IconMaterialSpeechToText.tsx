import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeechToText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeechToText'

      short_name='SpeechToText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-560q-33 0-56.5-23T600-640v-160q0-34 23.5-57t56.5-23q34 0 57 23t23 57v160q0 34-23 57t-57 23ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h280q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800H200v640h440v-40q0-17 11.5-28.5T680-240q17 0 28.5 11.5T720-200v40q0 33-23.5 56.5T640-80H200Zm320-160H320q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320h200q17 0 28.5 11.5T560-280q0 17-11.5 28.5T520-240Zm-80-120H320q-17 0-28.5-11.5T280-400q0-17 11.5-28.5T320-440h120q17 0 28.5 11.5T480-400q0 17-11.5 28.5T440-360Zm240-140q48 0 84-27.5t50-70.5q5-17 17-29.5t29-12.5q17 0 28.5 13.5T896-596q-14 66-61.5 113T720-424v64q0 17-11.5 28.5T680-320q-17 0-28.5-11.5T640-360v-64q-66-12-114-59t-62-113q-4-17 7.5-30.5T500-640q17 0 29 12.5t17 29.5q14 43 50.5 70.5T680-500Z"/>
    </Icon>
  );
});

IconMaterialSpeechToText.displayName = 'OnesyIconMaterialSpeechToText';

export default IconMaterialSpeechToText;
