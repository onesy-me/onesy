import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowNotchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowNotchW100'

      short_name='LineEndArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m502-313 84-153H106v-28h480l-84-153 263 167-263 167Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowNotchW100.displayName = 'OnesyIconMaterialLineEndArrowNotchW100';

export default IconMaterialLineEndArrowNotchW100;
