import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOnFilled = (props: IIcon) => {

  return (
    <Icon
      name='FlashOnFilled'

      short_name='FlashOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80v-320H280v-480h400l-80 280h160L400-80Z"/>
    </Icon>
  );
};

IconMaterialFlashOnFilled.displayName = 'OnesyIconMaterialFlashOnFilled';

export default IconMaterialFlashOnFilled;
