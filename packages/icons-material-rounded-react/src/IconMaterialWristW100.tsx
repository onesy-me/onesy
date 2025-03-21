import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWristW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WristW100'

      short_name='Wrist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M264-332H90q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h161q12.44 0 23.72 5T294-342l155 156 1-1q11-11 12.5-25.5T457-241l-28-56q-8-15 .75-29T456-340h334q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H453l26 52q13 26 7.5 54T461-158q-5 5-11 5.5t-11-4.5L264-332ZM76-614.04q0-5.96 4.03-9.96 4.02-4 9.97-4h154l54-54q12.8-12.63 29.36-19.31Q343.93-708 362-708h388q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H356q-9.82 0-18.41 3.5T322-666l-48 48q-8 8-19.28 13-11.28 5-23.72 5H90q-5.95 0-9.97-4.04-4.03-4.03-4.03-10ZM76-433Zm794-2H590q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h280q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Zm-40-122H590q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Z"/>
    </Icon>
  );
});

IconMaterialWristW100.displayName = 'OnesyIconMaterialWristW100';

export default IconMaterialWristW100;
