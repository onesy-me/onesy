import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='HourglassW100Filled'

      short_name='Hourglass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-28h70v-120q0-78 50.5-136.5T460-480q-77-6-127.5-64T282-680v-120h-70v-28h536v28h-70v120q0 78-50.5 136T500-480q77 5 127.5 63.5T678-280v120h70v28H212Z"/>
    </Icon>
  );
};

IconMaterialHourglassW100Filled.displayName = 'OnesyIconMaterialHourglassW100Filled';

export default IconMaterialHourglassW100Filled;
