import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRamenDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningW100'

      short_name='RamenDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-160h170v-46l14-4q80-23 136-78t76-112H170q20 57 75 112t135 78l14 4v46Zm-28 28v-54q-92-26-154.5-95T132-428h80v-333l616-67v29l-412 45v89h412v28H416v209h412q-15 78-79.5 147T592-186v54H366Zm-38-533h60v-86l-60 6v80Zm-88 0h60v-77l-60 7v70Zm88 237h60v-209h-60v209Zm-88 0h60v-209h-60v209Zm240 28Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningW100.displayName = 'OnesyIconMaterialRamenDiningW100';

export default IconMaterialRamenDiningW100;
