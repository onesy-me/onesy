import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrStrongW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrStrongW100Filled'

      short_name='HdrStrong'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-372q-44.55 0-76.27-31.73Q124-435.45 124-480t31.73-76.28Q187.45-588 232-588t76.27 31.72Q340-524.55 340-480t-31.73 76.27Q276.55-372 232-372Zm0-28q33 0 56.5-23.5T312-480q0-33-23.5-56.5T232-560q-33 0-56.5 23.5T152-480q0 33 23.5 56.5T232-400Zm416.24 108Q570-292 515-346.76q-55-54.77-55-133Q460-558 514.76-613q54.77-55 133-55Q726-668 781-613.24q55 54.77 55 133Q836-402 781.24-347q-54.77 55-133 55Z"/>
    </Icon>
  );
});

IconMaterialHdrStrongW100Filled.displayName = 'OnesyIconMaterialHdrStrongW100Filled';

export default IconMaterialHdrStrongW100Filled;
