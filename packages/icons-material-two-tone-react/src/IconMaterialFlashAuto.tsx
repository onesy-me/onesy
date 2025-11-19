import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashAuto = (props: IIcon) => {

  return (
    <Icon
      name='FlashAuto'

      short_name='FlashAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 2v12h3v9l7-12H9l4-9zm14 0l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2h-2zm-.15 5.65L18 4l1.15 3.65h-2.3z"/>
    </Icon>
  );
};

IconMaterialFlashAuto.displayName = 'OnesyIconMaterialFlashAuto';

export default IconMaterialFlashAuto;
