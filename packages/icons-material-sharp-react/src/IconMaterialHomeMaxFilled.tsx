import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMaxFilled = (props: IIcon) => {

  return (
    <Icon
      name='HomeMaxFilled'

      short_name='HomeMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-40h-80q-66 0-113-47T40-360v-240q0-66 47-113t113-47h560q66 0 113 47t47 113v240q0 66-47 113t-113 47h-80v40H280Z"/>
    </Icon>
  );
};

IconMaterialHomeMaxFilled.displayName = 'OnesyIconMaterialHomeMaxFilled';

export default IconMaterialHomeMaxFilled;
