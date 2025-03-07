import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInterestsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterestsW100'

      short_name='Interests'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m120-550 162-279 162 279H120Zm163 405q-57 0-96-39t-39-95.57Q148-337 187-376q39-39 96-39t96 39q39 39 39 96t-39 96q-39 39-96 39Zm0-28q45 0 76-31t31-76q0-45-31-76t-76-31q-45 0-76 31t-31 76q0 45 31 76t76 31ZM169-578h227L282-773 169-578Zm378 433v-270h270v270H547Zm28-28h214v-214H575v214Zm107-377q-31-24-59.5-47T572-643.5Q550-667 537-691t-13-50q0-33 21-54t54-21q22.99 0 42.99 11.5Q662-793 682-769q20-23 41-35t43-12q31.62 0 52.81 22.6T840-738q0 25-13 48.5T792-643q-22 23-50.5 46T682-550Zm0-36q69-52 99.5-88t30.5-65q0-21-13.5-35T765-788q-13.79 0-26.9 8.5Q725-771 701-747l-19 19-19-19q-25-25-37.5-33t-26.5-8q-21 0-34 12.5T552-741q0 31 30.5 67t99.5 88Zm0-101Zm-399 11Zm0 396Zm399 0Z"/>
    </Icon>
  );
});

IconMaterialInterestsW100.displayName = 'OnesyIconMaterialInterestsW100';

export default IconMaterialInterestsW100;
