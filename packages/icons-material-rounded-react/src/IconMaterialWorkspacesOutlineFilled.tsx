import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkspacesOutlineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacesOutlineFilled'

      short_name='WorkspacesOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21Q4.35 21 3.175 19.825Q2 18.65 2 17Q2 15.35 3.175 14.175Q4.35 13 6 13Q7.65 13 8.825 14.175Q10 15.35 10 17Q10 18.65 8.825 19.825Q7.65 21 6 21ZM12 11Q10.35 11 9.175 9.825Q8 8.65 8 7Q8 5.35 9.175 4.175Q10.35 3 12 3Q13.65 3 14.825 4.175Q16 5.35 16 7Q16 8.65 14.825 9.825Q13.65 11 12 11ZM18 21Q16.35 21 15.175 19.825Q14 18.65 14 17Q14 15.35 15.175 14.175Q16.35 13 18 13Q19.65 13 20.825 14.175Q22 15.35 22 17Q22 18.65 20.825 19.825Q19.65 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialWorkspacesOutlineFilled.displayName = 'OnesyIconMaterialWorkspacesOutlineFilled';

export default IconMaterialWorkspacesOutlineFilled;
