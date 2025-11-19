import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightFilled = (props: IIcon) => {

  return (
    <Icon
      name='LightFilled'

      short_name='Light'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-66 0-113-47t-47-113H200q-33 0-56.5-23.5T120-360q0-140 92-241.5T440-718v-82q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v82q136 15 228 116.5T840-360q0 33-23.5 56.5T760-280H640q0 66-47 113t-113 47ZM200-360h560q0-116-82-198t-198-82q-116 0-198 82t-82 198Z"/>
    </Icon>
  );
};

IconMaterialLightFilled.displayName = 'OnesyIconMaterialLightFilled';

export default IconMaterialLightFilled;
