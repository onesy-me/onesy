import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOnW100Filled'

      short_name='MicExternalOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M224-656q-9-12-13.5-26t-4.5-28q0-39.17 27.38-66.58Q260.76-804 299.88-804q39.12 0 66.62 27.42Q394-749.17 394-710q0 14-4.5 28T376-656H224Zm62 500v-124h-28l-34-332h152l-34 332h-28v96h192v-620h248v648h-28v-620H534v620H286Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOnW100Filled.displayName = 'OnesyIconMaterialMicExternalOnW100Filled';

export default IconMaterialMicExternalOnW100Filled;
