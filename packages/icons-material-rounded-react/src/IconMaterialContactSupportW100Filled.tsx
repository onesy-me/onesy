import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactSupportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactSupportW100Filled'

      short_name='ContactSupport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M532-252h-72q-120.28 0-204.14-83.8Q172-419.6 172-539.8T255.82-744q83.83-84 204.06-84 60.12 0 112.62 22.5Q625-783 664-744t61.5 91.31Q748-600.39 748-540q0 98-46.5 184.5T580-206q-8 4.5-15.5 5.25T549-204q-8-4-12.5-10.5T532-230v-22Zm-69.84-90q10.84 0 18.34-7.66 7.5-7.65 7.5-18.5 0-10.84-7.66-18.34-7.65-7.5-18.5-7.5-10.84 0-18.34 7.66-7.5 7.65-7.5 18.5 0 10.84 7.66 18.34 7.65 7.5 18.5 7.5Zm-81.9-292q5.74 2 11.43-.61 5.69-2.6 9.31-8.39 8-14 24-22.5t37-8.5q31.11 0 50.56 16Q532-642 532-614.21q0 17.21-8 31.71T497-549q-26 26-37 43.5T449-472q0 6.62 4.15 11.31 4.14 4.69 10 4.69 5.85 0 9.85-4.5t4-11.5q1-11 12-26.5t29-33.5q23-23 32.5-42.67Q560-594.33 560-614q0-39.69-27.5-63.84Q505-702 464-702q-28.65 0-52.83 14-24.17 14-35.26 31.76Q372-649 373-642.5t7.26 8.5Z"/>
    </Icon>
  );
});

IconMaterialContactSupportW100Filled.displayName = 'OnesyIconMaterialContactSupportW100Filled';

export default IconMaterialContactSupportW100Filled;
