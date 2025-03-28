import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonalInjuryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalInjuryW100'

      short_name='PersonalInjury'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-578q-44.55 0-76.27-31.72Q372-641.45 372-686t31.73-76.28Q435.45-794 480-794t76.28 31.72Q588-730.55 588-686t-31.72 76.28Q524.55-578 480-578Zm0-28q33 0 56.5-23.5T560-686q0-33-23.5-56.5T480-766q-33 0-56.5 23.5T400-686q0 33 23.5 56.5T480-606Zm0 112q54 0 111 14t107 38q23.44 10.96 36.72 30.48Q748-392 748-369.94V-246q0 26-17 43t-43 17H416q-32 0-53-21t-21-53q0-32 21-53t53-21h126l59-115q-29-9-63-13t-58-4q-53 0-104.5 12.5T276-418q-17 8-26.5 21t-9.5 27v170q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-170q0-22 13.28-41.52Q238.56-431.04 262-442q50-24 107-38t111-14Zm-64 280h66l46-92H416q-19 0-32.5 13.5T370-260q0 19 13.5 32.5T416-214Zm97 0h175q14 0 23-9t9-23v-124q0-14-10.5-27T684-418q-13-7-27.5-12.5T628-441L513-214Zm-33-472Zm0 356Z"/>
    </Icon>
  );
});

IconMaterialPersonalInjuryW100.displayName = 'OnesyIconMaterialPersonalInjuryW100';

export default IconMaterialPersonalInjuryW100;
