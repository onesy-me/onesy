import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInteractiveSpaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InteractiveSpaceW100'

      short_name='InteractiveSpace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-621 61-60-61-60-60 60 60 60Zm200 1ZM132-412v-416h696v416H647q.6-7 .8-14 .2-7 .2-14h152v-360H160v360h152q0 7 .2 14t.8 14H132Zm527.88-254q14.12 0 24.12-9.88 10-9.88 10-24T684.12-724q-9.88-10-24-10T636-724.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM252-132v-48q0-20 11-37.5t30-25.5q45-20 91.5-30.5T480-284q49 0 95.5 10.5T667-243q19 8 30 25.26 11 17.27 11 37.4V-132H252Zm28-28h400v-20q0-12-7-22t-18-15q-42-19-86-29t-89-10q-45 0-89 10t-86 29q-11 5-18 15t-7 22v20Zm200-184q-37 0-62.5-25.5T392-432q0-37 25.5-62.5T480-520q37 0 62.5 25.5T568-432q0 37-25.5 62.5T480-344Zm0-28q25 0 42.5-17.5T540-432q0-25-17.5-42.5T480-492q-25 0-42.5 17.5T420-432q0 25 17.5 42.5T480-372Zm0-60Zm0 272Z"/>
    </Icon>
  );
});

IconMaterialInteractiveSpaceW100.displayName = 'OnesyIconMaterialInteractiveSpaceW100';

export default IconMaterialInteractiveSpaceW100;
