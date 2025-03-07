import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonalInjuryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalInjuryW100Filled'

      short_name='PersonalInjury'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-578q-44.55 0-76.27-31.72Q372-641.45 372-686t31.73-76.28Q435.45-794 480-794t76.28 31.72Q588-730.55 588-686t-31.72 76.28Q524.55-578 480-578Zm-64 364q-19 0-32.5-13.5T370-260q0-19 13.5-32.5T416-306h87q8 0 13 7t1 15l-27 54q-3.96 7.65-11.48 11.83Q471-214 463-214h-47ZM262-442q51-24 105.96-38 54.95-14 112.04-14 28 0 56 3.75T592-479q7.86 1.52 11.43 8.76Q607-463 603-455l-53 105q-3.96 7.65-11.48 11.83Q531-334 523-334H416q-30.95 0-52.47 21.41Q342-291.18 342-260.4q0 17.4 6 30.9t17 24.5q6 5 4.33 12-1.66 7-8.33 7H242q-12.75 0-21.37-8.63Q212-203.25 212-216v-154.24q0-22.7 14-41.73Q240-431 262-442Zm486 196q0 24.75-17.62 42.37Q712.75-186 688-186h-17q-12.75 0-21.37-8.63Q641-203.25 641-216v-226.5q0-7.5 6.5-12.5t14.5-2q9 3 18 7l18 8q22 11 36 30.1 14 19.11 14 41.9v124Z"/>
    </Icon>
  );
});

IconMaterialPersonalInjuryW100Filled.displayName = 'OnesyIconMaterialPersonalInjuryW100Filled';

export default IconMaterialPersonalInjuryW100Filled;
