import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandAllFilled'

      short_name='ExpandAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-194 155-155q12-12 28-12t28 12q12 12 12 28.5T691-292L537-137q-23 23-57 23t-57-23L268-292q-12-12-11.5-28.5T269-349q12-12 28.5-12t28.5 12l154 155Zm0-572L326-612q-12 12-28 11.5T270-612q-12-12-12.5-28.5T269-669l154-154q23-23 57-23t57 23l154 154q12 12 11.5 28.5T690-612q-12 11-28 11.5T634-612L480-766Z"/>
    </Icon>
  );
});

IconMaterialExpandAllFilled.displayName = 'OnesyIconMaterialExpandAllFilled';

export default IconMaterialExpandAllFilled;
