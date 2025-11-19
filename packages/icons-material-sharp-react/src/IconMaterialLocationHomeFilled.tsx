import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationHomeFilled = (props: IIcon) => {

  return (
    <Icon
      name='LocationHomeFilled'

      short_name='LocationHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-200h480v-11q0-14-6-26t-18-19q-49-31-103.5-47.5T480-320q-58 0-112.5 16.5T264-256q-12 7-18 19t-6 26v11Zm-80 80v-480l320-240 320 240v480H160Z"/>
    </Icon>
  );
};

IconMaterialLocationHomeFilled.displayName = 'OnesyIconMaterialLocationHomeFilled';

export default IconMaterialLocationHomeFilled;
