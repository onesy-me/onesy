import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltW100'

      short_name='ChairAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-182v-286h94v-84h-94v-206h416v206h-94v84h94v286h-28v-120H300v120h-28Zm28-398h360v-150H300v150Zm94 112h172v-84H394v84Zm-94 138h360v-110H300v110Zm0-250v-150 150Zm0 250v-110 110Z"/>
    </Icon>
  );
});

IconMaterialChairAltW100.displayName = 'OnesyIconMaterialChairAltW100';

export default IconMaterialChairAltW100;
