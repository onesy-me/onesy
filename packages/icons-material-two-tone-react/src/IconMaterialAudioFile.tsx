import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAudioFile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioFile'

      short_name='AudioFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M13,4H6v16h12V9h-5V4z M16,11v2h-3v3.75c0,1.24-1.01,2.25-2.25,2.25S8.5,17.99,8.5,16.75 c0-1.24,1.01-2.25,2.25-2.25c0.46,0,0.89,0.14,1.25,0.38V11H16z" opacity=".3"/><path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z"/><path d="M12,14.88c-0.36-0.24-0.79-0.38-1.25-0.38c-1.24,0-2.25,1.01-2.25,2.25c0,1.24,1.01,2.25,2.25,2.25S13,17.99,13,16.75V13 h3v-2h-4V14.88z"/></g></g>
    </Icon>
  );
});

IconMaterialAudioFile.displayName = 'OnesyIconMaterialAudioFile';

export default IconMaterialAudioFile;
