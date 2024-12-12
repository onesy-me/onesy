import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperGuideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperGuideFilled'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm360-640v280l100-60 100 60v-280H480Z"/>
    </Icon>
  );
});

IconMaterialDeveloperGuideFilled.displayName = 'OnesyIconMaterialDeveloperGuideFilled';

export default IconMaterialDeveloperGuideFilled;
