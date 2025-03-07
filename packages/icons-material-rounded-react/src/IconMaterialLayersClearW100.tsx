import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersClearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClearW100'

      short_name='LayersClear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M695-638q23 18 23 47.5T695-543l-95 74q-5 3-10 2.5t-9-4.5q-5-5-4-11t6-10l94-73q13-10 13-25t-13-25L500-753q-8-7-19.5-7t-20.5 7l-82 64q-5 3-10 2.5t-9-4.5q-5-5-4-11t6-10l82-64q17-13 37-13t37 13l178 138ZM800-98 582-316l-65 50q-17 13-37 13t-37-13L218-441q-5-4-5.5-10.5T217-463q4-3 9-3t9 3l225 174q9 7 20 7t20-7l61-48-69-69h28l-3 3q-17 12-37 12t-36-13L262-545q-23-17-22.5-45.5T262-636L84-814q-4-4-4.5-9.5T84-834q5-5 10-5t10 5l716 716q4 4 4.5 9.5T820-98q-5 5-10 5t-10-5ZM469-582Zm274 119q5 5 4.5 11t-5.5 11l-64 50q-5 3-10 2.5t-9-4.5q-5-5-4-11t6-10l64-49q4-3 9-3t9 3Z"/>
    </Icon>
  );
});

IconMaterialLayersClearW100.displayName = 'OnesyIconMaterialLayersClearW100';

export default IconMaterialLayersClearW100;
