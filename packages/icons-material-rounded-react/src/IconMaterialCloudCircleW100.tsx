import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudCircleW100'

      short_name='CloudCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-372h300q29 0 48.5-19.5T708-440q0-27-19-47.5T640-508h-52v-31q0-46-31.5-77.5T481-648q-44 0-75 28.5T372-548h-32q-36 0-62 26.5T252-461q0 36.87 25.5 62.94Q303-372 340-372Zm0-28q-25 0-42.5-17.5T280-460q0-25 17.5-42.5T340-520h60v-20q0-33 23.5-56.5T480-620q33 0 56.5 23.5T560-540v60h80q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400H340Zm140.17 268q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialCloudCircleW100.displayName = 'OnesyIconMaterialCloudCircleW100';

export default IconMaterialCloudCircleW100;
