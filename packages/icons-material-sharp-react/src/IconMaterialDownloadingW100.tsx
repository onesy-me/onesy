import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadingW100'

      short_name='Downloading'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-134q-66-7-122-37t-97-76.5Q180-294 157-354t-23-126q0-134 87.5-233T441-826v28q-120 17-199.5 107T162-480q0 121 79 211t199 107v28Zm40-182L316-480l20-20 130 130v-274h28v274l130-130 20 20-164 164Zm40 182v-28q43-6 82.5-21.5T676-226l22 20q-40 29-85 46.5T520-134Zm158-598q-35-26-74.5-43T521-798v-28q48 7 92.5 25t84.5 47l-20 22Zm76 468-20-20q26-34 42-73.5t22-82.5h28q-6 48-24.5 93T754-264Zm44-256q-6-43-22-82.5T734-676l22-22q27 40 44.5 85t25.5 93h-28Z"/>
    </Icon>
  );
});

IconMaterialDownloadingW100.displayName = 'OnesyIconMaterialDownloadingW100';

export default IconMaterialDownloadingW100;
