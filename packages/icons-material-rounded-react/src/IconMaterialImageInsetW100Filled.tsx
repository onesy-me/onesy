import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageInsetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageInsetW100Filled'

      short_name='ImageInset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-340h380q13 0 21.5-8.5T700-370v-220q0-13-8.5-21.5T670-620H290q-13 0-21.5 8.5T260-590v220q0 13 8.5 21.5T290-340Zm-98 128q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm190-202q-9 0-13-8t1-16l38-51q5-6 12-6t12 6l32 43 48-64q5-6 12-6t12 6l54 72q5 8 1 16t-13 8H382Z"/>
    </Icon>
  );
});

IconMaterialImageInsetW100Filled.displayName = 'OnesyIconMaterialImageInsetW100Filled';

export default IconMaterialImageInsetW100Filled;
