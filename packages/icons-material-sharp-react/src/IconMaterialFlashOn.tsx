import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOn = (props: IIcon) => {

  return (
    <Icon
      name='FlashOn'

      short_name='FlashOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-336 128-184H494l80-280H360v320h120v144ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm80-400H360h120Z"/>
    </Icon>
  );
};

IconMaterialFlashOn.displayName = 'OnesyIconMaterialFlashOn';

export default IconMaterialFlashOn;
