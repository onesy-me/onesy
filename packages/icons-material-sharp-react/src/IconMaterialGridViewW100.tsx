import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridViewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewW100'

      short_name='GridView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-520v-268h268v268H172Zm0 348v-268h268v268H172Zm348-348v-268h268v268H520Zm0 348v-268h268v268H520ZM200-548h212v-212H200v212Zm348 0h212v-212H548v212Zm0 348h212v-212H548v212Zm-348 0h212v-212H200v212Zm348-348Zm0 136Zm-136 0Zm0-136Z"/>
    </Icon>
  );
});

IconMaterialGridViewW100.displayName = 'OnesyIconMaterialGridViewW100';

export default IconMaterialGridViewW100;
