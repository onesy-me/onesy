import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMosaicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicW100'

      short_name='AutoAwesomeMosaic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-172H172v-616h268v616Zm-28-28v-560H200v560h212Zm108-320v-268h268v268H520Zm28-28h212v-212H548v212Zm-28 376v-268h268v268H520Zm28-28h212v-212H548v212ZM412-480Zm136-68Zm0 136Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicW100.displayName = 'OnesyIconMaterialAutoAwesomeMosaicW100';

export default IconMaterialAutoAwesomeMosaicW100;
