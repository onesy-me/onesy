import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCasesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesW100'

      short_name='Cases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-174v-404h28v376h602v28H92Zm108-108v-416h216v-118h236v118h216v416H200Zm244-416h180v-90H444v90ZM228-310h612v-360H228v360Zm0-360v360-360Z"/>
    </Icon>
  );
});

IconMaterialCasesW100.displayName = 'OnesyIconMaterialCasesW100';

export default IconMaterialCasesW100;
