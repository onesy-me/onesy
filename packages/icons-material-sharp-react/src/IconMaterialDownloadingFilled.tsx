import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadingFilled'

      short_name='Downloading'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M439-82q-76-8-141.5-42.5t-113.5-88Q136-266 108.5-335T81-481q0-155 102.5-268.5T440-880v80q-121 17-200 107.5T161-481q0 121 79 211.5T439-162v80Zm40-198L278-482l57-57 104 104v-245h80v245l103-103 57 58-200 200Zm40 198v-80q43-6 82.5-23t73.5-43l58 58q-47 37-101 59.5T519-82Zm158-652q-35-26-74.5-43T520-800v-80q59 6 113 28.5T733-792l-56 58Zm112 506-56-57q26-34 42-73.5t22-82.5h82q-8 59-30 113.5T789-228Zm8-293q-6-43-22-82.5T733-677l56-57q38 45 61 99.5T879-521h-82Z"/>
    </Icon>
  );
});

IconMaterialDownloadingFilled.displayName = 'OnesyIconMaterialDownloadingFilled';

export default IconMaterialDownloadingFilled;
