import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdsClickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdsClickW100Filled'

      short_name='AdsClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M453-294q-69-11-115-63t-46-123q0-78.33 54.83-133.17Q401.67-668 480-668q71 0 123 45.5T666-508l-31-9q-12.92-54-55.64-88.5Q536.63-640 480-640q-66 0-113 47t-47 113q0 57 35 100t88 56l10 30Zm48 161q-5.25 1-10.5 1H480q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480v10q0 5-1 10l-27-8v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l9 27Zm280-16L583-348l-33 100-70-232 232 70-100 33 199 198-30 30Z"/>
    </Icon>
  );
});

IconMaterialAdsClickW100Filled.displayName = 'OnesyIconMaterialAdsClickW100Filled';

export default IconMaterialAdsClickW100Filled;
