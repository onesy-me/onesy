import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDualScreenFilled = (props: IIcon) => {

  return (
    <Icon
      name='DualScreenFilled'

      short_name='DualScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-202v-678l400 161v677L160-202Zm480 2v-574L378-880h422v680H640Z"/>
    </Icon>
  );
};

IconMaterialDualScreenFilled.displayName = 'OnesyIconMaterialDualScreenFilled';

export default IconMaterialDualScreenFilled;
