import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='LightW100Filled'

      short_name='Light'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-220q-47 0-79.5-32.5T368-332H200q-11.55 0-19.77-8.23Q172-348.45 172-360q0-121 85-212t209-96v-86q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v86q124 5 209 96t85 212q0 11.55-8.22 19.77Q771.55-332 760-332H592q0 47-32.5 79.5T480-220ZM200-360h560q0-116-82-198t-198-82q-116 0-198 82t-82 198Z"/>
    </Icon>
  );
};

IconMaterialLightW100Filled.displayName = 'OnesyIconMaterialLightW100Filled';

export default IconMaterialLightW100Filled;
