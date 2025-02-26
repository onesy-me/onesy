import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailReadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadW100Filled'

      short_name='MarkEmailRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M614-118 480-252l20-20 114 114 228-228 20 20-248 248Zm-482-94v-536h696v264L614-271 500-385 367-252l40 40H132Zm348-274 320-212-16-22-304 200-304-200-16 22 320 212Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadW100Filled.displayName = 'OnesyIconMaterialMarkEmailReadW100Filled';

export default IconMaterialMarkEmailReadW100Filled;
