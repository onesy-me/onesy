import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForestW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestW100Filled'

      short_name='Forest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-162v-102h56v106q0 11.05-7.47 18.52Q613.05-132 602-132q-12.75 0-21.37-8.63Q572-149.25 572-162Zm-240 0v-130H154q-18.26 0-26.63-16-8.37-16 1.63-31l129-193h-20q-18 0-27-16t2-31l122-176q5-7 11.75-10t13.5-3q6.75 0 13.25 3t11.5 10l122 176q11 15 2 31t-27 16h-20l129 193q10 15 1.63 31-8.37 16-26.63 16H388v134q0 11.05-7.48 18.52Q373.05-132 362-132q-12.75 0-21.37-8.63Q332-149.25 332-162Zm323-130L514-504h22q18.38 0 27.19-16 8.81-16-2.19-31l-64-91 78-113q5-7 11.75-10t13.5-3q6.75 0 13.25 3t11.5 10l122 176q11 15 2 31t-27 16h-20l129 193q10 15 1.63 31-8.37 16-26.63 16H655Z"/>
    </Icon>
  );
});

IconMaterialForestW100Filled.displayName = 'OnesyIconMaterialForestW100Filled';

export default IconMaterialForestW100Filled;
