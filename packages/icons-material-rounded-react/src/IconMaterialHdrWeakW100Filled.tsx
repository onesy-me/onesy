import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrWeakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrWeakW100Filled'

      short_name='HdrWeak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-372q-44.55 0-76.27-31.73Q124-435.45 124-480t31.73-76.28Q187.45-588 232-588t76.27 31.72Q340-524.55 340-480t-31.73 76.27Q276.55-372 232-372Zm416.24 80Q570-292 515-346.76q-55-54.77-55-133Q460-558 514.76-613q54.77-55 133-55Q726-668 781-613.24q55 54.77 55 133Q836-402 781.24-347q-54.77 55-133 55Zm-.24-28q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
    </Icon>
  );
});

IconMaterialHdrWeakW100Filled.displayName = 'OnesyIconMaterialHdrWeakW100Filled';

export default IconMaterialHdrWeakW100Filled;
