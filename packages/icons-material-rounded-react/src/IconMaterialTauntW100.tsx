import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTauntW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TauntW100'

      short_name='Taunt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-379q-15 8-32.15 3.41-17.16-4.59-26.05-18.66Q147-412 154.5-432q7.5-20 27.5-27l326-114q5-2 10.52.66 5.53 2.66 9.21 9.61 3.27 5.73 1.29 11.69-1.98 5.96-7.02 9.04L216-379Zm75 221q-24.75 0-42.37-17.63Q231-193.25 231-218v-126l323.62-169.82Q569-522 574-537.16q5-15.15-2-28.84l167-84q6-3 12-.5t10.71 10.38Q765-635 763.5-629.5 762-624 757-620L499-425.22V-218q0 24.75-17.62 42.37Q463.75-158 439-158H291Zm19-350q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Z"/>
    </Icon>
  );
});

IconMaterialTauntW100.displayName = 'OnesyIconMaterialTauntW100';

export default IconMaterialTauntW100;
