import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCollectionsBookmarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmarkW100Filled'

      short_name='CollectionsBookmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm328-408q0 9 7.5 13.5t15.5-.5l36-22q7-5 15-5t15 5l36 22q8 5 15.5.5T694-592v-208H546v208Z"/>
    </Icon>
  );
});

IconMaterialCollectionsBookmarkW100Filled.displayName = 'OnesyIconMaterialCollectionsBookmarkW100Filled';

export default IconMaterialCollectionsBookmarkW100Filled;
