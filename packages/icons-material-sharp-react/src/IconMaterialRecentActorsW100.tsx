import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentActorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsW100'

      short_name='RecentActors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-252v-456h456v456H80Zm28-90q44-29 94-45.5T308-404q56 0 106 16.5t94 45.5v-338H108v338Zm200-34q-48 0-97 15.5T117-313v33h387v-33q-44-29-94.5-46T308-376Zm0-70q-39 0-66.5-27.5T214-540q0-39 27.5-66.5T308-634q39 0 66.5 27.5T402-540q0 39-27.5 66.5T308-446Zm0-28q27.5 0 46.75-19.25T374-540q0-27.5-19.25-46.75T308-606q-27.5 0-46.75 19.25T242-540q0 27.5 19.25 46.75T308-474Zm372 222v-456h28v456h-28Zm172 0v-456h28v456h-28ZM308-540Zm3 260Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsW100.displayName = 'OnesyIconMaterialRecentActorsW100';

export default IconMaterialRecentActorsW100;
