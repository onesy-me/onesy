import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInArFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArFilled'

      short_name='ViewInAr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-181 240-296q-19-11-29.5-29.5T200-365v-230q0-21 10.5-39.5T240-664l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29.5T760-595v230q0 21-10.5 39.5T720-296L520-181q-19 11-40 11t-40-11ZM120-640q-17 0-28.5-11.5T80-680v-120q0-33 23.5-56.5T160-880h120q17 0 28.5 11.5T320-840q0 17-11.5 28.5T280-800H160v120q0 17-11.5 28.5T120-640Zm40 560q-33 0-56.5-23.5T80-160v-120q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280v120h120q17 0 28.5 11.5T320-120q0 17-11.5 28.5T280-80H160Zm640 0H680q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h120v-120q0-17 11.5-28.5T840-320q17 0 28.5 11.5T880-280v120q0 33-23.5 56.5T800-80Zm0-600v-120H680q-17 0-28.5-11.5T640-840q0-17 11.5-28.5T680-880h120q33 0 56.5 23.5T880-800v120q0 17-11.5 28.5T840-640q-17 0-28.5-11.5T800-680Zm-478 61-42 24v45l160 93v184l40 23 40-23v-184l160-93v-45l-42-24-158 93-158-93Z"/>
    </Icon>
  );
});

IconMaterialViewInArFilled.displayName = 'OnesyIconMaterialViewInArFilled';

export default IconMaterialViewInArFilled;
