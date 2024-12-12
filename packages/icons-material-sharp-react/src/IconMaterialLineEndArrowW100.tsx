import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowW100'

      short_name='LineEndArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M502-313v-153H136v-28h366v-153l263 167-263 167Zm28-51 182-116-182-116v232Zm0-116Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowW100.displayName = 'OnesyIconMaterialLineEndArrowW100';

export default IconMaterialLineEndArrowW100;
