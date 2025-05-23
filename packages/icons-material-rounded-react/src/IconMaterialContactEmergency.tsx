import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactEmergency = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergency'

      short_name='ContactEmergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM182-200h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Zm210-68v38q0 13 8.5 21.5T720-480q13 0 21.5-8.5T750-510v-38l33 19q11 6 23 3t18-14q6-11 3-23t-14-18l-33-19 33-19q11-6 14-18t-3-23q-6-11-18-14t-23 3l-33 19v-38q0-13-8.5-21.5T720-720q-13 0-21.5 8.5T690-690v38l-33-19q-11-6-23-3t-18 14q-6 11-3 23t14 18l33 19-33 19q-11 6-14 18t3 23q6 11 18 14t23-3l33-19Z"/>
    </Icon>
  );
});

IconMaterialContactEmergency.displayName = 'OnesyIconMaterialContactEmergency';

export default IconMaterialContactEmergency;
