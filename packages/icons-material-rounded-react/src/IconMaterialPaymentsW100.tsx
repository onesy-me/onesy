import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaymentsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsW100'

      short_name='Payments'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-470q-29 0-48.5-19.5T466-538q0-29 19.5-48.5T534-606q29 0 48.5 19.5T602-538q0 29-19.5 48.5T534-470ZM296-340q-24.75 0-42.37-17.63Q236-375.25 236-400v-276q0-24.75 17.63-42.38Q271.25-736 296-736h476q24.75 0 42.38 17.62Q832-700.75 832-676v276q0 24.75-17.62 42.37Q796.75-340 772-340H296Zm28-28h420q0-25 17.63-42.5Q779.25-428 804-428v-220q-25 0-42.5-17.63Q744-683.25 744-708H324q0 25-17.62 42.5Q288.75-648 264-648v220q25 0 42.5 17.62Q324-392.75 324-368Zm376 136H188q-24.75 0-42.37-17.63Q128-267.25 128-292v-312q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v312q0 12 10 22t22 10h512q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM296-368h-32v-340h32q-13 0-22.5 9.5T264-676v276q0 13 9.5 22.5T296-368Z"/>
    </Icon>
  );
});

IconMaterialPaymentsW100.displayName = 'OnesyIconMaterialPaymentsW100';

export default IconMaterialPaymentsW100;
