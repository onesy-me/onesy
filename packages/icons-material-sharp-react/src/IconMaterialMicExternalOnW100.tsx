import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOnW100'

      short_name='MicExternalOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M224-656q-9-12-13.5-26t-4.5-28q0-39 27.5-66.5T300-804q39 0 66.5 27.5T394-710q0 14-4.5 28T376-656H224Zm62 500v-124h-28l-34-332h152l-34 332h-28v96h192v-620h248v648h-28v-620H534v620H286Zm-3-152h34l27-276h-88l27 276Zm34-276h-61 88-27Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOnW100.displayName = 'OnesyIconMaterialMicExternalOnW100';

export default IconMaterialMicExternalOnW100;
