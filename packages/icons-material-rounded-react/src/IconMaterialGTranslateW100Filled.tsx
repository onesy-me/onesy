import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGTranslateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GTranslateW100Filled'

      short_name='GTranslate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-160-32-95.94H224q-26.4 0-45.2-18.78-18.8-18.79-18.8-45.17v-415.73Q160-762 178.8-781q18.8-19 45.2-19h192l28 95.94h292q28 0 46 17.98 18 17.99 18 45.97v415.73Q800-198 782-179q-18 19-46 19H480ZM325.44-397Q381-397 416-432.6t35-92.4v-13.5q0-4.5-1.61-8.5H322v49h72q-7 23-24.5 35.5T326.3-450q-31.32 0-53.81-23Q250-496 250-528t22.3-55q22.3-23 53.36-23 14.34 0 26.84 5t23.5 16l39-37q-17-17-40.56-27-23.57-10-49.92-10Q271-659 233-620.5 195-582 195-528t38.25 92.5q38.24 38.5 92.19 38.5ZM539-381l18-17q-11-14-21-26.5T518-451l21 70Zm40-41q22.6-26.26 34.3-50.13Q625-496 629-510H502l9.4 33.89h31.33Q549-464 557.92-450.13 566.84-436.26 579-422Zm-67 230h224q14.4 0 23.2-9.19 8.8-9.19 8.8-22.78v-415.64q0-14.39-8.79-23.39t-23.17-9H454l37.43 130h62.92v-33.7H587v33.7h117v32h-40.97q-8.03 30-23.53 59-15.5 29-37.5 54l87 86-23 23-87-86-29 29 26 89-64 64Z"/>
    </Icon>
  );
});

IconMaterialGTranslateW100Filled.displayName = 'OnesyIconMaterialGTranslateW100Filled';

export default IconMaterialGTranslateW100Filled;
