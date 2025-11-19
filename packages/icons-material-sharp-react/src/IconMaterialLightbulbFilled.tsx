import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulbFilled = (props: IIcon) => {

  return (
    <Icon
      name='LightbulbFilled'

      short_name='Lightbulb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Z"/>
    </Icon>
  );
};

IconMaterialLightbulbFilled.displayName = 'OnesyIconMaterialLightbulbFilled';

export default IconMaterialLightbulbFilled;
