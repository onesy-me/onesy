import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperGuideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperGuideW100Filled'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm274-588v208q0 9 7.5 13.5t15.5-.5l36-22q7-5 15-5t15 5l36 22q8 5 15.5.5T654-552v-208H506Z"/>
    </Icon>
  );
});

IconMaterialDeveloperGuideW100Filled.displayName = 'OnesyIconMaterialDeveloperGuideW100Filled';

export default IconMaterialDeveloperGuideW100Filled;
