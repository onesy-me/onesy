import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersClear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClear'

      short_name='LayersClear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M759-663q31 24 31 63t-31 63l-87 67q-12 9-27 8t-26-12q-13-13-11.5-30.5T623-533l87-67-230-178-66 50q-12 9-27 8t-26-12q-13-13-11.5-30.5T365-791l66-51q22-17 49-17t49 17l230 179Zm5 559L632-236l-103 80q-22 17-49 17t-49-17L161-366q-16-12-15.5-31.5T162-429q11-8 24-8t24 8l270 209 94-73-70-68h29l-4 2q-22 17-49 17.5T431-358L201-537q-31-24-31-63t31-63l2-2L84-783q-12-12-12.5-28.5T83-840q12-12 28.5-12t28.5 12l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM487-606Zm312 177q15 12 15 31t-15 32l-12 10q-12 10-27 9t-26-12q-13-13-12-31.5t16-29.5l12-9q11-8 24.5-8t24.5 8Z"/>
    </Icon>
  );
});

IconMaterialLayersClear.displayName = 'OnesyIconMaterialLayersClear';

export default IconMaterialLayersClear;
