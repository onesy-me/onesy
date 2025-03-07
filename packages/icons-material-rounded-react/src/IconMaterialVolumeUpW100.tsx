import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpW100'

      short_name='VolumeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M744-481q0-81.69-44.54-149.11Q654.91-697.54 580-731q-6-3-9-8t-.27-10.32Q574-755 581-756t14 2q80 38 128.5 110.96t48.5 162Q772-392 723.5-319 675-246 595-208q-7 3-14 2t-10.27-6.68Q568-218 571-223t9-8q74.91-33.46 119.46-100.89Q744-399.31 744-481Zm-426 69H218q-12.75 0-21.37-8.63Q188-429.25 188-442v-76q0-12.75 8.63-21.38Q205.25-548 218-548h100l100-100q7-7 16.5-3.28T444-638v316q0 9.56-9.5 13.28Q425-305 418-312L318-412Zm306-67.89q0 30.12-10 57-10 26.89-28.9 47.69-6.1 5.2-13.6 2.2t-7.5-11v-194q0-8 7.5-11t13.6 2.03Q604-566 614-538t10 58.11ZM416-606l-86 86H216v80h114l86 86v-252ZM316-480Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpW100.displayName = 'OnesyIconMaterialVolumeUpW100';

export default IconMaterialVolumeUpW100;
