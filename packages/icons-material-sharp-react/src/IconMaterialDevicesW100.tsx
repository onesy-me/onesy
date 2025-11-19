import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesW100 = (props: IIcon) => {

  return (
    <Icon
      name='DevicesW100'

      short_name='Devices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-42h80v-494h576v28H240v466h213v42H132Zm441 0v-408h256v408H573Zm28-42h200v-338H601v338Zm0 0h200-200Z"/>
    </Icon>
  );
};

IconMaterialDevicesW100.displayName = 'OnesyIconMaterialDevicesW100';

export default IconMaterialDevicesW100;
